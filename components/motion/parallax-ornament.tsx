"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

import { useMotionProfile } from "./use-motion-profile";

type ParallaxOrnamentProps = {
  className?: string;
  travel?: number;
};

export function ParallaxOrnament({ className, travel = 40 }: ParallaxOrnamentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { allowScrollParallax, isCompact } = useMotionProfile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const movement = isCompact ? travel * 0.35 : travel;
  const y = useTransform(scrollYProgress, [0, 1], [movement, -movement]);

  return (
    <m.div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full blur-3xl transform-gpu", className)}
      style={allowScrollParallax ? { y, willChange: "transform" } : undefined}
    />
  );
}
