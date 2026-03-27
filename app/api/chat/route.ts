import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'
import { matchFAQ } from '@/lib/ai-chatbot/faq'

export const maxDuration = 30

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 30 messages per 60 seconds per IP
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'anonymous'

    const { success, remaining } = rateLimit(ip, 'chat', 30, 60 * 1000)
    if (!success) {
      return NextResponse.json(
        { error: 'Too many messages. Please wait a moment before trying again.' },
        {
          status: 429,
          headers: { 'X-RateLimit-Remaining': String(remaining) },
        }
      )
    }

    // Extract message + sessionId from body
    const body = await request.json()
    const { message, sessionId } = body

    // Validate message
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string.' },
        { status: 400 }
      )
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be 1000 characters or less.' },
        { status: 400 }
      )
    }

    const trimmedMessage = message.trim()
    if (trimmedMessage.length === 0) {
      return NextResponse.json(
        { error: 'Message cannot be empty.' },
        { status: 400 }
      )
    }

    // If no GROQ_API_KEY, use FAQ fallback (non-streaming)
    if (!process.env.GROQ_API_KEY) {
      const faqResponse = matchFAQ(trimmedMessage)
      return NextResponse.json({
        role: 'assistant',
        content: faqResponse,
      })
    }

    // If GROQ_API_KEY exists, use AI orchestrator (streaming)
    const { handleMessage } = await import('@/lib/ai-chatbot/orchestrator')
    const stream = await handleMessage(trimmedMessage, sessionId)
    return stream
  } catch (error) {
    console.error('[chat] Error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
