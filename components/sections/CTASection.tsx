'use client';

import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigation } from '@/lib/navigation';
import { FloatingElement, TextReveal, MagneticHover } from '@/components/animations/ScrollAnimations';

const auditIncludes = [
  'Free Digital Audit (Worth $499)',
  'No Obligation',
  'Custom Growth Plan in 24hrs',
  'No Sales Pitch',
  '100% Confidential',
];

export function CTASection() {
  const { navigateTo } = useNavigation();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[#0c1629] to-[var(--bg-primary)]" />

      {/* Large glowing orb behind the card */}
      <FloatingElement amplitude={12} duration={8} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] bg-[#3B82F6]/[0.08] rounded-full blur-[120px]" />
      </FloatingElement>
      <FloatingElement amplitude={8} duration={6} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[300px] h-[300px] bg-[#3B82F6]/[0.12] rounded-full blur-[80px]" />
      </FloatingElement>

      <div className="container-wide relative z-10">
        <div className="relative max-w-3xl mx-auto">
          {/* Outer glow border */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#3B82F6]/40 via-[#3B82F6]/10 to-[#3B82F6]/40 blur-sm" />

          {/* Card */}
          <div className="relative rounded-2xl border border-[#3B82F6]/20 bg-[#0F172A]/90 backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden">
            {/* Inner gradient shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/[0.06] via-transparent to-[#1D4ED8]/[0.04]" />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] mb-8 shadow-lg shadow-[#3B82F6]/25"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>

              <TextReveal
                text="Ready to Grow? Let's Talk."
                as="h2"
                className="text-4xl md:text-5xl font-bold mb-5 tracking-tight"
              />

              <p className="text-[var(--text-secondary)] text-lg max-w-lg mx-auto mb-10">
                Get your custom growth plan in 24 hours. No obligation, no sales pressure.
              </p>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
                {auditIncludes.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                    <CheckCircle className="w-4 h-4 text-[#3B82F6] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Big glowing CTA button */}
              <MagneticHover strength={0.3}>
                <motion.button
                  onClick={() => navigateTo('free-audit')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white shadow-xl shadow-[#3B82F6]/30 hover:shadow-2xl hover:shadow-[#3B82F6]/40 transition-shadow duration-500"
                >
                  CLAIM YOUR FREE AUDIT NOW
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </MagneticHover>

              <p className="text-[var(--text-muted)] text-sm mt-6">
                Limited spots available — First 50 clients get lifetime rate lock!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
