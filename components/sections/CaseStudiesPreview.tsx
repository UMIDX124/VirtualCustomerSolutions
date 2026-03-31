import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CaseStudy {
  slug: string;
  clientType: string;
  headline: string;
  metrics: { label: string; value: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-revenue-growth-system',
    clientType: 'E-Commerce Brand',
    headline: 'Took an Online Store from $8K to $35K/month',
    metrics: [
      { label: 'Monthly Revenue', value: '4.3x' },
      { label: 'Ad Spend ROAS', value: '3.8x' },
      { label: 'Ops Cost Cut', value: '45%' },
    ],
  },
  {
    slug: 'saas-remote-team-scaling',
    clientType: 'SaaS Startup',
    headline: 'Built a 12-Person Remote Team in 6 Weeks',
    metrics: [
      { label: 'Hires Made', value: '12' },
      { label: 'Avg. Ramp Time', value: '8 days' },
      { label: 'Monthly Saved', value: '$18K' },
    ],
  },
  {
    slug: 'agency-performance-marketing-turnaround',
    clientType: 'Marketing Agency',
    headline: 'Helped an Agency Triple Their Client Base',
    metrics: [
      { label: 'Clients', value: '5 → 16' },
      { label: 'Profit Margin', value: '+28%' },
      { label: 'Staff Turnover', value: '-60%' },
    ],
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="section-padding relative bg-white/[0.01] border-y border-white/[0.04]">
      <div className="container-wide">
        {/* header */}
        <div className="scroll-reveal mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#22C55E] neon-text">
              Results
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
              Case Studies
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#22C55E] transition hover:text-[#4ADE80] neon-text min-h-[44px]"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* cards */}
        <div className="grid gap-6 md:grid-cols-3 stagger-children">
          {caseStudies.map((cs) => (
            <div key={cs.slug} className="scroll-scale">
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] transition-[border-color,background-color] hover:border-[#22C55E]/30 hover:bg-white/[0.05]"
              >
                {/* gradient accent top border */}
                <div className="h-1 w-full bg-gradient-to-r from-[#059669] via-[#22C55E] to-[#4ADE80] neon-line" />

                <div className="flex flex-1 flex-col p-7">
                  {/* client type */}
                  <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                    {cs.clientType}
                  </span>

                  {/* headline */}
                  <h3 className="mb-5 font-display text-xl font-bold leading-snug text-[#F5F5F5] transition-colors group-hover:text-[#22C55E]">
                    {cs.headline}
                  </h3>

                  {/* metric pills */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/[0.08] px-3 py-1.5 text-xs font-medium"
                      >
                        <span className="text-[#22C55E] neon-text-strong">{m.value}</span>
                        <span className="text-white/60">{m.label}</span>
                      </span>
                    ))}
                  </div>

                  {/* link */}
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#22C55E] transition group-hover:text-[#4ADE80] neon-text min-h-[44px]">
                    Read Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
