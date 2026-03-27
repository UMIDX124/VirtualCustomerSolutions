import { generateText } from 'ai'
import { createGroq } from '@ai-sdk/groq'
import {
  classifyIntent,
  selectAgent,
  getAgentConfig,
  type AgentType,
} from './agents'
import {
  getSession,
  addMessage,
  updateSession,
  updateLeadData,
  updateScore,
} from './memory'
import { matchFAQ } from './faq'

// ── Lead Scoring ───────────────────────────────────────────────────────────────

interface LeadSignals {
  score: number
  signals: string[]
}

function scoreLead(message: string, currentScore: number): LeadSignals {
  const lower = message.toLowerCase()
  let score = currentScore
  const signals: string[] = []

  const rules: { pattern: RegExp; points: number; label: string }[] = [
    { pattern: /\b(budget|spend|invest|allocat)\w*/i, points: 15, label: 'budget_mention' },
    { pattern: /\$[\d,]+/i, points: 20, label: 'dollar_amount' },
    { pattern: /\b(timeline|deadline|by\s+(next|end\s+of)|asap|urgent|this\s+(month|quarter|week))\b/i, points: 10, label: 'timeline' },
    { pattern: /\b(roi|conversion|click.?through|ctr|cpc|cpa|roas|impressions|leads?\s+gen)\b/i, points: 15, label: 'marketing_metrics' },
    { pattern: /\b(struggling|pain\s+point|challenge|problem|frustrated|not\s+working|losing)\b/i, points: 10, label: 'pain_point' },
    { pattern: /\b(e.?commerce|saas|agency|startup|small\s+business|smb|b2b|b2c|retail|restaurant)\b/i, points: 5, label: 'business_type' },
    { pattern: /\b(grow|scale|expand|increase|more\s+(leads|sales|revenue|traffic|customers))\b/i, points: 10, label: 'growth_intent' },
    { pattern: /\b(proposal|quote|estimate|pricing\s+for|how\s+much\s+for|custom\s+plan)\b/i, points: 20, label: 'proposal_request' },
  ]

  for (const rule of rules) {
    if (rule.pattern.test(lower)) {
      score += rule.points
      signals.push(rule.label)
    }
  }

  return { score, signals }
}

// ── Contact Info Extraction ────────────────────────────────────────────────────

interface ContactInfo {
  email?: string
  name?: string
}

function extractContactInfo(message: string): ContactInfo {
  const info: ContactInfo = {}

  // Email pattern
  const emailMatch = message.match(/[\w.+-]+@[\w-]+\.[\w.-]+/)
  if (emailMatch) {
    info.email = emailMatch[0]
  }

  // Name patterns: "I'm [Name]" or "my name is [Name]"
  const nameMatch = message.match(
    /(?:i'?m|my\s+name\s+is)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i
  )
  if (nameMatch) {
    info.name = nameMatch[1]
  }

  return info
}

// ── Main Handler ───────────────────────────────────────────────────────────────

export async function handleMessage(
  sessionId: string,
  userMessage: string
): Promise<string> {
  const groqApiKey = process.env.GROQ_API_KEY
  const session = getSession(sessionId)

  // Store user message
  addMessage(sessionId, 'user', userMessage)

  // Extract contact info from message
  const contactInfo = extractContactInfo(userMessage)
  if (contactInfo.email || contactInfo.name) {
    updateLeadData(sessionId, contactInfo)
  }

  // Score the lead
  const { score } = scoreLead(userMessage, session.qualityScore)
  updateScore(sessionId, score)

  // If no API key, fall back to FAQ matching
  if (!groqApiKey) {
    const faqAnswer = matchFAQ(userMessage)
    const fallbackResponse =
      faqAnswer ||
      "Thanks for your message! I'm having a bit of trouble connecting right now. You can reach our team directly at **umidx932@gmail.com** or [book a free growth audit](/free-growth-audit). We'd love to help!"

    addMessage(sessionId, 'assistant', fallbackResponse)
    return fallbackResponse
  }

  try {
    // Classify intent
    const intent = await classifyIntent(userMessage)

    // Select agent based on intent, score, and contact info
    const hasEmail = !!(session.leadData.email || contactInfo.email)
    const agentType = selectAgent({ intent, leadScore: score, hasEmail })

    // Update session with current agent
    updateSession(sessionId, { currentAgent: agentType })

    // Get agent config
    const agent = getAgentConfig(agentType)

    // Build message history for context
    const messages = session.messages.map((msg) => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content,
    }))

    // Generate response (non-streaming for reliability)
    const groq = createGroq({ apiKey: groqApiKey })
    const model = process.env.CHAT_MODEL || 'llama-3.3-70b-versatile'

    const { text } = await generateText({
      model: groq(model),
      system: agent.systemPrompt,
      messages,
      temperature: agent.temperature,
      maxTokens: agent.maxTokens,
    })

    addMessage(sessionId, 'assistant', text)
    return text
  } catch (err) {
    // Fall back to FAQ on any AI error
    console.error('[orchestrator] AI error:', err)
    const faqAnswer = matchFAQ(userMessage)
    const fallbackResponse =
      faqAnswer ||
      "I'm having a moment — let me connect you with the team! Email us at **umidx932@gmail.com** or [book a free growth audit](/free-growth-audit)."

    addMessage(sessionId, 'assistant', fallbackResponse)
    return fallbackResponse
  }
}
