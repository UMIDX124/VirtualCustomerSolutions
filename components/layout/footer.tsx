import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { navigation, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="pb-8 pt-6 md:pb-10">
      <Container>
        <div className="glass-panel panel-outline rounded-[34px] px-8 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <BrandLogo className="w-[188px] sm:w-[236px]" imageClassName="drop-shadow-[0_18px_34px_rgba(62,30,104,0.12)]" />
              <div className="mt-4">
                <Kicker className="px-4 py-2 text-[11px] font-semibold tracking-[0.22em]">DigitalPoint LLC</Kicker>
              </div>
              <h2 className="mt-7 text-[33px] font-semibold leading-[1.14] tracking-[-0.045em] text-ink">
                Premium growth systems for teams that want cleaner execution.
              </h2>
              <p className="mt-5 max-w-lg text-[16px] leading-[1.8] text-muted">
                Marketing, remote workforce support, technology, and operations brought together in one scalable model.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={siteConfig.primaryCtaHref}>Book a Strategy Call</Button>
              <Button href="#services" variant="secondary">
                Explore Services
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-brand-primary/10 pt-6 text-[14px] leading-[1.7] text-muted sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-4">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-brand-primary">
                  {item.label}
                </a>
              ))}
            </div>
            <p>Copyright {new Date().getFullYear()} DigitalPoint LLC. Built for measurable growth.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
