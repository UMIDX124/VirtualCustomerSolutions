const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Clean up expired entries every 10 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitMap) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}, 10 * 60 * 1000)

export function rateLimit(
  ip: string,
  prefix: string,
  maxRequests: number,
  windowMs: number = 60 * 60 * 1000
): { success: boolean; remaining: number } {
  const key = `${prefix}:${ip}`
  const now = Date.now()
  const entry = rateLimitMap.get(key)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs })
    return { success: true, remaining: maxRequests - 1 }
  }

  if (entry.count >= maxRequests) {
    return { success: false, remaining: 0 }
  }

  entry.count++
  return { success: true, remaining: maxRequests - entry.count }
}
