import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { sendLeadAdminNotification, sendLeadAutoReply } from '@/lib/email'
import { rateLimit } from '@/lib/rate-limit'
import { leadSchema } from '@/lib/validations/lead'

const CRM_WEBHOOK_URL =
  process.env.CRM_WEBHOOK_URL || 'https://fu-corp-crm.vercel.app/api/webhook/lead'

async function forwardToCrm(lead: {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  description: string
  source: string
}): Promise<void> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)

    await fetch(CRM_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        company: '',
        service: lead.service,
        budget: lead.budget,
        message: lead.description,
        source: 'VCS',
        formType: 'consultation',
        originalSource: lead.source,
      }),
      signal: controller.signal,
    })

    clearTimeout(timeout)
  } catch (err) {
    // Non-blocking — CRM failures should never break lead capture
    console.error('[CRM webhook] Forward failed:', err)
  }
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const { success, remaining } = rateLimit(ip, 'leads', 5)

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
        },
        {
          status: 429,
          headers: { 'X-RateLimit-Remaining': String(remaining) },
        }
      )
    }

    const body = await request.json()
    const parsed = leadSchema.safeParse(body)

    if (!parsed.success) {
      const errors = parsed.error.issues.map((i) => i.message)
      return NextResponse.json(
        { success: false, message: 'Validation failed.', errors },
        { status: 400 }
      )
    }

    const data = parsed.data

    // Save to database
    const lead = await db.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        country: data.country || null,
        service: data.service,
        teamSize: data.teamSize,
        budget: data.budget,
        description: data.description || null,
        source: data.source || null,
        status: 'New',
      },
    })

    // Email notifications + CRM forward (non-blocking)
    Promise.allSettled([
      sendLeadAdminNotification({
        name: data.name,
        email: data.email,
        phone: data.phone,
        country: data.country,
        service: data.service,
        teamSize: data.teamSize,
        budget: data.budget,
        description: data.description,
        source: data.source,
      }),
      sendLeadAutoReply({
        name: data.name,
        email: data.email,
        phone: data.phone,
        country: data.country,
        service: data.service,
        teamSize: data.teamSize,
        budget: data.budget,
        description: data.description,
        source: data.source,
      }),
      forwardToCrm({
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        service: data.service,
        budget: data.budget,
        description: data.description || '',
        source: data.source || '',
      }),
    ]).catch((err) => {
      console.error('[leads] Async side-effects failed:', err)
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Consultation booked successfully.',
        id: lead.id,
      },
      {
        status: 201,
        headers: { 'X-RateLimit-Remaining': String(remaining) },
      }
    )
  } catch (error) {
    console.error('[leads] Form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while processing your request.',
      },
      { status: 500 }
    )
  }
}
