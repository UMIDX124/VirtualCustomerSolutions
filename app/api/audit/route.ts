import { NextResponse } from 'next/server'
import { z } from 'zod/v4'
import { db } from '@/lib/db'
import { sendAuditConfirmation, sendAdminNotification } from '@/lib/email'
import { rateLimit } from '@/lib/rate-limit'

const auditSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  email: z.email('Invalid email address'),
  company: z.string().max(200).optional(),
  phone: z.string().max(50).optional(),
  message: z.string().max(5000).optional(),
  source: z.string().max(200).optional(),
  utmSource: z.string().max(200).optional(),
  utmMedium: z.string().max(200).optional(),
  utmCampaign: z.string().max(200).optional(),
})

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const { success, remaining } = rateLimit(ip, 'audit', 3)

    if (!success) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'X-RateLimit-Remaining': String(remaining) } }
      )
    }

    const body = await request.json()
    const parsed = auditSchema.safeParse(body)

    if (!parsed.success) {
      const errors = parsed.error.issues.map((i) => i.message)
      return NextResponse.json(
        { success: false, message: 'Validation failed.', errors },
        { status: 400 }
      )
    }

    const data = parsed.data

    // Save to database
    const submission = await db.auditSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company ?? null,
        phone: data.phone ?? null,
        message: data.message ?? null,
        source: data.source ?? null,
        utmSource: data.utmSource ?? null,
        utmMedium: data.utmMedium ?? null,
        utmCampaign: data.utmCampaign ?? null,
      },
    })

    // Send emails (non-blocking, don't fail the request if emails fail)
    Promise.allSettled([
      sendAuditConfirmation({
        name: data.name,
        email: data.email,
        company: data.company,
      }),
      sendAdminNotification('audit', {
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        message: data.message,
        source: data.source,
      }),
    ]).catch((err) => {
      console.error('Email sending failed:', err)
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Audit request received successfully.',
        id: submission.id,
      },
      { status: 201, headers: { 'X-RateLimit-Remaining': String(remaining) } }
    )
  } catch (error) {
    console.error('Audit form error:', error)
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    )
  }
}
