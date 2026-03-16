"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { LazyMotion, domAnimation } from "framer-motion";

import { MotionProfileContext } from "./use-motion-profile";

type MotionProviderProps = {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isCompact, setIsCompact] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactQuery = window.matchMedia("(max-width: 767px)");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => {
      setPrefersReducedMotion(reducedMotionQuery.matches);
      setIsCompact(compactQuery.matches);
      setIsDesktop(desktopQuery.matches);
      setCanHover(hoverQuery.matches);
    };

    update();

    reducedMotionQuery.addEventListener("change", update);
    compactQuery.addEventListener("change", update);
    desktopQuery.addEventListener("change", update);
    hoverQuery.addEventListener("change", update);

    return () => {
      reducedMotionQuery.removeEventListener("change", update);
      compactQuery.removeEventListener("change", update);
      desktopQuery.removeEventListener("change", update);
      hoverQuery.removeEventListener("change", update);
    };
  }, []);

  const lowMotion = prefersReducedMotion || isCompact;

  return (
    <LazyMotion features={domAnimation}>
      <MotionProfileContext.Provider
        value={{
          prefersReducedMotion,
          isCompact,
          isDesktop,
          canHover,
          lowMotion,
          allowPointerParallax: isDesktop && canHover && !prefersReducedMotion,
          allowScrollParallax: !isCompact && !prefersReducedMotion,
          ambientDriftScale: prefersReducedMotion ? 0 : isCompact ? 0.42 : 1,
          revealDistance: prefersReducedMotion ? 0 : isCompact ? 14 : 26,
          counterDuration: isCompact ? 0.9 : 1.35,
        }}
      >
        {children}
      </MotionProfileContext.Provider>
    </LazyMotion>
  );
}
