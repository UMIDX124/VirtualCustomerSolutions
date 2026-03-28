'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/lib/navigation';
import { MagneticHover } from '@/components/animations/ScrollAnimations';
import { Mascot } from '@/components/layout/Mascot';

const smoothEase = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const { navigateTo } = useNavigation();
  const { scrollY } = useScroll();

  const rawY = useTransform(scrollY, [0, 800], [0, 40]);
  const rawOpacity = useTransform(scrollY, [200, 800], [1, 0]);

  const y = useSpring(rawY, { stiffness: 100, damping: 30 });
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 30 });

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* Animated background — loads instantly, no video needed */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        {/* Animated gradient orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#22C55E]/[0.07] blur-[120px] animate-[hero-drift_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-30%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#059669]/[0.06] blur-[100px] animate-[hero-drift_25s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#4ADE80]/[0.04] blur-[80px] animate-[hero-drift_18s_ease-in-out_infinite_2s]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-bg opacity-[0.06]" />

        {/* Noise texture */}
        <div className="noise-overlay absolute inset-0 opacity-[0.03]" />

        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505]/70" />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16 xl:px-20 max-w-[1440px] mx-auto w-full pt-20 sm:pt-24 lg:pt-10 pb-16 lg:pb-20">
        {/* Two-column: text left, graphics right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left — Text Content */}
          <motion.div
            style={{ y, opacity }}
            className="text-left max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(34,197,94,0.3)] text-[#22C55E] text-sm mb-6 backdrop-blur-sm bg-black/20"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span className="tracking-wide font-medium">Your Growth Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: smoothEase }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
            >
              We Build Teams
              <br />
              That Actually
              <br />
              <span className="text-[#22C55E]">Get Things Done</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: smoothEase }}
              className="text-white/65 text-lg mt-6 max-w-md leading-relaxed"
            >
              Remote staff, marketing, web development, and operations support &mdash; all under one roof. We handle the work so you can focus on growing your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: smoothEase }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <MagneticHover strength={0.3}>
                <Button
                  onClick={() => navigateTo('free-audit')}
                  className="group w-full sm:w-auto bg-[#22C55E] hover:bg-[#4ADE80] hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] text-black font-bold px-8 py-6 text-lg transition-all duration-300 neon-box-strong"
                >
                  Get Your Free Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </MagneticHover>
              <MagneticHover strength={0.3}>
                <Button
                  onClick={() => navigateTo('services')}
                  variant="outline"
                  className="w-full sm:w-auto border border-white/20 hover:border-[#22C55E] hover:bg-[rgba(34,197,94,0.1)] text-white px-8 py-6 text-lg bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  Explore Services
                </Button>
              </MagneticHover>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: smoothEase }}
              className="flex flex-wrap gap-6 mt-10"
            >
              {[
                { icon: Zap, label: '200+ Clients Served', color: '#22C55E' },
                { icon: Globe, label: '15+ Countries', color: '#059669' },
                { icon: Cpu, label: '8+ Years Experience', color: '#22C55E' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/50">
                  <item.icon size={14} style={{ color: item.color }} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Mascot with animated rings */}
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            <div className="relative w-80 h-80 animate-mascot-float-hero">
              {/* Animated rings framing the mascot */}
              <div className="absolute inset-0 rounded-full border border-[#22C55E]/10 animate-[hero-ring_8s_ease-in-out_infinite]" />
              <div className="absolute inset-6 rounded-full border border-[#22C55E]/[0.07] animate-[hero-ring_8s_ease-in-out_infinite_1s]" />
              <div className="absolute inset-12 rounded-full border border-[#22C55E]/[0.05] animate-[hero-ring_8s_ease-in-out_infinite_2s]" />

              {/* Extra glow behind mascot */}
              <div className="absolute inset-12 rounded-full bg-[#22C55E]/[0.08] blur-[60px]" />

              {/* Mascot centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Mascot
                  size={220}
                  speechBubble="Let's grow your business"
                  speechBubblePosition="left"
                  disableInteraction
                  priority
                />
              </div>

              {/* Floating dots */}
              <div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-[#22C55E]/40 animate-[hero-float_6s_ease-in-out_infinite]" />
              <div className="absolute bottom-16 left-8 w-1.5 h-1.5 rounded-full bg-[#4ADE80]/30 animate-[hero-float_5s_ease-in-out_infinite_1s]" />
              <div className="absolute top-1/2 right-4 w-1 h-1 rounded-full bg-[#059669]/50 animate-[hero-float_7s_ease-in-out_infinite_2s]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
