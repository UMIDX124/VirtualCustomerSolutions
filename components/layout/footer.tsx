import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { navigation, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="pb-8 pt-6 md:pb-10">
      <Container>
        <div className="glass-panel panel-outline rounded-[32px] px-8 py-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <BrandLogo className="w-[176px] sm:w-[220px]" />
              <div className="mt-4">
                <Kicker>DigitalPoint LLC</Kicker>
              </div>
              <h2 className="mt-6 text-[32px] font-semibold leading-[1.2] text-ink">
                Premium growth systems for teams that want cleaner execution.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-[1.7] text-muted">
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
