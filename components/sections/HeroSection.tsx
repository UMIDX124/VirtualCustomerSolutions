'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/lib/navigation';
import { TextReveal, MagneticHover, FloatingElement } from '@/components/animations/ScrollAnimations';

const smoothEase = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const { navigateTo } = useNavigation();
  const { scrollY } = useScroll();

  const rawY = useTransform(scrollY, [0, 800], [0, 60]);
  const rawOpacity = useTransform(scrollY, [200, 800], [1, 0]);
  const rawScale = useTransform(scrollY, [200, 800], [1, 0.97]);

  // Smooth scroll-linked values with useSpring
  const y = useSpring(rawY, { stiffness: 100, damping: 30 });
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 30 });
  const scale = useSpring(rawScale, { stiffness: 100, damping: 30 });

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0F172A]" />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16 xl:px-20 max-w-[1440px] mx-auto w-full pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
        <div className="relative">
          {/* Content — centered on all screens */}
          <motion.div
            style={{ y, opacity }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(34,197,94,0.3)] text-[#22C55E] text-sm mb-6"
            >
              <Sparkles size="sm" className="animate-pulse" />
              <span className="tracking-wide">AI-Powered Operations</span>
            </motion.div>

            <TextReveal
              text="Revolutionizing Operations through Human-Centric AI"
              as="h1"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
              className="text-gray-400 text-lg mt-6 max-w-xl mx-auto leading-relaxed"
            >
              Scalable solutions for the world's most ambitious companies.
              We combine cutting-edge AI with human expertise to transform your business operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: smoothEase }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
            >
              <MagneticHover strength={0.3}>
                <Button
                  onClick={() => navigateTo('free-audit')}
                  className="group w-full sm:w-auto bg-gradient-to-r from-[#22C55E] to-[#0F172A] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] text-black font-bold px-8 py-6 text-lg transition-shadow duration-[400ms]"
                >
                  Get Your Free Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-[400ms]" />
                </Button>
              </MagneticHover>
              <MagneticHover strength={0.3}>
                <Button
                  onClick={() => navigateTo('services')}
                  variant="outline"
                  className="w-full sm:w-auto border border-[rgba(34,197,94,0.3)] hover:border-[#22C55E] hover:bg-[rgba(34,197,94,0.1)] text-white px-8 py-6 text-lg bg-transparent backdrop-blur-sm transition-[border-color,background-color] duration-[400ms]"
                >
                  Explore Services
                </Button>
              </MagneticHover>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: smoothEase }}
              className="flex flex-wrap gap-6 mt-10 justify-center"
            >
              {[
                { icon: Zap, label: '500+ Clients', color: '#22C55E' },
                { icon: Globe, label: '50+ Countries', color: '#059669' },
                { icon: Cpu, label: 'AI-Powered', color: '#22C55E' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-gray-500">
                  <item.icon size="16" style={{ color: item.color }} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual removed — video background serves as the hero visual */}
        </div>
      </div>
    </section>
  );
}
