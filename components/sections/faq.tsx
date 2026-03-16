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
          title="Answers to the questions most teams ask before they commit."
          description="The right growth partner should reduce complexity, not add more of it. Here is how the engagement typically works."
          align="center"
          className="mb-16"
        />

        <div className="mx-auto max-w-[960px]">
          <FaqAccordion items={faqItems} />
        </div>
      </SectionContainer>
    </Section>
  );
}
