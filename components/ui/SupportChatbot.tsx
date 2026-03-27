'use client';

import { useState, useEffect, useRef, useCallback, type FormEvent } from 'react';
import Image from 'next/image';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Mode = 'chat' | 'ticket';

interface TicketForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  priority: 'normal' | 'high';
}

const INITIAL_TICKET: TicketForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
  priority: 'normal',
};

const QUICK_ACTIONS = ['Our Services', 'Get Free Audit', 'Create Ticket'] as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let id = sessionStorage.getItem('vico-session');
  if (!id) {
    id = `vico-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    sessionStorage.setItem('vico-session', id);
  }
  return id;
}

/** Very minimal markdown: **bold**, *italic*, and bullet lists. */
function renderMarkdown(text: string) {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];

  lines.forEach((line, li) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      elements.push(
        <li key={li} className="ml-4 list-disc text-sm leading-relaxed">
          {inlineFormat(trimmed.slice(2))}
        </li>,
      );
    } else {
      if (li > 0) elements.push(<br key={`br-${li}`} />);
      elements.push(<span key={li}>{inlineFormat(trimmed)}</span>);
    }
  });

  return <>{elements}</>;
}

function inlineFormat(text: string): React.ReactNode {
  // Bold then italic
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(<strong key={match.index}>{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<em key={match.index}>{match[3]}</em>);
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length ? <>{parts}</> : text;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function SupportChatbot() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>('chat');
  const [ticket, setTicket] = useState<TicketForm>(INITIAL_TICKET);
  const [ticketStatus, setTicketStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [sessionId, setSessionId] = useState('');
  const [showBeacon, setShowBeacon] = useState(false);

  const [input, setInput] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Session ID on mount
  useEffect(() => {
    setSessionId(getSessionId());
  }, []);

  // First-visitor beacon
  useEffect(() => {
    const seen = localStorage.getItem('vico-seen');
    if (!seen) {
      setShowBeacon(true);
    }
  }, []);

  const dismissBeacon = useCallback(() => {
    setShowBeacon(false);
    localStorage.setItem('vico-seen', '1');
  }, []);

  // AI chat via AI SDK v6 — `body` removed in v6, input managed via own useState
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
    messages: [
      {
        id: 'welcome',
        role: 'assistant' as const,
        content:
          "Hey! \u{1F44B} I'm Vico, your virtual companion at VCS. How can I help you today?",
        parts: [
          {
            type: 'text' as const,
            text: "Hey! \u{1F44B} I'm Vico, your virtual companion at VCS. How can I help you today?",
          },
        ],
      },
    ],
  });

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  // Detect "ticket" intent in assistant responses
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (!last || (last.role as string) !== 'user') return;
    const lower = last.content.toLowerCase();
    if (lower.includes('create ticket') || lower.includes('open ticket')) {
      setMode('ticket');
    }
  }, [messages]);

  // Focus input when opening
  useEffect(() => {
    if (open && mode === 'chat') {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open, mode]);

  // ---- Handlers ----------------------------------------------------------

  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text) return;

    // Detect ticket intent from user input
    const lower = text.toLowerCase();
    if (lower.includes('create ticket') || lower.includes('open ticket')) {
      sendMessage({ text });
      setInput('');
      setTimeout(() => setMode('ticket'), 600);
      return;
    }

    sendMessage({ text });
    setInput('');
  }, [input, sendMessage]);

  const handleQuickAction = useCallback(
    (action: string) => {
      if (action === 'Create Ticket') {
        setMode('ticket');
        return;
      }
      sendMessage({ text: action });
    },
    [sendMessage],
  );

  const handleTicketSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setTicketStatus('sending');
      try {
        const res = await fetch('/api/ticket', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...ticket, sessionId }),
        });
        if (!res.ok) throw new Error('Failed');
        setTicketStatus('sent');
        setTicket(INITIAL_TICKET);
      } catch {
        setTicketStatus('error');
      }
    },
    [ticket, sessionId],
  );

  const toggleOpen = useCallback(() => {
    setOpen((prev) => {
      if (!prev) dismissBeacon();
      return !prev;
    });
  }, [dismissBeacon]);

  const isStreaming = status === 'streaming';
  const hasOnlyWelcome = messages.length === 1 && messages[0].id === 'welcome';

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------

  return (
    <>
      {/* ---- Inline styles for CSS keyframes ---- */}
      <style>{`
        @keyframes vico-pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
          }
          50% {
            box-shadow: 0 0 20px 8px rgba(34, 197, 94, 0.25);
          }
        }

        @keyframes vico-dot-bounce {
          0%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-6px);
          }
        }

        @keyframes vico-beacon-fade {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes vico-slide-up {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes vico-slide-down {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(16px) scale(0.95);
          }
        }

        .vico-chat-enter {
          animation: vico-slide-up 0.25s ease-out forwards;
          will-change: transform, opacity;
        }

        .vico-chat-exit {
          animation: vico-slide-down 0.2s ease-in forwards;
          will-change: transform, opacity;
        }
      `}
      </style>

      {/* ---- Floating button ---- */}
      <div className="fixed bottom-6 right-6 z-[9999]" style={{ position: 'fixed' }}>
        {/* Beacon tooltip for first visitors */}
        {showBeacon && !open && (
          <div
            className="absolute -top-14 right-0 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium shadow-lg"
            style={{
              background: '#1E293B',
              color: '#F8FAFC',
              animation: 'vico-beacon-fade 2s ease-in-out infinite',
            }}
          >
            Need help? Chat with Vico!
            <div
              className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45"
              style={{ background: '#1E293B' }}
            />
          </div>
        )}

        <button
          onClick={toggleOpen}
          aria-label={open ? 'Close chat' : 'Open chat'}
          className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border-none shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #22C55E, #059669)',
            animation: !open ? 'vico-pulse 2.5s ease-in-out infinite' : undefined,
          }}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <Image
              src="/mascot.png"
              alt="Vico"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          )}
        </button>
      </div>

      {/* ---- Chat window ---- */}
      {open && (
        <div
          className="vico-chat-enter fixed bottom-24 right-6 z-[9999] flex flex-col overflow-hidden rounded-2xl shadow-2xl sm:h-[550px] sm:w-[400px]"
          style={{
            background: '#0F172A',
            maxHeight: 'calc(100dvh - 120px)',
            /* Mobile full-width */
            width: 'min(400px, calc(100vw - 1.5rem))',
            height: 'min(550px, calc(100dvh - 120px))',
          }}
        >
          {/* ---- Header ---- */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ background: '#1E293B', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full">
              <Image src="/mascot.png" alt="Vico" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: '#F8FAFC' }}>
                Vico
              </p>
              <div className="flex items-center gap-1.5">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: '#22C55E' }}
                />
                <span className="text-xs" style={{ color: '#94A3B8' }}>
                  Online
                </span>
              </div>
            </div>

            {/* Mode toggle */}
            <div className="flex gap-1 rounded-lg p-0.5" style={{ background: '#0F172A' }}>
              <button
                onClick={() => setMode('chat')}
                className="rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                style={{
                  background: mode === 'chat' ? '#22C55E' : 'transparent',
                  color: mode === 'chat' ? '#0F172A' : '#94A3B8',
                }}
              >
                Chat
              </button>
              <button
                onClick={() => setMode('ticket')}
                className="rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                style={{
                  background: mode === 'ticket' ? '#22C55E' : 'transparent',
                  color: mode === 'ticket' ? '#0F172A' : '#94A3B8',
                }}
              >
                Ticket
              </button>
            </div>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-7 w-7 items-center justify-center rounded-md transition-colors hover:bg-white/10"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ---- Body ---- */}
          {mode === 'chat' ? (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3" style={{ scrollBehavior: 'smooth' }}>
                {messages.map((msg) => {
                  const isUser = (msg.role as string) === 'user';
                  return (
                    <div key={msg.id} className={`mb-3 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className="max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed"
                        style={{
                          background: isUser ? 'rgba(34,197,94,0.1)' : '#1E293B',
                          color: isUser ? '#F8FAFC' : '#CBD5E1',
                          borderBottomRightRadius: isUser ? '4px' : undefined,
                          borderBottomLeftRadius: !isUser ? '4px' : undefined,
                        }}
                      >
                        {renderMarkdown(msg.content)}
                      </div>
                    </div>
                  );
                })}

                {/* Quick actions after welcome */}
                {hasOnlyWelcome && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action}
                        onClick={() => handleQuickAction(action)}
                        className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors hover:border-transparent"
                        style={{
                          borderColor: 'rgba(34,197,94,0.3)',
                          color: '#22C55E',
                          background: 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.background = 'rgba(34,197,94,0.1)';
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.background = 'transparent';
                        }}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                )}

                {/* Typing indicator */}
                {isStreaming && (
                  <div className="mb-3 flex justify-start">
                    <div
                      className="flex items-center gap-1 rounded-2xl px-4 py-3"
                      style={{ background: '#1E293B' }}
                    >
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="inline-block h-2 w-2 rounded-full"
                          style={{
                            background: '#94A3B8',
                            animation: `vico-dot-bounce 1.2s ease-in-out ${i * 0.15}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: '#1E293B', borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Type a message..."
                  className="flex-1 rounded-xl border-none px-3.5 py-2.5 text-sm outline-none placeholder:text-gray-500"
                  style={{ background: '#0F172A', color: '#F8FAFC' }}
                  disabled={isStreaming}
                />
                <button
                  onClick={handleSend}
                  disabled={isStreaming || !input.trim()}
                  aria-label="Send message"
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-opacity disabled:opacity-40"
                  style={{ background: '#22C55E' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            /* ---- Ticket form ---- */
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {ticketStatus === 'sent' ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: 'rgba(34,197,94,0.15)' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#F8FAFC' }}>
                    Ticket submitted!
                  </p>
                  <p className="text-xs" style={{ color: '#94A3B8' }}>
                    We&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setTicketStatus('idle');
                      setMode('chat');
                    }}
                    className="mt-2 rounded-lg px-4 py-2 text-xs font-medium"
                    style={{ background: '#22C55E', color: '#0F172A' }}
                  >
                    Back to Chat
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="flex flex-col gap-3">
                  <h3 className="text-sm font-semibold" style={{ color: '#F8FAFC' }}>
                    Create a Support Ticket
                  </h3>

                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={ticket.name}
                    onChange={(e) => setTicket((t) => ({ ...t, name: e.target.value }))}
                    className="rounded-lg border-none px-3 py-2.5 text-sm outline-none placeholder:text-gray-500"
                    style={{ background: '#1E293B', color: '#F8FAFC' }}
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={ticket.email}
                    onChange={(e) => setTicket((t) => ({ ...t, email: e.target.value }))}
                    className="rounded-lg border-none px-3 py-2.5 text-sm outline-none placeholder:text-gray-500"
                    style={{ background: '#1E293B', color: '#F8FAFC' }}
                  />

                  <input
                    type="text"
                    required
                    placeholder="Subject"
                    value={ticket.subject}
                    onChange={(e) => setTicket((t) => ({ ...t, subject: e.target.value }))}
                    className="rounded-lg border-none px-3 py-2.5 text-sm outline-none placeholder:text-gray-500"
                    style={{ background: '#1E293B', color: '#F8FAFC' }}
                  />

                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your issue..."
                    value={ticket.message}
                    onChange={(e) => setTicket((t) => ({ ...t, message: e.target.value }))}
                    className="resize-none rounded-lg border-none px-3 py-2.5 text-sm outline-none placeholder:text-gray-500"
                    style={{ background: '#1E293B', color: '#F8FAFC' }}
                  />

                  {/* Priority */}
                  <div>
                    <p className="mb-2 text-xs font-medium" style={{ color: '#94A3B8' }}>
                      Priority
                    </p>
                    <div className="flex gap-4">
                      {(['normal', 'high'] as const).map((p) => (
                        <label key={p} className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: '#CBD5E1' }}>
                          <span
                            className="flex h-4 w-4 items-center justify-center rounded-full border-2"
                            style={{
                              borderColor: ticket.priority === p ? '#22C55E' : '#475569',
                            }}
                          >
                            {ticket.priority === p && (
                              <span
                                className="block h-2 w-2 rounded-full"
                                style={{ background: '#22C55E' }}
                              />
                            )}
                          </span>
                          <input
                            type="radio"
                            name="priority"
                            value={p}
                            checked={ticket.priority === p}
                            onChange={() => setTicket((t) => ({ ...t, priority: p }))}
                            className="sr-only"
                          />
                          {p.charAt(0).toUpperCase() + p.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>

                  {ticketStatus === 'error' && (
                    <p className="text-xs" style={{ color: '#EF4444' }}>
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={ticketStatus === 'sending'}
                    className="mt-1 rounded-lg py-2.5 text-sm font-semibold transition-opacity disabled:opacity-60"
                    style={{ background: '#22C55E', color: '#0F172A' }}
                  >
                    {ticketStatus === 'sending' ? 'Submitting...' : 'Submit Ticket'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('chat')}
                    className="text-xs underline"
                    style={{ color: '#94A3B8' }}
                  >
                    Back to chat
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
