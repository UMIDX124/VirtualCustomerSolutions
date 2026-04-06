import { cookies } from 'next/headers'

const COOKIE_NAME = 'vcs_admin_session'
const SESSION_MAX_AGE = 60 * 60 * 8 // 8 hours

function base64(value: string): string {
  return Buffer.from(value, 'utf-8').toString('base64url')
}

function fromBase64(value: string): string {
  return Buffer.from(value, 'base64url').toString('utf-8')
}

function getSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_PASS ||
    'vcs-dev-secret-change-me'
  )
}

async function hmac(value: string): Promise<string> {
  const secret = getSecret()
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(value))
  return Buffer.from(sig).toString('base64url')
}

export interface AdminCredentials {
  user: string
  pass: string
}

export function getAdminCredentials(): AdminCredentials | null {
  const user = process.env.ADMIN_USER
  const pass = process.env.ADMIN_PASS
  if (!user || !pass) return null
  return { user, pass }
}

export function verifyCredentials(user: string, pass: string): boolean {
  const creds = getAdminCredentials()
  if (!creds) return false
  // Constant-time-ish equality
  if (user.length !== creds.user.length || pass.length !== creds.pass.length) {
    return false
  }
  let same = 0
  for (let i = 0; i < user.length; i++) {
    same |= user.charCodeAt(i) ^ creds.user.charCodeAt(i)
  }
  for (let i = 0; i < pass.length; i++) {
    same |= pass.charCodeAt(i) ^ creds.pass.charCodeAt(i)
  }
  return same === 0
}

export async function createSessionToken(user: string): Promise<string> {
  const payload = JSON.stringify({
    user,
    exp: Date.now() + SESSION_MAX_AGE * 1000,
  })
  const payloadB64 = base64(payload)
  const sig = await hmac(payloadB64)
  return `${payloadB64}.${sig}`
}

export async function verifySessionToken(
  token: string | undefined
): Promise<{ user: string } | null> {
  if (!token) return null
  const parts = token.split('.')
  if (parts.length !== 2) return null
  const [payloadB64, sig] = parts
  const expectedSig = await hmac(payloadB64)
  if (expectedSig !== sig) return null
  try {
    const payload = JSON.parse(fromBase64(payloadB64)) as {
      user: string
      exp: number
    }
    if (payload.exp < Date.now()) return null
    return { user: payload.user }
  } catch {
    return null
  }
}

export async function setSessionCookie(token: string): Promise<void> {
  const store = await cookies()
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  })
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies()
  store.delete(COOKIE_NAME)
}

export async function getCurrentAdmin(): Promise<{ user: string } | null> {
  const store = await cookies()
  const token = store.get(COOKIE_NAME)?.value
  return verifySessionToken(token)
}

export function getSessionCookieName(): string {
  return COOKIE_NAME
}
