import { CTAButton } from "@/components/ui/cta-button";
import { SectionContainer } from "@/components/ui/section-container";
import { siteConfig } from "@/lib/content";

export default function ThankYouPage() {
  return (
    <main className="relative min-h-[70vh] overflow-hidden py-[72px] md:py-24 lg:py-[120px]">
      <SectionContainer>
        <section className="section-frame mx-auto max-w-[840px] px-8 py-10 text-center md:px-10 md:py-12">
          <p className="text-[14px] font-medium uppercase tracking-[0.22em] text-brand-primary/62">Request received</p>
          <h1 className="mt-6 text-[40px] font-bold leading-[1.05] text-ink md:text-[52px] lg:text-[64px]">
            Thank you. Your strategy call request has been submitted.
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-base leading-[1.7] text-muted">
            We will review the details and follow up through {siteConfig.email}. If this is your first FormSubmit setup,
            keep an eye on Spam, Promotions, and All Mail as Gmail can sometimes sort those messages there.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton href="/">Back to Homepage</CTAButton>
            <CTAButton href={siteConfig.bookingEmailHref} variant="secondary">
              Email Us Directly
            </CTAButton>
          </div>
        </section>
      </SectionContainer>
    </main>
  );
}
