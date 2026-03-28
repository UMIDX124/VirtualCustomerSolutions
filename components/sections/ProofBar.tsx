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
  { icon: Star, value: 97, suffix: '%', label: 'Client Retention' },
  { icon: Globe, value: 15, suffix: '+', label: 'Countries' },
];

export function ProofBar() {
  return (
    <section className="relative border-y border-white/[0.06] bg-white/[0.02] py-10 backdrop-blur-sm sm:py-14">
      <div className="container-wide">
        <StaggerChildren staggerDelay={0.12} className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <StaggerItem key={m.label} className="group">
                <div className="flex flex-col items-center gap-3 text-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 transition-[border-color,background-color] duration-500 hover:border-[#22C55E]/20 hover:bg-[#22C55E]/[0.03]">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center group-hover:bg-[#22C55E]/20 transition-colors duration-500">
                    <Icon className="h-5 w-5 text-[#22C55E] neon-text" />
                  </div>
                  <p className="font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
                    <CountUpOnView target={m.value} suffix={m.suffix} duration={2} className="tabular-nums" />
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                    {m.label}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
