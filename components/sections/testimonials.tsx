import { AmbientOrbs } from "@/components/motion/ambient-orbs";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { CardGrid } from "@/components/ui/card-grid";
import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section id="testimonials" labelledBy="testimonials-heading" className="overflow-hidden bg-white/[0.12]">
      <AmbientOrbs variant="section" className="opacity-60" />
      <SectionContainer className="relative">
        <SectionHeader
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="The feedback is consistent: clearer numbers, stronger follow-through, and less operational drag."
          description="These are anonymized because the work often touches revenue operations, reporting, and internal delivery systems."
          align="center"
          className="mb-14 md:mb-[4.5rem]"
        />

        <CardGrid columns="three" className="mx-auto max-w-[1120px]">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.company} delay={index * 0.08}>
              <Card className="group h-full rounded-[24px] p-7 md:p-8 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-primary/18 hover:shadow-[0_20px_46px_rgba(62,30,104,0.1)]">
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary/54">Client perspective</p>
                      <p className="mt-3 text-[14px] font-semibold leading-[1.4] text-ink">{testimonial.name}</p>
                      <p className="mt-1 text-[13px] leading-[1.6] text-muted">{testimonial.company}</p>
                    </div>
                    <span className="text-[36px] leading-none text-brand-secondary/34">"</span>
                  </div>
                  <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,rgba(62,30,104,0.12),rgba(228,90,146,0.22),transparent)]" />
                  <p className="mt-6 max-w-[34ch] text-[16px] leading-[1.78] text-ink/84">{testimonial.quote}</p>
                  <div className="mt-auto pt-8">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-primary/48">Anonymized testimonial</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </CardGrid>
      </SectionContainer>
    </Section>
  );
}
