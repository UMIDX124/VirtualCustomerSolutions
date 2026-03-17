import { ParallaxOrnament } from "@/components/motion/parallax-ornament";
import { Reveal } from "@/components/motion/reveal";
import { CardGrid } from "@/components/ui/card-grid";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { painPoints } from "@/lib/content";

export function PainPoints() {
  return (
    <Section id="pain-points" labelledBy="pain-points-heading" className="overflow-hidden">
      <ParallaxOrnament className="-left-16 top-12 h-56 w-56 bg-brand-secondary/14" />
      <SectionContainer>
        <SectionHeader
          id="pain-points-heading"
          eyebrow="The problem"
          title="Most teams do not have a lead problem. They have a systems and execution problem."
          description="When reporting, automation, marketing, and follow-through are disconnected, revenue becomes harder to forecast and harder to scale."
          className="mb-16"
        />

        <CardGrid columns="three">
          {painPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.06}>
              <FeatureCard
                title={point.title}
                description={point.description}
                className="transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-[0_22px_52px_rgba(62,30,104,0.12)]"
                headerSlot={
                  <>
                    <span className="inline-flex size-10 items-center justify-center rounded-2xl border border-brand-primary/12 bg-brand-primary/6 text-[13px] font-semibold text-brand-primary">
                      0{index + 1}
                    </span>
                    <span className="mt-3 h-2.5 w-2.5 rounded-full bg-brand-secondary/65 shadow-[0_0_18px_rgba(228,90,146,0.35)]" />
                  </>
                }
              />
            </Reveal>
          ))}
        </CardGrid>
      </SectionContainer>
    </Section>
  );
}
