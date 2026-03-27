import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rate-limit'
import { matchFAQ } from '@/lib/ai-chatbot/faq'

export const maxDuration = 30

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'anonymous'

    const { success, remaining } = rateLimit(ip, 'chat', 30, 60 * 1000)
    if (!success) {
      return NextResponse.json(
        { role: 'assistant', content: 'You\'re sending messages too quickly. Please wait a moment.' },
        { status: 429, headers: { 'X-RateLimit-Remaining': String(remaining) } }
      )
    }

    const body = await request.json()
    const { message, sessionId = 'default' } = body

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { role: 'assistant', content: 'Please type a message.' },
        { status: 400 }
      )
    }

    const trimmedMessage = message.trim().slice(0, 1000)

    // If no GROQ_API_KEY, use FAQ fallback
    if (!process.env.GROQ_API_KEY) {
      const faqResponse = matchFAQ(trimmedMessage)
      return NextResponse.json({
        role: 'assistant',
        content: faqResponse ?? "Thanks for your message! Reach us at umidx932@gmail.com for help.",
      })
    }

    // Use AI orchestrator
    try {
      const { handleMessage } = await import('@/lib/ai-chatbot/orchestrator')
      const response = await handleMessage(sessionId, trimmedMessage)

      // If string returned (FAQ fallback from orchestrator)
      if (typeof response === 'string') {
        return NextResponse.json({ role: 'assistant', content: response })
      }

      // If ReadableStream returned (AI streaming) — collect full text and return as JSON
      // since our client expects JSON, not streaming
      const reader = response.getReader()
      const decoder = new TextDecoder()
      let fullText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        fullText += decoder.decode(value, { stream: true })
      }

      // Parse the streamed data to extract text content
      // The stream format has lines like: 0:"text chunk"\n
      const textParts = fullText.match(/0:"([^"]*)"/g)
      const cleanText = textParts
        ? textParts.map(p => p.slice(3, -1)).join('').replace(/\\n/g, '\n')
        : fullText

      return NextResponse.json({ role: 'assistant', content: cleanText || "I'm here to help! What would you like to know about VCS?" })
    } catch (aiError) {
      console.error('[chat] AI error:', aiError)
      const faqResponse = matchFAQ(trimmedMessage)
      return NextResponse.json({
        role: 'assistant',
        content: faqResponse ?? "I'm having a moment — reach us at umidx932@gmail.com!",
      })
    }
  } catch (error) {
    console.error('[chat] Error:', error)
    return NextResponse.json(
      { role: 'assistant', content: "Something went wrong. Reach us at umidx932@gmail.com." },
      { status: 500 }
    )
  }
}
