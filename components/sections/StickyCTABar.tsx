'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

export function StickyCTABar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Show after scrolling past roughly one viewport height
      setVisible(window.scrollY > window.innerHeight);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const show = visible && !dismissed;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
          transition={{ type: 'tween', duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40"
        >
          <div className="border-t border-black/[0.08] bg-white/95 backdrop-blur-xl">
            <div className="container-wide flex items-center justify-between gap-4 py-3">
              <p className="hidden text-sm text-black/70 sm:block">
                Ready to scale your business?{' '}
                <span className="font-medium text-[#09090B]">
                  Get a free growth audit today.
                </span>
              </p>
              <p className="text-sm text-black/70 sm:hidden">
                <span className="font-medium text-[#09090B]">Free growth audit</span>
              </p>

              <div className="flex items-center gap-2">
                <Link
                  href="/free-audit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-[#22C55E]/20 transition hover:bg-[#4ADE80] hover:shadow-[#22C55E]/30"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <button
                  onClick={() => setDismissed(true)}
                  aria-label="Dismiss banner"
                  className="rounded-full p-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-black/40 transition-colors hover:bg-black/5 hover:text-black"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
