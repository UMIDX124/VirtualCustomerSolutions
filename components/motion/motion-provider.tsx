"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

import { LazyMotion, domAnimation } from "framer-motion";

import { MotionProfileContext } from "./use-motion-profile";

type MotionProviderProps = {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  const [profile, setProfile] = useState({
    prefersReducedMotion: false,
    isCompact: true,
    isDesktop: false,
    canHover: false,
  });

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactQuery = window.matchMedia("(max-width: 767px)");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => {
      const nextProfile = {
        prefersReducedMotion: reducedMotionQuery.matches,
        isCompact: compactQuery.matches,
        isDesktop: desktopQuery.matches,
        canHover: hoverQuery.matches,
      };

      setProfile((current) =>
        current.prefersReducedMotion === nextProfile.prefersReducedMotion &&
        current.isCompact === nextProfile.isCompact &&
        current.isDesktop === nextProfile.isDesktop &&
        current.canHover === nextProfile.canHover
          ? current
          : nextProfile,
      );
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

  const lowMotion = profile.prefersReducedMotion || profile.isCompact;
  const motionValue = useMemo(
    () => ({
      prefersReducedMotion: profile.prefersReducedMotion,
      isCompact: profile.isCompact,
      isDesktop: profile.isDesktop,
      canHover: profile.canHover,
      lowMotion,
      allowPointerParallax: profile.isDesktop && profile.canHover && !profile.prefersReducedMotion,
      allowScrollParallax: !profile.isCompact && !profile.prefersReducedMotion,
      ambientDriftScale: profile.prefersReducedMotion ? 0 : profile.isCompact ? 0.42 : 1,
      revealDistance: profile.prefersReducedMotion ? 0 : profile.isCompact ? 14 : 26,
      counterDuration: profile.isCompact ? 0.9 : 1.35,
    }),
    [lowMotion, profile.canHover, profile.isCompact, profile.isDesktop, profile.prefersReducedMotion],
  );

  return (
    <LazyMotion features={domAnimation}>
      <MotionProfileContext.Provider value={motionValue}>
        {children}
      </MotionProfileContext.Provider>
    </LazyMotion>
  );
}
