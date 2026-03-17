import { Reveal } from "@/components/motion/reveal";
import { CardGrid } from "@/components/ui/card-grid";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <Section id="process" labelledBy="process-heading" className="overflow-hidden">
      <SectionContainer>
        <SectionHeader
          id="process-heading"
          eyebrow="Framework"
          title="A four-step framework for turning growth chaos into a system leadership can trust."
          description="The process is designed to move from diagnosis to execution quickly, without skipping the operational layer that makes results sustainable."
          className="mb-14 md:mb-16"
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-10">
          <Reveal>
            <div className="rounded-[28px] border border-brand-primary/10 bg-white/72 p-8 shadow-[0_22px_68px_rgba(62,30,104,0.08)] backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary/56">Agency framework</p>
              <p className="mt-5 text-[28px] font-semibold leading-[1.08] tracking-[-0.05em] text-ink">4 steps.</p>
              <p className="mt-4 text-[15px] leading-[1.8] text-muted">
                One disciplined path from growth diagnosis to scalable execution, with clearer ownership between strategy and delivery.
              </p>
              <div className="mt-8 space-y-3">
                {["Audit", "Roadmap", "Deployment", "Optimization"].map((label, index) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-brand-primary/10 bg-white/80 px-4 py-3">
                    <span className="text-[14px] font-medium text-ink/78">{label}</span>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-primary/48">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <CardGrid columns="four">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <FeatureCard
                  title={step.title}
                  description={step.description}
                  className="relative overflow-hidden"
                  headerSlot={
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3E1E68_0%,#E45A92_100%)] text-[14px] font-semibold text-white shadow-[0_14px_30px_rgba(62,30,104,0.2)]">
                      0{index + 1}
                    </span>
                  }
                >
                  <div className="mt-auto pt-2">
                    <div className="h-px w-full bg-[linear-gradient(90deg,rgba(62,30,104,0.18),rgba(228,90,146,0.18),transparent)]" />
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
