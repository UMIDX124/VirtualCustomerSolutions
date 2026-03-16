import { AmbientOrbs } from "@/components/motion/ambient-orbs";
import { HeroVisual } from "@/components/motion/hero-visual";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CardGrid } from "@/components/ui/card-grid";
import { FeatureCard } from "@/components/ui/feature-card";
import { Kicker } from "@/components/ui/kicker";
import { SectionContainer } from "@/components/ui/section-container";
import { heroSignals, siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-28 overflow-hidden px-2 pb-[72px] pt-4 md:scroll-mt-32 md:pb-24 md:pt-6 lg:pb-[120px]"
    >
      <SectionContainer>
        <div className="hero-stage relative isolate min-h-[90svh] overflow-hidden rounded-[32px] border border-white/12 px-6 py-10 shadow-[0_40px_140px_rgba(19,8,38,0.34)] md:px-10 md:py-12 lg:px-12 lg:py-14">
          <div className="hero-stage__video" aria-hidden="true" />
          <div className="hero-stage__aura" aria-hidden="true" />
          <div className="hero-stage__vignette" aria-hidden="true" />
          <div className="hero-stage__grid" aria-hidden="true" />
          <AmbientOrbs variant="hero" className="opacity-95" />

          <div className="relative z-10 flex min-h-full flex-col">
            <div className="mx-auto grid w-full max-w-6xl flex-1 gap-12 lg:min-h-[36rem] lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] lg:items-center lg:justify-between lg:gap-12">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <Reveal delay={0.03}>
                  <Kicker tone="light">Digital growth + remote workforce infrastructure</Kicker>
                </Reveal>

                <Reveal delay={0.12} className="mt-6 max-w-[620px]">
                  <h1
                    id="hero-heading"
                    className="text-[40px] font-bold leading-[1.05] text-white md:text-[52px] lg:text-[64px]"
                  >
                    Build a <span className="hero-text-glow">cinematic growth engine</span> with smarter systems, remote
                    execution, and marketing that compounds.
                  </h1>
                </Reveal>

                <Reveal delay={0.22} className="mt-6 max-w-[620px]">
                  <p className="text-base leading-[1.7] text-white/72">
                    DigitalPoint LLC helps founders and operators scale through layered systems, expert remote workforce
                    support, and performance-driven execution that feels coordinated from strategy to delivery.
                  </p>
                </Reveal>

                <Reveal delay={0.3} className="mt-8">
                  <div className="flex w-full flex-col items-center gap-4 sm:flex-row lg:items-start">
                    <Button href={siteConfig.primaryCtaHref} className="w-full sm:w-auto">
                      Book a Strategy Call
                    </Button>
                    <Button href="#services" variant="ghost" className="w-full sm:w-auto">
                      Explore Services
                    </Button>
                  </div>
                </Reveal>

                <Reveal delay={0.36} className="mt-6 max-w-[540px]">
                  <p className="text-[14px] leading-[1.7] text-white/52">
                    Premium support across growth systems, technology, operations, and remote execution capacity.
                  </p>
                </Reveal>
              </div>

              <div className="relative mx-auto w-full max-w-3xl lg:max-w-none lg:justify-self-end">
                <Reveal delay={0.4}>
                  <HeroVisual />
                </Reveal>
              </div>
            </div>

            <CardGrid columns="three" className="mt-12 w-full max-w-6xl self-center">
              {heroSignals.map((signal, index) => (
                <Reveal key={signal.title} delay={0.45 + index * 0.06}>
                  <FeatureCard
                    tone="dark"
                    title={signal.title}
                    description={signal.description}
                    className="backdrop-blur-xl shadow-[0_20px_60px_rgba(16,8,31,0.24)]"
                    headerSlot={
                      <>
                        <span className="inline-flex size-10 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[14px] font-medium text-white/68">
                          0{index + 1}
                        </span>
                        <span className="mt-3 h-2.5 w-2.5 rounded-full bg-brand-secondary/70 shadow-[0_0_18px_rgba(228,90,146,0.35)]" />
                      </>
                    }
                  />
                </Reveal>
              ))}
            </CardGrid>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
