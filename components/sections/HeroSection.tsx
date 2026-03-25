'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/lib/navigation';

export function HeroSection() {
  const { navigateTo } = useNavigation();
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Radial Glows */}
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#41431B]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#AEB784]/10 rounded-full blur-[120px]" />

      {/* Floating Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#41431B]/5 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#AEB784]/5 rounded-full blur-3xl" 
      />

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            style={{ y, opacity }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(65,67,27,0.3)] text-[#41431B] text-sm mb-6"
            >
              <Sparkles size="sm" className="animate-pulse" />
              <span className="tracking-wide">AI-Powered Operations</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight"
            >
              Revolutionizing Operations through{' '}
              <span className="text-gradient-lime">Human-Centric AI</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Scalable solutions for the world's most ambitious companies. 
              We combine cutting-edge AI with human expertise to transform your business operations.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <Button
                onClick={() => navigateTo('free-audit')}
                className="group bg-gradient-to-r from-[#41431B] to-[#2E3013] hover:shadow-[0_0_40px_rgba(65,67,27,0.5)] text-black font-bold px-8 py-6 text-lg transition-all duration-300"
              >
                🎯 Get Your Free Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigateTo('services')}
                variant="outline"
                className="border border-[rgba(65,67,27,0.3)] hover:border-[#41431B] hover:bg-[rgba(65,67,27,0.1)] text-white px-8 py-6 text-lg bg-transparent backdrop-blur-sm"
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
            >
              {[
                { icon: Zap, label: '500+ Clients', color: '#41431B' },
                { icon: Globe, label: '50+ Countries', color: '#AEB784' },
                { icon: Cpu, label: 'AI-Powered', color: '#41431B' },
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
              <motion.div
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full liquid-glass rounded-3xl flex items-center justify-center relative"
                style={{
                  boxShadow: `
                    0 0 60px rgba(65,67,27,0.2),
                    0 0 100px rgba(65,210,197,0.1),
                    inset 0 0 60px rgba(255,255,255,0.05)
                  `
                }}
              >
                {/* Robot Head Logo SVG */}
                <svg viewBox="0 0 120 120" className="w-48 h-48">
                  <defs>
                    <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#41431B" />
                      <stop offset="50%" stopColor="#AEB784" />
                      <stop offset="100%" stopColor="#41431B" />
                    </linearGradient>
                    <linearGradient id="eyeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#AEB784" />
                      <stop offset="100%" stopColor="#41431B" />
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
                      <feFlood floodColor="#41431B" floodOpacity="0.8"/>
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
                  <line x1="60" y1="3" x2="60" y2="20" stroke="#AEB784" strokeWidth="2" />
                  <circle cx="60" cy="5" r="3" fill="#41431B" className="animate-pulse" />
                  
                  {/* Side Accents */}
                  <circle cx="25" cy="50" r="4" fill="#AEB784" className="animate-pulse" />
                  <circle cx="95" cy="50" r="4" fill="#AEB784" className="animate-pulse" />
                </svg>
                
                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#41431B] blur-[2px]"
                />
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-8 left-4 w-2 h-2 rounded-full bg-[#AEB784] blur-[2px]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
