'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';
import { Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const schema = z.object({
  email: z.email('Please enter a valid email address'),
});

type FormValues = z.infer<typeof schema>;

export function NewsletterSignup() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({});

  async function onSubmit(data: FormValues) {
    // validate manually with zod
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email }),
      });

      if (!res.ok) throw new Error('Subscription failed');

      setStatus('success');
      toast.success('You are subscribed! Check your inbox.');
      reset();
      // Reset back to idle after a few seconds
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      toast.error('Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 4000);
    }
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
            <input
              {...register('email')}
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              disabled={status === 'loading'}
              className="w-full rounded-full border border-white/[0.08] bg-[#0F172A] py-2.5 pl-10 pr-4 text-sm text-[#F8FAFC] placeholder-[#64748B] transition focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20 disabled:opacity-60"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#059669] to-[#22C55E] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#22C55E]/20 transition hover:shadow-[#22C55E]/30 disabled:opacity-60"
          >
            {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === 'success' && <CheckCircle2 className="h-4 w-4" />}
            {status === 'idle' && 'Subscribe'}
            {status === 'loading' && 'Subscribing'}
            {status === 'success' && 'Subscribed'}
            {status === 'error' && 'Try Again'}
          </button>
        </div>

        {errors.email && (
          <p className="flex items-center gap-1 text-xs text-red-400">
            <AlertCircle className="h-3 w-3" />
            {errors.email.message}
          </p>
        )}
      </form>
    </div>
  );
}
