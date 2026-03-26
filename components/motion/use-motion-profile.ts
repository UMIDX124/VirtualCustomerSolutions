"use client";

import { createContext, useContext } from "react";

export type MotionProfile = {
  prefersReducedMotion: boolean;
  isCompact: boolean;
  isDesktop: boolean;
  canHover: boolean;
  lowMotion: boolean;
  allowPointerParallax: boolean;
  allowScrollParallax: boolean;
  ambientDriftScale: number;
  revealDistance: number;
  counterDuration: number;
};

export const defaultMotionProfile: MotionProfile = {
  prefersReducedMotion: false,
  isCompact: true,
  isDesktop: false,
  canHover: false,
  lowMotion: true,
  allowPointerParallax: false,
  allowScrollParallax: false,
  ambientDriftScale: 0.42,
  revealDistance: 14,
  counterDuration: 2,
};

export const MotionProfileContext = createContext<MotionProfile>(defaultMotionProfile);

export function useMotionProfile() {
  return useContext(MotionProfileContext);
}
