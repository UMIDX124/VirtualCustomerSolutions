"use client";

import { AnimatePresence, m, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { navigation, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextIsScrolled = latest > 18;
    setIsScrolled((current) => (current === nextIsScrolled ? current : nextIsScrolled));
  });

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = () => {
      if (desktopQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopQuery.addEventListener("change", handleChange);

    return () => desktopQuery.removeEventListener("change", handleChange);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <Container>
        <div className={cn("transition-[padding] duration-300", isScrolled ? "pt-3" : "pt-5")}>
          <div
            className={cn(
              "rounded-full border px-4 py-3 transition duration-300 sm:px-6",
              isScrolled
                ? "border-white/70 bg-white/78 shadow-[0_20px_60px_rgba(62,30,104,0.14)] backdrop-blur-xl"
                : "border-white/50 bg-white/56 shadow-[0_16px_48px_rgba(62,30,104,0.1)] backdrop-blur-xl",
            )}
          >
            <div className="flex items-center justify-between gap-6">
              <a href="#top" className="flex min-w-0 items-center">
                <BrandLogo
                  priority
                  className="w-[152px] sm:w-[190px] lg:w-[224px]"
                  imageClassName="drop-shadow-[0_14px_28px_rgba(62,30,104,0.14)]"
                />
              </a>

              <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-[14px] font-medium leading-none text-ink/72 transition duration-200 hover:text-brand-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="hidden md:block">
                <Button href={siteConfig.primaryCtaHref} className="px-5">
                  Book a Strategy Call
                </Button>
              </div>

              <button
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label="Toggle menu"
                className="flex size-11 items-center justify-center rounded-full border border-brand-primary/12 bg-white/70 text-brand-primary md:hidden"
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                <span className="flex flex-col gap-1.5">
                  <span className={cn("h-0.5 w-5 rounded-full bg-current transition", isMenuOpen ? "translate-y-2 rotate-45" : "")} />
                  <span className={cn("h-0.5 w-5 rounded-full bg-current transition", isMenuOpen ? "opacity-0" : "opacity-100")} />
                  <span className={cn("h-0.5 w-5 rounded-full bg-current transition", isMenuOpen ? "-translate-y-2 -rotate-45" : "")} />
                </span>
              </button>
            </div>

            <AnimatePresence>
              {isMenuOpen ? (
                <m.div
                  id="mobile-navigation"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden md:hidden"
                >
                  <nav aria-label="Mobile" className="mt-4 space-y-2 border-t border-brand-primary/10 pt-4">
                    {navigation.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block rounded-2xl px-4 py-3 text-[14px] font-medium text-ink/78 transition hover:bg-brand-primary/5 hover:text-brand-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <Button href={siteConfig.primaryCtaHref} className="mt-3 w-full">
                      Book a Strategy Call
                    </Button>
                  </nav>
                </m.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </header>
  );
}
