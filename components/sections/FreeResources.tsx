import { ArrowRight, Users, BarChart3, Settings } from 'lucide-react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

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
        <div className="scroll-reveal mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#22C55E] neon-text">
            Resources
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#09090B] sm:text-4xl">
            Free Resources
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-black/60">
            Actionable guides built from real client engagements. No fluff, just frameworks you
            can implement today.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-6 md:grid-cols-3 stagger-children">
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.slug} className="scroll-scale">
                <div
                  className="group flex flex-col rounded-2xl border border-black/[0.06] bg-black/[0.03] p-7 transition-[border-color,background-color] hover:border-[#22C55E]/25 hover:bg-black/[0.05]"
                >
                  {/* icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#22C55E]/10 text-[#22C55E] transition-colors group-hover:bg-[#22C55E]/20 neon-text neon-box">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* title */}
                  <h3 className="mb-3 font-display text-lg font-semibold leading-snug text-[#09090B]">
                    {r.title}
                  </h3>

                  {/* description */}
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-black/60">
                    {r.description}
                  </p>

                  {/* link */}
                  <Link
                    href={`/guides/${r.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#22C55E] transition hover:text-[#4ADE80] neon-text"
                  >
                    Read Guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
