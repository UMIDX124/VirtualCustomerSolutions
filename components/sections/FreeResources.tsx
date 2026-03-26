'use client';

import { ArrowRight, Users, BarChart3, Settings } from 'lucide-react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { RevealOnScroll, StaggerChildren, StaggerItem } from '@/components/animations/ScrollAnimations';

interface Resource {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

const resources: Resource[] = [
  {
    icon: Users,
    title: 'The Complete Guide to Remote Team Management',
    description:
      'Everything you need to hire, onboard, and manage high-performing remote teams across time zones. Includes SOPs, tools, and communication frameworks.',
    slug: 'remote-team-management',
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing Playbook 2025',
    description:
      'Data-driven strategies for paid acquisition, conversion optimisation, and multi-channel attribution that deliver measurable ROI.',
    slug: 'performance-marketing-playbook-2025',
  },
  {
    icon: Settings,
    title: 'Business Systems & Reporting Framework',
    description:
      'A step-by-step blueprint for building integrated reporting dashboards and automating operational workflows.',
    slug: 'business-systems-reporting-framework',
  },
];

export function FreeResources() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        {/* header */}
        <RevealOnScroll variant="fade-up" duration={0.8}>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#3B82F6]">
              Resources
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
              Free Resources
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#94A3B8]">
              Actionable guides built from real client engagements. No fluff, just frameworks you
              can implement today.
            </p>
          </div>
        </RevealOnScroll>

        {/* cards */}
        <StaggerChildren staggerDelay={0.12} className="grid gap-6 md:grid-cols-3">
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <StaggerItem key={r.slug}>
              <RevealOnScroll variant="fade-left" duration={0.8}>
              <div
                className="group flex flex-col rounded-2xl border border-white/[0.06] bg-[#1E293B]/50 p-7 transition-all hover:border-[#3B82F6]/25 hover:bg-[#1E293B]/70"
              >
                {/* icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] transition-colors group-hover:bg-[#3B82F6]/20">
                  <Icon className="h-6 w-6" />
                </div>

                {/* title */}
                <h3 className="mb-3 font-display text-lg font-semibold leading-snug text-[#F8FAFC]">
                  {r.title}
                </h3>

                {/* description */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#94A3B8]">
                  {r.description}
                </p>

                {/* link */}
                <Link
                  href={`/guides/${r.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#3B82F6] transition hover:text-[#60A5FA]"
                >
                  Read Guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              </RevealOnScroll>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
