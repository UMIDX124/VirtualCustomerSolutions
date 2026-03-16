"use client";

import type { ReactNode } from "react";

import { m } from "framer-motion";

import { MOTION_EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

import { useMotionProfile } from "./use-motion-profile";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { prefersReducedMotion, isCompact, revealDistance } = useMotionProfile();

  return (
    <m.div
      className={cn("transform-gpu", className)}
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, y: revealDistance, scale: isCompact ? 1 : 0.985 }
      }
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: isCompact ? 0.14 : 0.22 }}
      transition={{
        duration: isCompact ? 0.55 : 0.68,
        delay,
        ease: MOTION_EASE,
      }}
      style={prefersReducedMotion ? undefined : { willChange: "transform, opacity" }}
    >
      {children}
    </m.div>
  );
}
