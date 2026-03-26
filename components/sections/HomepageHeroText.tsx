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
          <span className="badge text-xs">Our Mission</span>
        </LineReveal>

        <TextReveal
          text="We don't just provide services. We become your unfair advantage — embedding world-class talent and cutting-edge systems directly into your business so you can scale faster, spend smarter, and compete with companies ten times your size."
          className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed tracking-tight"
        />

        <div className="mt-12 grid grid-cols-3 gap-6">
          {[
            { value: '50-75%', label: 'Cost Savings' },
            { value: '3.2×', label: 'Average ROI' },
            { value: '<48h', label: 'Deployment Time' },
          ].map((stat, i) => (
            <LineReveal key={i} delay={0.3 + i * 0.2}>
              <div className="text-center">
                <div className="font-mono text-xl md:text-2xl font-bold text-[#3B82F6] mb-1">
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
