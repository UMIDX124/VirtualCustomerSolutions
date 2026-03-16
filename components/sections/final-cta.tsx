import { AmbientOrbs } from "@/components/motion/ambient-orbs";
import { ParallaxOrnament } from "@/components/motion/parallax-ornament";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Kicker } from "@/components/ui/kicker";
import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/section-container";
import { StrategyCallForm } from "@/components/ui/strategy-call-form";
import { siteConfig } from "@/lib/content";

export function FinalCta() {
  return (
    <Section id="strategy-call" labelledBy="strategy-call-heading" className="overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#241243_0%,#331857_44%,#5D2F77_100%)]" />
      <AmbientOrbs variant="cta" className="opacity-90" />
      <ParallaxOrnament className="left-10 top-12 h-60 w-60 bg-brand-secondary/18" travel={28} />
      <SectionContainer className="relative">
        <div className="section-frame overflow-hidden border-white/10 bg-white/6 px-8 py-8 backdrop-blur-md md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-start">
            <Reveal>
              <Kicker tone="light">Final call to action</Kicker>
              <h2 id="strategy-call-heading" className="mt-6 max-w-[720px] text-[32px] font-semibold leading-[1.2] text-white md:text-[36px] lg:text-[40px]">
                Ready to build a more scalable growth engine and a stronger execution layer?
              </h2>
              <p className="mt-6 max-w-[620px] text-base leading-[1.7] text-white/72">
                Book a strategy call to map the biggest growth bottlenecks, where remote support can create leverage, and what your next 90
                days should look like.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={siteConfig.primaryCtaHref}>Book a Strategy Call</Button>
                <Button href="#case-studies" variant="ghost">
                  See Case Studies
                </Button>
              </div>

              <p className="mt-6 text-[14px] leading-[1.7] text-white/58">
                We keep onboarding intentionally focused so execution quality stays high.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="space-y-6">
                <StrategyCallForm />
                <Card className="border-white/12 bg-white/8 p-8 text-white">
                  <p className="text-[14px] font-medium uppercase tracking-[0.22em] text-white/58">What to expect</p>
                  <div className="mt-6 space-y-4">
                    {[
                      "A focused discussion around growth goals, bottlenecks, and execution capacity",
                      "A clear recommendation on the fastest path to better systems and stronger delivery",
                      "Next-step clarity without a generic agency pitch deck",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-base leading-[1.7] text-white/74">
                        {item}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
