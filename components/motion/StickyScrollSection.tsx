'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
  accent?: string;
}

/**
 * Side-by-Side Sticky Scrollytelling Pattern
 * Left: text steps scroll naturally
 * Right: sticky visual updates with active step
 */
export function StickyScrollSection({
  steps,
  title,
  badge,
}: {
  steps: Step[];
  title: ReactNode;
  badge?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="relative bg-[var(--bg-secondary)]">
      {/* Header */}
      <div className="sticky top-0 z-10 pt-24 pb-8 bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-secondary)] to-transparent pointer-events-none">
        <div className="container-wide text-center pointer-events-auto">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="badge mb-4"
            >
              {badge}
            </motion.div>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold"
          >
            {title}
          </motion.h2>
        </div>
      </div>

      {/* Scrollytelling Area */}
      <div className="container-wide pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Text steps */}
          <div className="space-y-[40vh] lg:space-y-[70vh] pt-16 pb-[30vh]">
            {steps.map((step, i) => (
              <StepText key={i} step={step} index={i} total={steps.length} progress={scrollYProgress} />
            ))}
          </div>

          {/* Right: Sticky visual */}
          <div className="hidden lg:block relative">
            <div className="sticky top-1/4 h-[50vh] flex items-center justify-center">
              <StepVisual steps={steps} progress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Line */}
      <motion.div
        className="absolute left-0 top-0 w-1 bg-gradient-to-b from-[#22C55E] to-[#059669] origin-top"
        style={{ scaleY: scrollYProgress, height: '100%' }}
      />
    </section>
  );
}

function StepText({
  step,
  index,
  total,
  progress,
}: {
  step: Step;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const start = index / total;
  const mid = (index + 0.5) / total;
  const end = (index + 1) / total;

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const fadeIn = Math.max(0, start - 0.05);
  const fadeOut = Math.min(1, end + 0.05);
  const rawOpacity = useTransform(progress, [fadeIn, start + 0.1, end - 0.1, fadeOut], [0.4, 1, 1, 0.4]);
  const opacity = useSpring(rawOpacity, springConfig);
  const rawX = useTransform(progress, [fadeIn, start + 0.1, end - 0.1, fadeOut], [-10, 0, 0, -10]);
  const x = useSpring(rawX, springConfig);

  return (
    <motion.div
      style={{ opacity, x }}
      className="min-h-[40vh] flex items-center"
    >
      <div className="max-w-md">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E]">
            {step.icon}
          </div>
          <span className="font-mono text-sm text-[var(--text-muted)]">
            Step {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">{step.title}</h3>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

function StepVisual({
  steps,
  progress,
}: {
  steps: Step[];
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const rawStrokeDashoffset = useTransform(progress, [0, 1], [400, 0]);
  const smoothStrokeDashoffset = useSpring(rawStrokeDashoffset, springConfig);
  const rawGlowOpacity = useTransform(progress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const smoothGlowOpacity = useSpring(rawGlowOpacity, springConfig);

  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* Animated ring */}
      <motion.div className="absolute inset-0 rounded-3xl border-2 border-[#22C55E]/20">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <motion.rect
            x="1" y="1" width="98" height="98" rx="12"
            fill="none" stroke="#22C55E" strokeWidth="0.5"
            strokeDasharray="400"
            style={{ strokeDashoffset: smoothStrokeDashoffset }}
          />
        </svg>
      </motion.div>

      {/* Step indicators */}
      <div className="absolute inset-8 flex flex-col items-center justify-center gap-6">
        {steps.map((step, i) => {
          const start = i / steps.length;
          const mid = (i + 0.5) / steps.length;
          const end = (i + 1) / steps.length;

          return (
            <StepDot key={i} step={step} index={i} progress={progress} range={[start, mid, end]} />
          );
        })}
      </div>

      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(34,197,94,0.15) 0%, transparent 70%)',
          opacity: smoothGlowOpacity,
        }}
      />
    </div>
  );
}

function StepDot({
  step,
  index,
  progress,
  range,
}: {
  step: Step;
  index: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number, number];
}) {
  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const rawScale = useTransform(progress, range, [0.95, 1.1, 0.95]);
  const scale = useSpring(rawScale, springConfig);
  const rawOpacity = useTransform(progress, range, [0.4, 1, 0.4]);
  const opacity = useSpring(rawOpacity, springConfig);
  const bgOpacity = useTransform(progress, range, [0.08, 0.25, 0.08]);
  const borderOpacity = useTransform(progress, range, [0.2, 0.6, 0.2]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className="flex items-center gap-4 w-full"
    >
      <motion.div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-[#22C55E] shrink-0"
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(34,197,94,${v})`),
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: useTransform(borderOpacity, (v) => `rgba(34,197,94,${v})`),
        }}
      >
        {step.icon}
      </motion.div>
      <span className="font-medium text-sm text-[var(--text-primary)]">{step.title}</span>
    </motion.div>
  );
}
