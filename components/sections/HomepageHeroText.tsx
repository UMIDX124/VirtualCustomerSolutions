'use client';

import { TextReveal } from '@/components/motion/TextReveal';
import { LineReveal } from '@/components/motion/TextReveal';

/**
 * Compact text reveal section between hero and proof bar.
 * Words light up as user scrolls — creates dramatic pacing.
 */
export function HomepageHeroText() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-primary)] overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container-wide relative z-10 max-w-3xl mx-auto">
        <LineReveal className="mb-4">
          <span className="badge text-xs">Why Us</span>
        </LineReveal>

        <TextReveal
          text="Most businesses waste time and money trying to do everything in-house. We plug in the people, systems, and marketing muscle you need — so you stop juggling and start growing."
          className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed tracking-tight"
        />

        <div className="mt-12 grid grid-cols-3 gap-6">
          {[
            { value: '40-60%', label: 'Lower Costs' },
            { value: '8+', label: 'Years Running' },
            { value: '<1 week', label: 'Staff Ready' },
          ].map((stat, i) => (
            <LineReveal key={i} delay={0.3 + i * 0.2}>
              <div className="text-center">
                <div className="font-mono text-xl md:text-2xl font-bold text-[#22C55E] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </LineReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
