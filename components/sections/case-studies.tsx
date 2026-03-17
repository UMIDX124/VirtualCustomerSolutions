import { Reveal } from "@/components/motion/reveal";
import { CardGrid } from "@/components/ui/card-grid";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { caseStudies } from "@/lib/content";

function parseOutcome(outcome: string) {
  const leadingMultiple = outcome.match(/^(\d+(?:\.\d+)?x)\s+(.+)$/i);
  if (leadingMultiple) {
    return {
      metric: leadingMultiple[1],
      label: leadingMultiple[2],
    };
  }

  const leadingPercent = outcome.match(/^(\d+(?:\.\d+)?%)\s+(.+)$/i);
  if (leadingPercent) {
    return {
      metric: leadingPercent[1],
      label: leadingPercent[2],
    };
  }

  const trailingTime = outcome.match(/^(.+?)\s+(under\s+\d+(?:\.\d+)?\s+\w+)\s*$/i);
  if (trailingTime) {
    return {
      metric: trailingTime[2],
      label: trailingTime[1],
    };
  }

  return {
    metric: null,
    label: outcome,
  };
}

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
                description=""
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
                <div className="mt-6 border-t border-brand-primary/10 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary/52">
                    Measured outcomes
                  </p>
                  <div className="mt-4 grid gap-3">
                    {study.outcomes.map((outcome) => {
                      const parsed = parseOutcome(outcome);

                      return (
                        <div
                          key={outcome}
                          className="rounded-[20px] border border-brand-primary/9 bg-white/70 px-4 py-4 shadow-[0_14px_34px_rgba(62,30,104,0.04)]"
                        >
                          {parsed.metric ? (
                            <>
                              <p className="text-[28px] font-semibold leading-none tracking-[-0.05em] text-brand-primary md:text-[31px]">
                                {parsed.metric}
                              </p>
                              <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-primary/56">
                                Outcome
                              </p>
                              <p className="mt-3 text-[14px] leading-[1.65] text-ink/78">{parsed.label}</p>
                            </>
                          ) : (
                            <>
                              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-primary/56">
                                Operational result
                              </p>
                              <p className="mt-2 text-[15px] font-medium leading-[1.7] text-ink/80">{parsed.label}</p>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FeatureCard>
            </Reveal>
          ))}
        </CardGrid>
      </SectionContainer>
    </Section>
  );
}
