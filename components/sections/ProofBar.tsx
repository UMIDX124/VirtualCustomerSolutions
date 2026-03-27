'use client';

import { Calendar, Users, Star, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { CountUpOnView, StaggerChildren, StaggerItem } from '@/components/animations/ScrollAnimations';

interface Metric {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { icon: Calendar, value: 8, suffix: '+', label: 'Years in Business' },
  { icon: Users, value: 200, suffix: '+', label: 'Clients Served' },
  { icon: Star, value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { icon: Globe, value: 15, suffix: '+', label: 'Countries' },
];

export function ProofBar() {
  return (
    <section className="relative border-y border-black/[0.06] bg-black/[0.02] py-8 backdrop-blur-sm sm:py-10">
      <div className="container-wide">
        <StaggerChildren staggerDelay={0.12} className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <StaggerItem key={m.label} className="flex flex-col items-center gap-2 text-center">
                <Icon className="h-5 w-5 text-[#22C55E] neon-text" />
                <p className="font-display text-2xl font-bold tracking-tight text-[#09090B] sm:text-3xl">
                  <CountUpOnView target={m.value} suffix={m.suffix} duration={2} className="tabular-nums" />
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-black/60">
                  {m.label}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
