import { Reveal } from "@/components/motion/reveal";
import { CardGrid } from "@/components/ui/card-grid";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <Section id="process" labelledBy="process-heading">
      <SectionContainer>
        <SectionHeader
          id="process-heading"
          eyebrow="How it works"
          title="A clean process designed to create momentum quickly."
          description="Every phase is built to reduce ambiguity, tighten execution, and give leadership a clearer operating system."
          align="center"
          className="mb-16"
        />

        <CardGrid columns="four">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <FeatureCard
                title={step.title}
                description={step.description}
                headerSlot={
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3E1E68_0%,#E45A92_100%)] text-[14px] font-semibold text-white shadow-[0_14px_30px_rgba(62,30,104,0.2)]">
                    0{index + 1}
                  </span>
                }
              />
            </Reveal>
          ))}
        </CardGrid>
      </SectionContainer>
    </Section>
  );
}
