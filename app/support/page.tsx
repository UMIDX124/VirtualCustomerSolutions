'use client';

import { useState } from 'react';
import { LifeBuoy, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GlassCard, FadeUp } from '@/components/ui-dp/AnimatedElements';
import { SiteShell } from '@/components/layout/SiteShell';

const priorityOptions = [
  { value: 'low', label: 'Low — General question' },
  { value: 'medium', label: 'Medium — Standard issue' },
  { value: 'high', label: 'High — Service impacted' },
  { value: 'urgent', label: 'Urgent — Critical / production down' },
] as const;

type Priority = typeof priorityOptions[number]['value'];

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium' as Priority,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setTicketId(json?.ticketId ?? null);
        setIsSubmitted(true);
      } else {
        alert(json?.error || 'Something went wrong. Please try again or email us at contact@virtualcustomersolution.com');
      }
    } catch {
      alert('Something went wrong. Please try again or email us at contact@virtualcustomersolution.com');
    }
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <SiteShell>
        <div className="pt-32 pb-20">
          <div className="container-narrow">
          <GlassCard className="p-12 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#22C55E]/15 flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-[#22C55E]" />
            </div>
            <h1 className="font-display text-3xl font-bold text-text-primary mb-4">
              Ticket Submitted
            </h1>
            <p className="text-text-secondary text-lg mb-2">
              Thanks — our support team has received your request.
            </p>
            {ticketId && (
              <p className="text-text-muted text-sm mb-6">
                Reference: <span className="text-[#22C55E] font-mono">{ticketId}</span>
              </p>
            )}
            <p className="text-text-muted">
              We typically respond within a few business hours. Urgent tickets are prioritized.
            </p>
          </GlassCard>
          </div>
        </div>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <div className="pt-32 pb-20">
        <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 mb-6">
            <LifeBuoy className="w-4 h-4 text-[#22C55E]" />
            <span className="text-xs font-semibold tracking-wider text-[#22C55E] uppercase">Customer Support</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            Submit a Support Ticket
          </h1>
          <p className="text-text-secondary text-lg">
            Existing client? Tell us what&apos;s going on and our team will get on it. For urgent issues, please mark the priority accordingly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Name *</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-surface-glass border-border-glass"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-surface-glass border-border-glass"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">Subject *</label>
                  <Input
                    type="text"
                    placeholder="Brief summary of the issue"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-surface-glass border-border-glass"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">Priority *</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value as Priority })}
                    className="w-full h-10 px-3 rounded-lg bg-surface-glass border border-border-glass text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
                  >
                    {priorityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">Description *</label>
                  <Textarea
                    placeholder="Describe the issue in detail. Include steps to reproduce, error messages, and any relevant context."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-surface-glass border-border-glass min-h-[160px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#22C55E] hover:bg-[#4ADE80] text-black font-semibold py-4 text-lg"
                >
                  {isLoading ? 'Submitting...' : 'Submit Ticket'}
                  {!isLoading && <Send className="w-5 h-5 ml-2" />}
                </Button>

                <p className="text-xs text-text-muted text-center pt-2">
                  Prefer email? Reach us at{' '}
                  <a href="mailto:contact@virtualcustomersolution.com" className="text-[#22C55E] hover:underline">
                    contact@virtualcustomersolution.com
                  </a>
                </p>
              </form>
            </GlassCard>
          </FadeUp>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
