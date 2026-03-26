"use client";

import { m } from "framer-motion";

import { cn } from "@/lib/utils";

import { useMotionProfile } from "./use-motion-profile";

type AmbientOrbsProps = {
  className?: string;
  variant?: "hero" | "section" | "cta";
};

const variants = {
  hero: [
    {
      className: "-left-24 top-8 h-72 w-72 bg-[radial-gradient(circle,rgba(228,90,146,0.24),transparent_68%)]",
      x: 28,
      y: -24,
      scale: 1.12,
      duration: 18,
    },
    {
      className: "right-0 top-16 h-[26rem] w-[26rem] bg-[radial-gradient(circle,rgba(93,47,119,0.28),transparent_68%)]",
      x: -30,
      y: 24,
      scale: 1.08,
      duration: 24,
    },
    {
      className: "bottom-0 left-1/3 h-64 w-64 bg-[radial-gradient(circle,rgba(255,172,172,0.22),transparent_68%)]",
      x: 18,
      y: 22,
      scale: 1.1,
      duration: 20,
    },
  ],
  section: [
    {
      className: "-left-20 top-10 h-56 w-56 bg-[radial-gradient(circle,rgba(93,47,119,0.18),transparent_68%)]",
      x: 24,
      y: 18,
      scale: 1.08,
      duration: 22,
    },
    {
      className: "right-0 bottom-0 h-64 w-64 bg-[radial-gradient(circle,rgba(228,90,146,0.18),transparent_68%)]",
      x: -24,
      y: -16,
      scale: 1.14,
      duration: 25,
    },
  ],
  cta: [
    {
      className: "-left-24 top-0 h-80 w-80 bg-[radial-gradient(circle,rgba(228,90,146,0.2),transparent_68%)]",
      x: 22,
      y: 24,
      scale: 1.1,
      duration: 22,
    },
    {
      className: "right-0 bottom-0 h-80 w-80 bg-[radial-gradient(circle,rgba(255,172,172,0.16),transparent_68%)]",
      x: -24,
      y: -18,
      scale: 1.08,
      duration: 18,
    },
    {
      className: "right-1/3 top-8 h-60 w-60 bg-[radial-gradient(circle,rgba(93,47,119,0.22),transparent_68%)]",
      x: 16,
      y: -18,
      scale: 1.14,
      duration: 24,
    },
  ],
} as const;

export function AmbientOrbs({ className, variant = "section" }: AmbientOrbsProps) {
  const { ambientDriftScale, isCompact, prefersReducedMotion } = useMotionProfile();
  const activeOrbs = isCompact ? variants[variant].slice(0, Math.max(1, variants[variant].length - 1)) : variants[variant];

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {activeOrbs.map((orb, index) => (
        <m.div
          key={`${variant}-${index}`}
          className={cn("absolute rounded-full", isCompact ? "blur-2xl" : "blur-3xl", orb.className)}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, orb.x * ambientDriftScale, 0],
                  y: [0, orb.y * ambientDriftScale, 0],
                  scale: [1, 1 + (orb.scale - 1) * Math.max(ambientDriftScale, 0.55), 1],
                }
          }
          transition={{
            duration: isCompact ? orb.duration * 0.88 : orb.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            ease: "linear",
          }}
          style={prefersReducedMotion ? undefined : { willChange: "transform" }}
        />
      ))}
      <m.div
        className="absolute inset-0 opacity-45 mix-blend-soft-light"
        style={{
          backgroundImage:
            "linear-gradient(130deg, rgba(255,255,255,0.18), transparent 40%), linear-gradient(320deg, rgba(228,90,146,0.12), transparent 45%)",
          backgroundSize: "140% 140%",
        }}
        animate={prefersReducedMotion || isCompact ? undefined : { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  );
}
