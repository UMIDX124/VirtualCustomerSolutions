'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useNavigation, type PageRoute } from '@/lib/navigation';
import { Mascot } from './Mascot';
import Image from 'next/image';

const navigation: { name: string; href: PageRoute }[] = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'About', href: 'about' },
  { name: 'Blog', href: 'blog' },
  { name: 'Careers', href: 'careers' },
  { name: 'Contact', href: 'contact' },
  { name: 'Support', href: 'support' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentPage, navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500
        ${isScrolled
          ? 'bg-[rgba(10,10,10,0.95)] backdrop-blur-2xl border-b border-white/[0.06]'
          : 'bg-[rgba(10,10,10,0.8)] backdrop-blur-md'
        }
      `}
    >
      {/* Single row — logo far left, pill center, CTA far right */}
      <div className="flex items-center justify-between h-[64px] mt-3 px-5 sm:px-6 md:px-8 w-full">

        {/* ─── LEFT: Brand logo — no mascot ─── */}
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center group flex-shrink-0"
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/Virtual.png"
              alt="Virtual Customer Solution logo"
              width={160}
              height={34}
              className="h-7 lg:h-8 w-auto object-contain"
              priority
            />
            <span className="text-[8px] lg:text-[9px] text-[#4ADE80]/50 tracking-[0.22em] font-semibold mt-0.5 uppercase neon-text">
              Customer Solution
            </span>
          </div>
        </button>

        {/* ─── CENTER: Pill nav (exactly like Backup Solutions) ─── */}
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-0 px-1.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.07]">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateTo(item.href)}
                className="relative px-4 py-1.5 text-[13px] font-medium rounded-full transition-colors duration-300"
              >
                {currentPage === item.href && (
                  <motion.div
                    layoutId="navPill"
                    className="absolute inset-0 rounded-full bg-[#22C55E] neon-box"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${
                  currentPage === item.href
                    ? 'text-[#09090B] font-semibold'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
                }`}>
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ─── RIGHT: CTA button (with border glow like Backup Solutions) ─── */}
        <div className="hidden lg:block flex-shrink-0">
          <button
            onClick={() => navigateTo('free-audit')}
            className="
              relative group inline-flex items-center gap-2
              px-6 py-2.5
              rounded-full
              border border-[#22C55E]/40
              bg-[#22C55E]/10
              text-[#F5F5F5] text-sm font-semibold
              transition-[border-color,background,box-shadow] duration-300
              hover:border-[#22C55E]/70
              hover:bg-[#22C55E]/20
              hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]
              neon-box neon-border
            "
          >
            <span>Free Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* ─── Mobile menu toggle ─── */}
        <button
          className="lg:hidden p-2 min-h-[44px] min-w-[44px] rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ─── Mobile drawer ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[rgba(10,10,10,0.97)] backdrop-blur-2xl border-t border-white/[0.06]"
          >
            <div className="px-5 py-5 space-y-1">
              {navigation.map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => { navigateTo(item.href); setIsOpen(false); }}
                  className={`
                    w-full text-left px-4 py-3 rounded-xl text-[15px] transition-colors duration-300
                    ${currentPage === item.href
                      ? 'text-[#F5F5F5] bg-[#22C55E]/10 font-semibold border border-[#22C55E]/15'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/[0.03]'
                    }
                  `}
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => { navigateTo('free-audit'); setIsOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/10 text-[#F5F5F5] font-semibold text-[15px] neon-box neon-border"
                >
                  Free Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
