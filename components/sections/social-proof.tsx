import { AmbientOrbs } from "@/components/motion/ambient-orbs";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { CardGrid } from "@/components/ui/card-grid";
import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { industries, stats } from "@/lib/content";

export function SocialProof() {
  return (
    <Section id="proof" labelledBy="proof-heading" className="overflow-hidden">
      <div className="absolute inset-x-0 bottom-10 top-10 bg-[linear-gradient(135deg,#22113F_0%,#301852_42%,#5D2F77_100%)]" />
      <AmbientOrbs variant="section" className="opacity-75" />
      <SectionContainer className="relative">
        <div className="section-frame bg-transparent px-8 py-8 md:px-10 md:py-10 lg:px-12 lg:py-14">
          <SectionHeader
            id="proof-heading"
            eyebrow="Proof and momentum"
            title="Built around measurable progress, not vague activity."
            description="Every engagement is designed with operating cadence, KPI visibility, and delivery accountability so leaders can scale with more confidence and less guesswork."
            tone="light"
            className="mb-[4.5rem]"
          />

          <CardGrid columns="four">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <Card className="relative h-full overflow-hidden rounded-[24px] border-white/10 bg-white/8 p-8 text-white backdrop-blur-md">
                  <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.36),transparent)]" />
                  <div className="mb-6 h-px w-[4.5rem] bg-[linear-gradient(90deg,rgba(132,219,255,0.95),rgba(228,90,146,0.88))]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/46">Performance signal</p>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="mt-4 text-[40px] font-semibold leading-[1.04] tracking-[-0.055em] text-white md:text-[44px]"
                  />
                  <h3 className="mt-5 text-[15px] font-semibold uppercase tracking-[0.08em] text-white/88">{stat.label}</h3>
                  <p className="mt-4 max-w-[24ch] text-[14px] leading-[1.8] text-white/62">{stat.description}</p>
                </Card>
              </Reveal>
            ))}
          </CardGrid>

          <Reveal delay={0.2}>
            <div className="mt-16 border-t border-white/10 pt-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-white/52">Scaling teams across</p>
              <div className="mt-6 flex flex-wrap gap-3.5">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[13px] font-medium text-white/76"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </Section>
  );
}
