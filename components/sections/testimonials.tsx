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
          title="The value is not just better ideas. It is better execution with less friction."
          description="DigitalPoint is designed to bring structure, speed, and confidence to the part of growth that most teams struggle to coordinate."
          align="center"
          className="mb-16"
        />

        <CardGrid columns="three" className="max-w-[1120px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.company} delay={index * 0.08}>
              <Card className="group h-full rounded-[24px] p-8 transition duration-300 hover:-translate-y-2 hover:border-brand-primary/18">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-[36px] leading-none text-brand-secondary/34">"</span>
                    <span className="h-px w-12 bg-[linear-gradient(90deg,rgba(62,30,104,0.18),rgba(228,90,146,0.28))]" />
                  </div>
                  <p className="mt-5 text-[16px] leading-[1.82] text-ink/84">{testimonial.quote}</p>
                  <div className="mt-auto pt-9">
                    <p className="text-[15px] font-semibold leading-[1.2] text-ink">{testimonial.name}</p>
                    <p className="mt-2 text-[14px] leading-[1.75] text-muted">{testimonial.company}</p>
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
