import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { faqItems } from "@/lib/content";

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-heading">
      <SectionContainer>
        <SectionHeader
          id="faq-heading"
          eyebrow="FAQ"
          title="Answers to the questions most teams ask before starting."
          description="Everything is designed to be practical, commercially useful, and clear from the first conversation."
          align="center"
          className="mb-14 md:mb-[4.5rem]"
        />

        <div className="mx-auto max-w-[920px]">
          <FaqAccordion items={faqItems} />
        </div>
      </SectionContainer>
    </Section>
  );
}
