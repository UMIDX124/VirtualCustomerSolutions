'use client';

import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useNavigation } from '@/lib/navigation';
import { FloatingElement, TextReveal, MagneticHover } from '@/components/animations/ScrollAnimations';

const auditIncludes = [
  'Full Website & Marketing Review',
  'No Strings Attached',
  'Custom Report in 24 Hours',
  'Honest Feedback, Not a Sales Pitch',
  'Your Data Stays Private',
];

export function CTASection() {
  const { navigateTo } = useNavigation();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Large glowing orb behind the card */}
      <FloatingElement amplitude={12} duration={8} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] bg-[#22C55E]/[0.08] rounded-full blur-[120px]" />
      </FloatingElement>
      <FloatingElement amplitude={8} duration={6} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[300px] h-[300px] bg-[#22C55E]/[0.12] rounded-full blur-[80px]" />
      </FloatingElement>

      <div className="container-wide relative z-10">
        <div className="relative max-w-3xl mx-auto">
          {/* Outer glow border */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#22C55E]/40 via-[#22C55E]/10 to-[#22C55E]/40 blur-sm neon-line" />

          {/* Card */}
          <div className="relative rounded-2xl border border-[#22C55E]/20 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden neon-border">
            {/* Inner gradient shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/[0.04] via-transparent to-transparent" />

            <div className="relative z-10">
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#22C55E] to-[#059669] mb-8 shadow-lg shadow-[#22C55E]/25 animate-subtle-scale-pulse will-change-transform neon-box-strong"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </div>

              <TextReveal
                text="Let's Figure This Out Together"
                as="h2"
                className="text-4xl md:text-5xl font-bold mb-5 tracking-tight"
              />

              <p className="text-[var(--text-secondary)] text-lg max-w-lg mx-auto mb-10">
                Tell us what&apos;s not working, and we&apos;ll send you a straight-up honest breakdown with next steps. Takes 2 minutes to fill out.
              </p>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
                {auditIncludes.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                    <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 neon-text" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Big glowing CTA button */}
              <MagneticHover strength={0.3}>
                <button
                  onClick={() => navigateTo('free-audit')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-full bg-[#22C55E] text-black shadow-xl shadow-[#22C55E]/30 hover:bg-[#4ADE80] hover:shadow-2xl hover:shadow-[#22C55E]/40 hover:scale-[1.02] active:scale-[0.98] transition-[background-color,box-shadow,transform] duration-300 neon-box-strong"
                >
                  Get Your Free Audit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </MagneticHover>

              <p className="text-[var(--text-muted)] text-sm mt-6">
                Usually responds within a few hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
