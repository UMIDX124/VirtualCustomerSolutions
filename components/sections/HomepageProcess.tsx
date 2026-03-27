'use client';

import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';
import { RevealOnScroll, StaggerChildren, StaggerItem } from '@/components/animations/ScrollAnimations';

const steps = [
  {
    title: 'Discovery & Audit',
    description:
      "We dissect your current operations, marketing spend, and team structure. No guesswork — we use data to pinpoint exactly where you're bleeding money and missing opportunities.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Strategy & Architecture',
    description:
      "Based on your audit, we architect a custom growth system — your ideal team composition, marketing channel mix, automation stack, and reporting framework with projected ROI.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: 'Launch & Execute',
    description:
      "We deploy your dedicated team and systems within 48 hours. From day one, you have real humans executing real campaigns with real-time reporting dashboards.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Optimize & Scale',
    description:
      "Monthly performance reviews, A/B testing, and continuous optimization. As results compound, we scale what works and cut what doesn't — always backed by data.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

export function HomepageProcess() {
  return (
    <section className="section-padding relative bg-[var(--bg-secondary)]">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <RevealOnScroll variant="fade-up" duration={0.8}>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display">
              From Audit to Scale in{' '}
              <span className="text-gradient-lime">Four Steps</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Steps */}
        <StaggerChildren staggerDelay={0.15} className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-[#22C55E]/50 via-[#22C55E]/20 to-transparent hidden md:block" />

          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <RevealOnScroll variant="fade-up" duration={0.7} delay={i * 0.1}>
                <div className="flex gap-6 mb-12 last:mb-0 group">
                  {/* Step number + icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E]/20 group-hover:border-[#22C55E]/40 transition-[background-color,border-color] duration-500">
                      {step.icon}
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#22C55E] text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                        Step {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-display mb-3 text-[var(--text-primary)] group-hover:text-[#22C55E] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
