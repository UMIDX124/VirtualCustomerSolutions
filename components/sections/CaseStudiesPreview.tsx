'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { RevealOnScroll, StaggerChildren, StaggerItem } from '@/components/animations/ScrollAnimations';

interface CaseStudy {
  slug: string;
  clientType: string;
  headline: string;
  metrics: { label: string; value: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-growth',
    clientType: 'E-Commerce Brand',
    headline: '340% Revenue Growth in 12 Months',
    metrics: [
      { label: 'Revenue Growth', value: '340%' },
      { label: 'ROAS', value: '5.2x' },
      { label: 'Cost Reduction', value: '62%' },
    ],
  },
  {
    slug: 'saas-scaling',
    clientType: 'SaaS Company',
    headline: 'Scaled Operations Across 4 Countries',
    metrics: [
      { label: 'Team Size', value: '3x' },
      { label: 'Delivery Speed', value: '+85%' },
      { label: 'Overhead Saved', value: '$420K' },
    ],
  },
  {
    slug: 'agency-transformation',
    clientType: 'Digital Agency',
    headline: 'From 5 to 45 Clients in Under a Year',
    metrics: [
      { label: 'Client Growth', value: '9x' },
      { label: 'Profit Margin', value: '+38%' },
      { label: 'Churn Rate', value: '-72%' },
    ],
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        {/* header */}
        <RevealOnScroll variant="fade-up" duration={0.8}>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#3B82F6]">
                Results
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
                Case Studies
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#3B82F6] transition hover:text-[#60A5FA]"
            >
              View All Case Studies
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </RevealOnScroll>

        {/* cards */}
        <StaggerChildren staggerDelay={0.15} className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.slug}>
            <RevealOnScroll variant="zoom-in" duration={0.8}>
            <Link
              href={`/case-studies/${cs.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#1E293B]/50 transition-all hover:border-[#3B82F6]/30 hover:bg-[#1E293B]/70"
            >
              {/* gradient accent top border */}
              <div className="h-1 w-full bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA]" />

              <div className="flex flex-1 flex-col p-7">
                {/* client type */}
                <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  {cs.clientType}
                </span>

                {/* headline */}
                <h3 className="mb-5 font-display text-xl font-bold leading-snug text-[#F8FAFC] transition-colors group-hover:text-[#3B82F6]">
                  {cs.headline}
                </h3>

                {/* metric pills */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {cs.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/[0.06] px-3 py-1 text-xs font-medium"
                    >
                      <span className="text-[#3B82F6]">{m.value}</span>
                      <span className="text-[#94A3B8]">{m.label}</span>
                    </span>
                  ))}
                </div>

                {/* link */}
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#3B82F6] transition group-hover:text-[#60A5FA]">
                  Read Case Study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            </RevealOnScroll>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
