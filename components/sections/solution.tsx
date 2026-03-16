import { AmbientOrbs } from "@/components/motion/ambient-orbs";
import { ParallaxOrnament } from "@/components/motion/parallax-ornament";
import { Reveal } from "@/components/motion/reveal";
import { CardGrid } from "@/components/ui/card-grid";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { solutionPillars } from "@/lib/content";

export function Solution() {
  return (
    <Section id="solution" labelledBy="solution-heading" className="overflow-hidden bg-white/[0.12]">
      <AmbientOrbs variant="section" className="opacity-70" />
      <ParallaxOrnament className="right-0 top-10 h-64 w-64 bg-brand-support/12" travel={34} />
      <SectionContainer className="relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div className="space-y-8">
            <SectionHeader
              id="solution-heading"
              eyebrow="The solution"
              title="DigitalPoint connects strategy, remote execution, and systems into one scalable model."
              description="Instead of hiring separate vendors for every bottleneck, you get a partner that designs the growth plan, supports implementation, and improves performance week after week."
            />

            <Reveal delay={0.08}>
              <FeatureCard
                eyebrow="What this creates"
                title="One operating model instead of disconnected vendors."
                description="This is where strategy, visibility, and delivery start feeling coordinated rather than fragmented."
                className="overflow-hidden"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "One operating rhythm for marketing, ops, and support",
                    "Cleaner visibility into what is working and what is blocked",
                    "Remote capacity that expands execution without chaos",
                    "Systems that continue compounding as the business grows",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-brand-primary/10 bg-white/65 px-4 py-4 text-base leading-[1.7] text-muted">
                      {item}
                    </div>
                  ))}
                </div>
              </FeatureCard>
            </Reveal>
          </div>

          <CardGrid columns="two">
            {solutionPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <FeatureCard
                  eyebrow={`Pillar 0${index + 1}`}
                  title={pillar.title}
                  description={pillar.description}
                  className="transition duration-300 hover:-translate-y-1.5 hover:border-brand-primary/18"
                >
                  <div className="mt-auto pt-2">
                    <span className="inline-flex rounded-full border border-brand-primary/10 bg-brand-primary/5 px-4 py-2 text-[14px] font-medium text-brand-primary">
                      Built for durable scale
                    </span>
                  </div>
                </FeatureCard>
              </Reveal>
            ))}
          </CardGrid>
        </div>
      </SectionContainer>
    </Section>
  );
}
