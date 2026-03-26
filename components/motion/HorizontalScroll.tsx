'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Horizontal scroll section — vertical scroll drives horizontal movement.
 * The section is pinned while content scrolls sideways.
 */
export function HorizontalScroll({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66%']);
  const smoothX = useSpring(x, { stiffness: 50, damping: 30 });

  return (
    <section ref={targetRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden max-w-[100vw]">
        <motion.div style={{ x: smoothX }} className="flex gap-8 px-8 will-change-transform">
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function HorizontalCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] ${className}`}>
      {children}
    </div>
  );
}
