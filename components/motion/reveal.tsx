"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const shouldAnimate = hasMounted && !prefersReducedMotion;

  return (
    <m.div
      className={cn("transform-gpu", className)}
      initial={shouldAnimate ? { opacity: 0, y: revealDistance, scale: isCompact ? 1 : 0.985 } : false}
      whileInView={shouldAnimate ? { opacity: 1, y: 0, scale: 1 } : undefined}
      viewport={{ once: true, amount: isCompact ? 0.14 : 0.22 }}
      transition={{
        duration: isCompact ? 0.55 : 0.68,
        delay,
        ease: MOTION_EASE,
      }}
      style={shouldAnimate ? { willChange: "transform, opacity" } : undefined}
    >
      {children}
    </m.div>
  );
}
