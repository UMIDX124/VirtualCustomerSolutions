'use client';

import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';
import { StickyScrollSection } from '@/components/motion/StickyScrollSection';
import { ScrollLine, StaggerChildren, StaggerItem } from '@/components/animations/ScrollAnimations';

const steps = [
  {
    title: 'Discovery & Audit',
    description:
      "We start by dissecting your current operations, marketing spend, and team structure. No guesswork — we use data to pinpoint exactly where you're bleeding money and missing opportunities. This isn't a surface-level review; it's a forensic deep-dive.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Strategy & Architecture',
    description:
      "Based on your audit, we architect a custom growth system. This includes your ideal team composition, marketing channel mix, automation stack, and reporting framework. Every recommendation comes with projected ROI and a clear implementation timeline.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: 'Launch & Execute',
    description:
      "Your dedicated team is assembled, systems are deployed, and campaigns go live — typically within 48 hours. We handle onboarding, tool setup, and initial optimization so you see results from day one. No 90-day ramp-up period.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Optimize & Scale',
    description:
      "Continuous improvement is built into our DNA. Weekly performance reviews, monthly strategy sessions, and quarterly roadmap updates ensure your growth never plateaus. As you scale, we scale with you — adding specialists and expanding channels.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

export function HomepageProcess() {
  return (
    <div className="relative">
      <ScrollLine color="#3B82F6" className="left-4 md:left-8" />
      <StickyScrollSection
        steps={steps}
        badge="How It Works"
        title={
          <>
            From Audit to Scale in{' '}
            <span className="text-gradient-lime">Four Steps</span>
          </>
        }
      />
    </div>
  );
}
