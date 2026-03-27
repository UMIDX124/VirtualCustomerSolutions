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

      <div className="container-wide relative z-10 pt-8 sm:pt-12 lg:pt-16 pb-8 lg:pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y, opacity }}
            className="text-center lg:text-left"
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
              className="text-gray-400 text-lg mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Scalable solutions for the world's most ambitious companies.
              We combine cutting-edge AI with human expertise to transform your business operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: smoothEase }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
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
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
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

          {/* Right - 3D Logo Visual */}
          <motion.div
            style={{ scale }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              {/* Liquid Glass Container */}
              <div
                className="w-full h-full liquid-glass rounded-3xl flex items-center justify-center relative animate-gentle-rotate will-change-transform"
                style={{
                  boxShadow: `
                    0 0 60px rgba(34,197,94,0.2),
                    0 0 100px rgba(65,210,197,0.1),
                    inset 0 0 60px rgba(255,255,255,0.05)
                  `
                }}
              >
                {/* Robot Head Logo SVG */}
                <svg viewBox="0 0 120 120" className="w-48 h-48">
                  <defs>
                    <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22C55E" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#22C55E" />
                    </linearGradient>
                    <linearGradient id="eyeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#22C55E" />
                    </linearGradient>
                    <filter id="robotGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="neonGlow">
                      <feGaussianBlur stdDeviation="2" result="blur"/>
                      <feFlood floodColor="#22C55E" floodOpacity="0.8"/>
                      <feComposite in2="blur" operator="in"/>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Robot Head Outer */}
                  <path
                    d="M20 25c0-12 8-22 22-22h36c14 0 22 10 22 22v70c0 12-8 22-22 22H42c-14 0-22-10-22-22V25z"
                    fill="url(#robotGradient)"
                    filter="url(#robotGlow)"
                    opacity="0.9"
                  />

                  {/* V Shape - Eyes */}
                  <path
                    d="M35 45l18-12 18 12"
                    stroke="#000"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 45l18-12 18 12"
                    stroke="url(#eyeGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#neonGlow)"
                  />

                  {/* S Shape - Mouth */}
                  <path
                    d="M38 65c4-12 14-12 22 0s18 12 22 0"
                    stroke="#000"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M38 65c4-12 14-12 22 0s18 12 22 0"
                    stroke="url(#eyeGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#neonGlow)"
                  />

                  {/* Antenna */}
                  <line x1="60" y1="3" x2="60" y2="20" stroke="#059669" strokeWidth="2" />
                  <circle cx="60" cy="5" r="3" fill="#22C55E" className="animate-pulse" />

                  {/* Side Accents */}
                  <circle cx="25" cy="50" r="4" fill="#059669" className="animate-pulse" />
                  <circle cx="95" cy="50" r="4" fill="#059669" className="animate-pulse" />
                </svg>

                {/* Floating particles */}
                <FloatingElement amplitude={8} duration={6} className="absolute top-4 right-4">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] blur-[2px] opacity-60" />
                </FloatingElement>
                <FloatingElement amplitude={10} duration={8} className="absolute bottom-8 left-4">
                  <div className="w-2 h-2 rounded-full bg-[#059669] blur-[2px] opacity-60" />
                </FloatingElement>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
