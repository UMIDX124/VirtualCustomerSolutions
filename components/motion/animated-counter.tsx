"use client";

import { animate, m, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { QUICK_EASE } from "@/lib/motion";

import { useMotionProfile } from "./use-motion-profile";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const { counterDuration, prefersReducedMotion } = useMotionProfile();
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplayValue(Number(latest.toFixed(decimals)));
  });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(motionValue, value, {
      duration: counterDuration,
      ease: QUICK_EASE,
    });

    return () => controls.stop();
  }, [counterDuration, isInView, motionValue, prefersReducedMotion, value]);

  return (
    <m.span ref={ref} className={className}>
      {prefix}
      {new Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(displayValue)}
      {suffix}
    </m.span>
  );
}
