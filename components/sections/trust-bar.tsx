import { Reveal } from "@/components/motion/reveal";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { CardGrid } from "@/components/ui/card-grid";
import { SectionContainer } from "@/components/ui/section-container";
import { trustBarItems, trustStats } from "@/lib/content";

export function TrustBar() {
  return (
    <section aria-label="Trust bar" className="relative -mt-8 pb-[72px] md:-mt-10 md:pb-24 lg:-mt-12 lg:pb-[120px]">
      <SectionContainer>
        <div className="section-frame overflow-hidden px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-9">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center">
            <Reveal>
              <div className="max-w-[34rem]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary/56">
                  Built for B2B operators who need clearer control
                </p>
                <p className="mt-4 max-w-[32rem] text-[15px] leading-[1.72] text-muted">
                  The work is designed to improve trust in the numbers, reduce execution friction, and give leadership a
                  clearer weekly view across marketing, revenue operations, and delivery.
                </p>
              <div className="mt-5 flex flex-wrap gap-3">
                  {trustBarItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-brand-primary/10 bg-white/86 px-4 py-2 text-[13px] font-medium text-ink/78"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <CardGrid columns="three" className="gap-4 lg:gap-5">
              {trustStats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.06}>
                  <div className="rounded-[22px] border border-brand-primary/10 bg-white/84 px-5 py-5 shadow-[0_16px_40px_rgba(62,30,104,0.08)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary/48">Proof signal</p>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="mt-3 text-[28px] font-semibold leading-[1.05] tracking-[-0.05em] text-ink"
                    />
                    <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink/82">{stat.label}</p>
                    <p className="mt-3 text-[14px] leading-[1.7] text-muted">{stat.description}</p>
                  </div>
                </Reveal>
              ))}
            </CardGrid>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
