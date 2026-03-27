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
        <div className="scroll-reveal mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#22C55E] neon-text">
              Results
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#09090B] sm:text-4xl">
              Case Studies
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#22C55E] transition hover:text-[#4ADE80] neon-text"
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
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.03] transition-[border-color,background-color] hover:border-[#22C55E]/30 hover:bg-black/[0.05]"
              >
                {/* gradient accent top border */}
                <div className="h-1 w-full bg-gradient-to-r from-[#059669] via-[#22C55E] to-[#4ADE80] neon-line" />

                <div className="flex flex-1 flex-col p-7">
                  {/* client type */}
                  <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-black/40">
                    {cs.clientType}
                  </span>

                  {/* headline */}
                  <h3 className="mb-5 font-display text-xl font-bold leading-snug text-[#09090B] transition-colors group-hover:text-[#22C55E]">
                    {cs.headline}
                  </h3>

                  {/* metric pills */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/[0.06] px-3 py-1 text-xs font-medium neon-border"
                      >
                        <span className="text-[#22C55E] neon-text-strong">{m.value}</span>
                        <span className="text-black/60">{m.label}</span>
                      </span>
                    ))}
                  </div>

                  {/* link */}
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#22C55E] transition group-hover:text-[#4ADE80] neon-text">
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
