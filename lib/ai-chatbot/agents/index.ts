import { generateText } from 'ai'
import { createGroq } from '@ai-sdk/groq'
import { COMPANY_KNOWLEDGE, VICO_PERSONALITY } from '../knowledge'

// ── Types ──────────────────────────────────────────────────────────────────────

export type Intent =
  | 'greeting'
  | 'service_question'
  | 'pricing_question'
  | 'process_question'
  | 'lead_signal'
  | 'contact_request'
  | 'ticket_request'
  | 'general_chat'

export type AgentType =
  | 'conversation'
  | 'knowledge'
  | 'lead_qualification'
  | 'lead_capture'
  | 'routing'

export interface AgentConfig {
  name: string
  systemPrompt: string
  temperature: number
  maxTokens: number
}

// ── Agent Definitions ──────────────────────────────────────────────────────────

export const AGENTS: Record<AgentType, AgentConfig> = {
  conversation: {
    name: 'Vico — Friendly Chat',
    systemPrompt: `You are Vico, the friendly AI assistant for Virtual Customer Solution (VCS).

${VICO_PERSONALITY}

${COMPANY_KNOWLEDGE}

Your role is casual conversation. Welcome visitors, answer light questions, and gently steer them toward learning about VCS services. If they seem interested, ask what challenges they're facing with their marketing or business growth.`,
    temperature: 0.7,
    maxTokens: 300,
  },

  knowledge: {
    name: 'Vico — Knowledge Expert',
    systemPrompt: `You are Vico, the knowledgeable AI assistant for Virtual Customer Solution (VCS).

${VICO_PERSONALITY}

${COMPANY_KNOWLEDGE}

Your role is answering specific questions about VCS services, pricing, processes, and capabilities. Be thorough but concise. Always end with a relevant follow-up question or suggest a next step like booking a free audit.`,
    temperature: 0.4,
    maxTokens: 500,
  },

  lead_qualification: {
    name: 'Vico — Lead Qualifier',
    systemPrompt: `You are Vico, the AI assistant for Virtual Customer Solution (VCS), currently qualifying a potential lead.

${VICO_PERSONALITY}

${COMPANY_KNOWLEDGE}

Your role is to learn more about this visitor's needs. Ask about:
- Their business type and size
- Current marketing challenges
- Budget range and timeline
- Specific goals they want to achieve

Be conversational, not interrogative. Ask ONE question at a time. If they share enough info, suggest booking a free growth audit.`,
    temperature: 0.5,
    maxTokens: 350,
  },

  lead_capture: {
    name: 'Vico — Lead Capture',
    systemPrompt: `You are Vico, the AI assistant for Virtual Customer Solution (VCS), helping capture lead information.

${VICO_PERSONALITY}

${COMPANY_KNOWLEDGE}

This visitor has shown strong interest. Your role is to:
1. Acknowledge their interest warmly
2. Collect their name and email if not already provided
3. Ask about their specific needs briefly
4. Direct them to book a free growth audit at /free-growth-audit or contact us at contact@virtualcustomersolution.com

Keep it natural — don't make it feel like a form. If they've already shared contact info, thank them and confirm next steps.`,
    temperature: 0.5,
    maxTokens: 350,
  },

  routing: {
    name: 'Vico — Router',
    systemPrompt: `You are Vico, the AI assistant for Virtual Customer Solution (VCS), helping route visitors to the right resource.

${VICO_PERSONALITY}

${COMPANY_KNOWLEDGE}

Your role is directing visitors to the appropriate page or contact method:
- Support tickets → email contact@virtualcustomersolution.com with subject line
- General contact → /contact page or contact@virtualcustomersolution.com
- Free audit → /free-growth-audit
- Services info → /services
- Pricing → /pricing
- Case studies → /case-studies

Provide the link and a brief explanation of what they'll find there.`,
    temperature: 0.3,
    maxTokens: 250,
  },
}

// ── Intent Classification ──────────────────────────────────────────────────────

const INTENT_CLASSIFICATION_PROMPT = `Classify this message into one intent. Reply with ONLY the intent word.

Intents:
- greeting: hello, hi, hey, good morning, etc.
- service_question: asking about what services are offered, marketing, growth systems, remote workforce
- pricing_question: asking about costs, pricing, packages, rates, budget
- process_question: asking about how things work, methodology, steps, timeline
- lead_signal: mentions business challenges, growth goals, needing help, comparing options
- contact_request: wants to reach out, speak to someone, get in touch, book a call
- ticket_request: has a support issue, bug report, technical problem, complaint
- general_chat: everything else, off-topic, random conversation

Message: "{message}"

Intent:`

export async function classifyIntent(message: string): Promise<Intent> {
  const groqApiKey = process.env.GROQ_API_KEY
  if (!groqApiKey) {
    return fallbackClassify(message)
  }

  try {
    const groq = createGroq({ apiKey: groqApiKey })
    const model = process.env.CHAT_MODEL || 'llama-3.3-70b-versatile'

    const { text } = await generateText({
      model: groq(model),
      prompt: INTENT_CLASSIFICATION_PROMPT.replace('{message}', message),
      temperature: 0.1,
      maxOutputTokens: 20,
    })

    const cleaned = text.trim().toLowerCase().replace(/[^a-z_]/g, '') as Intent
    const validIntents: Intent[] = [
      'greeting',
      'service_question',
      'pricing_question',
      'process_question',
      'lead_signal',
      'contact_request',
      'ticket_request',
      'general_chat',
    ]

    return validIntents.includes(cleaned) ? cleaned : 'general_chat'
  } catch {
    return fallbackClassify(message)
  }
}

function fallbackClassify(message: string): Intent {
  const lower = message.toLowerCase()

  if (/^(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy|sup)\b/.test(lower)) {
    return 'greeting'
  }
  if (/\b(ticket|support|bug|issue|problem|broken|error|fix)\b/.test(lower)) {
    return 'ticket_request'
  }
  if (/\b(contact|reach|call|speak|talk|book|schedule|meeting)\b/.test(lower)) {
    return 'contact_request'
  }
  if (/\b(price|pricing|cost|rate|package|afford|budget|pay|fee)\b/.test(lower)) {
    return 'pricing_question'
  }
  if (/\b(service|offer|provide|marketing|growth|remote|workforce)\b/.test(lower)) {
    return 'service_question'
  }
  if (/\b(process|how\s+do|methodology|step|timeline|work\s+with)\b/.test(lower)) {
    return 'process_question'
  }
  if (/\b(need|help|struggling|challenge|grow|scale|improve|roi|revenue)\b/.test(lower)) {
    return 'lead_signal'
  }

  return 'general_chat'
}

// ── Agent Selection ────────────────────────────────────────────────────────────

interface SelectionContext {
  intent: Intent
  leadScore: number
  hasEmail: boolean
}

export function selectAgent(context: SelectionContext): AgentType {
  const { intent, leadScore, hasEmail } = context

  if (intent === 'ticket_request') {
    return 'routing'
  }

  if (intent === 'contact_request' && hasEmail) {
    return 'lead_capture'
  }

  if (intent === 'contact_request') {
    return 'routing'
  }

  if (intent === 'lead_signal' && leadScore > 40) {
    return 'lead_capture'
  }

  if (intent === 'lead_signal') {
    return 'lead_qualification'
  }

  if (
    intent === 'pricing_question' ||
    intent === 'service_question' ||
    intent === 'process_question'
  ) {
    return 'knowledge'
  }

  return 'conversation'
}

export function getAgentConfig(agentType: AgentType): AgentConfig {
  return AGENTS[agentType]
}
