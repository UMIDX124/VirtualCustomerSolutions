'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** Fixed top progress bar showing page scroll position */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#1D4ED8] origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}
