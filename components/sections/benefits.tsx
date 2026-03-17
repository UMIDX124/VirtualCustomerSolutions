import { ParallaxOrnament } from "@/components/motion/parallax-ornament";
import { Reveal } from "@/components/motion/reveal";
import { CardGrid } from "@/components/ui/card-grid";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <Section id="benefits" labelledBy="benefits-heading" className="overflow-hidden bg-white/[0.16]">
      <ParallaxOrnament className="-right-12 top-14 h-64 w-64 bg-brand-soft/18" travel={32} />
      <SectionContainer className="relative">
        <SectionHeader
          id="benefits-heading"
          eyebrow="Outcomes"
          title="Why scaling companies choose DigitalPoint instead of piecing together another vendor stack."
          description="The goal is not just more activity. It is a stronger system that helps the business move faster with better control."
          className="mb-16"
        />

        <CardGrid columns="three">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 0.05}>
              <FeatureCard
                title={benefit}
                eyebrow={`Outcome 0${index + 1}`}
                className="relative overflow-hidden"
                headerSlot={<span className="mt-2 h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#3E1E68_0%,#E45A92_100%)] shadow-[0_0_18px_rgba(228,90,146,0.22)]" />}
              />
            </Reveal>
          ))}
        </CardGrid>

        <Reveal delay={0.12}>
          <FeatureCard
            title="A premium execution layer for growth-minded teams."
            eyebrow="What the partnership delivers"
            className="mt-14 overflow-hidden"
            description="The structure is designed to create clarity, accountability, and sustainable momentum across the business."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Strategic clarity without slowing down implementation",
                "Remote support structured around ownership and reporting",
                "Technology and workflow improvements that reduce day-to-day drag",
                "A more confident leadership view of pipeline, priorities, and delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-brand-primary/10 bg-[linear-gradient(180deg,rgba(62,30,104,0.04),rgba(228,90,146,0.03))] px-5 py-5 text-[15px] leading-[1.8] text-muted"
                >
                  {item}
                </div>
              ))}
            </div>
          </FeatureCard>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
