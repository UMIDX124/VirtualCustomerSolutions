import { NextResponse } from 'next/server'
import { z } from 'zod/v4'
import {
  createSessionToken,
  getAdminCredentials,
  setSessionCookie,
  verifyCredentials,
} from '@/lib/admin-auth'
import { rateLimit } from '@/lib/rate-limit'

const loginSchema = z.object({
  user: z.string().min(1).max(200),
  pass: z.string().min(1).max(500),
})

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const { success } = rateLimit(ip, 'admin-login', 10, 15 * 60 * 1000)

    if (!success) {
      return NextResponse.json(
        { success: false, message: 'Too many login attempts. Try again later.' },
        { status: 429 }
      )
    }

    const creds = getAdminCredentials()
    if (!creds) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Admin credentials not configured. Set ADMIN_USER and ADMIN_PASS in environment.',
        },
        { status: 500 }
      )
    }

    const body = await request.json()
    const parsed = loginSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid input.' },
        { status: 400 }
      )
    }

    const { user, pass } = parsed.data
    if (!verifyCredentials(user, pass)) {
      return NextResponse.json(
        { success: false, message: 'Invalid username or password.' },
        { status: 401 }
      )
    }

    const token = await createSessionToken(user)
    await setSessionCookie(token)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[admin/login] error:', error)
    return NextResponse.json(
      { success: false, message: 'Login failed.' },
      { status: 500 }
    )
  }
}
