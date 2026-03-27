import type { AgentType } from './agents'

// ── Types ──────────────────────────────────────────────────────────────────────

export interface LeadData {
  name?: string
  email?: string
  company?: string
  phone?: string
  interest?: string
}

export interface ConversationMessage {
  role: string
  content: string
}

export interface ConversationSession {
  messages: ConversationMessage[]
  leadData: LeadData
  currentAgent: AgentType
  qualityScore: number
  lastActivity: number
}

// ── Constants ──────────────────────────────────────────────────────────────────

const SESSION_TTL = 60 * 60 * 1000 // 1 hour in milliseconds
const MAX_MESSAGES = 20 // Sliding window size

// ── Session Store ──────────────────────────────────────────────────────────────

const sessions = new Map<string, ConversationSession>()

function createSession(): ConversationSession {
  return {
    messages: [],
    leadData: {},
    currentAgent: 'conversation',
    qualityScore: 0,
    lastActivity: Date.now(),
  }
}

function cleanExpiredSessions(): void {
  const now = Date.now()
  for (const [id, session] of sessions) {
    if (now - session.lastActivity > SESSION_TTL) {
      sessions.delete(id)
    }
  }
}

// ── Public API ─────────────────────────────────────────────────────────────────

export function getSession(sessionId: string): ConversationSession {
  // Clean up expired sessions on every access
  cleanExpiredSessions()

  let session = sessions.get(sessionId)
  if (!session) {
    session = createSession()
    sessions.set(sessionId, session)
  }

  session.lastActivity = Date.now()
  return session
}

export function updateSession(
  sessionId: string,
  updates: Partial<Pick<ConversationSession, 'currentAgent' | 'qualityScore'>>
): ConversationSession {
  const session = getSession(sessionId)

  if (updates.currentAgent !== undefined) {
    session.currentAgent = updates.currentAgent
  }
  if (updates.qualityScore !== undefined) {
    session.qualityScore = updates.qualityScore
  }

  session.lastActivity = Date.now()
  return session
}

export function addMessage(
  sessionId: string,
  role: string,
  content: string
): ConversationSession {
  const session = getSession(sessionId)

  session.messages.push({ role, content })

  // Enforce sliding window — keep only the last MAX_MESSAGES
  if (session.messages.length > MAX_MESSAGES) {
    session.messages = session.messages.slice(-MAX_MESSAGES)
  }

  session.lastActivity = Date.now()
  return session
}

export function updateLeadData(
  sessionId: string,
  data: Partial<LeadData>
): ConversationSession {
  const session = getSession(sessionId)

  session.leadData = {
    ...session.leadData,
    ...data,
  }

  session.lastActivity = Date.now()
  return session
}

export function updateScore(
  sessionId: string,
  score: number
): ConversationSession {
  const session = getSession(sessionId)
  session.qualityScore = score
  session.lastActivity = Date.now()
  return session
}
