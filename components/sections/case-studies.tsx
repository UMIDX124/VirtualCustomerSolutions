import { Reveal } from "@/components/motion/reveal";
import { CardGrid } from "@/components/ui/card-grid";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  return (
    <Section id="case-studies" labelledBy="case-studies-heading">
      <SectionContainer>
        <SectionHeader
          id="case-studies-heading"
          eyebrow="Case studies"
          title="A few examples of what changes when the operating layer gets fixed."
          description="These anonymized snapshots are meant to show the operating changes behind the numbers, not just the headline result."
          className="mb-14 md:mb-16"
        />

        <CardGrid columns="three">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.08}>
              <FeatureCard
                eyebrow={study.category}
                title={study.title}
                description={study.summary}
                className="overflow-hidden transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-primary/18 hover:shadow-[0_20px_46px_rgba(62,30,104,0.1)]"
                headerSlot={
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted/70">Snapshot 0{index + 1}</span>
                    <span className="rounded-full border border-brand-primary/10 bg-brand-primary/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-primary/62">
                      Anonymized
                    </span>
                  </div>
                }
              >
                <div className="rounded-[18px] border border-brand-primary/8 bg-brand-primary/[0.03] px-4 py-4 text-[13px] leading-[1.65] text-muted/92">
                  <span className="font-semibold text-ink/78">What changed:</span> {study.summary}
                </div>
                <div className="mt-5 space-y-4 border-t border-brand-primary/10 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary/52">Measured outcomes</p>
                  {study.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3.5 text-[15px] leading-[1.8] text-ink/78">
                      <span className="mt-[11px] h-1.5 w-1.5 rounded-full bg-[linear-gradient(135deg,#3E1E68_0%,#E45A92_100%)]" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </FeatureCard>
            </Reveal>
          ))}
        </CardGrid>
      </SectionContainer>
    </Section>
  );
}
