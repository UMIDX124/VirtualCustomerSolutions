/**
 * Rate limiter with Upstash Redis + in-memory fallback.
 *
 * If UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN are set,
 * uses durable Redis-backed limiting. Otherwise falls back to
 * an in-memory Map (best-effort under serverless scaling).
 */

let upstashClient: unknown = null;
let upstashTried = false;

async function getUpstash() {
  if (upstashTried) return upstashClient;
  upstashTried = true;
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return null;
  }
  try {
    const { Redis } = await import("@upstash/redis").catch(() => ({
      Redis: null,
    }));
    if (!Redis) return null;
    upstashClient = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
    return upstashClient;
  } catch {
    return null;
  }
}

const memoryBuckets = new Map<string, { count: number; resetAt: number }>();

let lastCleanup = 0;
function maybeCleanupMemory() {
  const now = Date.now();
  if (now - lastCleanup < 60_000) return;
  lastCleanup = now;
  for (const [k, v] of memoryBuckets.entries()) {
    if (v.resetAt < now) memoryBuckets.delete(k);
  }
}

function memoryLimit(
  key: string,
  maxRequests: number,
  windowMs: number
): { success: boolean; remaining: number } {
  const now = Date.now();
  const existing = memoryBuckets.get(key);

  if (!existing || existing.resetAt < now) {
    memoryBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: maxRequests - 1 };
  }

  if (existing.count >= maxRequests) {
    return { success: false, remaining: 0 };
  }

  existing.count += 1;
  return { success: true, remaining: maxRequests - existing.count };
}

/**
 * Rate-limit by IP.
 * @param ip        Client IP address
 * @param prefix    Namespace (e.g. "chat", "contact")
 * @param maxRequests  Max requests allowed in the window
 * @param windowMs  Window duration in ms (default: 1 hour)
 */
export async function rateLimit(
  ip: string,
  prefix: string,
  maxRequests: number,
  windowMs: number = 60 * 60 * 1000
): Promise<{ success: boolean; remaining: number }> {
  maybeCleanupMemory();
  const bucketKey = `${prefix}:ip:${ip}`;
  const windowSec = Math.ceil(windowMs / 1000);

  const upstash = (await getUpstash()) as {
    incr: (key: string) => Promise<number>;
    expire: (key: string, sec: number) => Promise<unknown>;
  } | null;

  if (upstash) {
    try {
      const count = await upstash.incr(bucketKey);
      if (count === 1) {
        await upstash.expire(bucketKey, windowSec);
      }
      const success = count <= maxRequests;
      return { success, remaining: Math.max(0, maxRequests - count) };
    } catch {
      // Fall through to memory
    }
  }

  return memoryLimit(bucketKey, maxRequests, windowMs);
}
