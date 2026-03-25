'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { useNavigation, type PageRoute } from '@/lib/navigation';

const navigation: { name: string; href: PageRoute }[] = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'About', href: 'about' },
  { name: 'Blog', href: 'blog' },
  { name: 'Careers', href: 'careers' },
  { name: 'Contact', href: 'contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentPage, navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#CC0000] via-[#FF0000] to-[#CC0000] py-2 px-4 text-center text-sm font-medium">
        <span className="text-black">
          🔥 Launch Special: First 50 clients get LIFETIME rate lock + 50% OFF — 
          <button 
            onClick={() => navigateTo('free-audit')}
            className="underline hover:no-underline ml-1"
          >
            Claim Now →
          </button>
        </span>
      </div>

      {/* Main Nav */}
      <header
        className={`
          sticky top-0 z-50 transition-all duration-500
          ${isScrolled 
            ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)]' 
            : 'bg-transparent'
          }
        `}
      >
        <nav className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <defs>
                    <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF0000" />
                      <stop offset="100%" stopColor="#171A1F" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z"
                    fill="url(#navLogoGrad)"
                  />
                  <text x="24" y="30" textAnchor="middle" fill="#006233" fontSize="16" fontWeight="bold">VCS</text>
                </svg>
                <div className="absolute -inset-1 bg-[#FF0000]/20 blur-xl rounded-full group-hover:bg-[#FF0000]/30 transition-all" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg lg:text-xl tracking-tight text-[#006233]">
                  VCS
                  <span className="text-[#FF0000]">.</span>
                </span>
                <span className="text-[10px] text-[#94A3B8] tracking-widest hidden sm:block">PAKISTAN</span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigateTo(item.href)}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                    ${currentPage === item.href
                      ? 'text-black bg-[rgba(255,0,0,0.8)]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigateTo('free-audit')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF0000] to-[#171A1F] text-black font-semibold rounded-full hover:shadow-[0_0_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:scale-105"
              >
                <Rocket className="w-4 h-4" />
                Get Free Audit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:text-[#FF0000] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0A0A0A] border-t border-[rgba(255,255,255,0.08)]"
            >
              <div className="container-wide py-4 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigateTo(item.href);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg transition-colors
                      ${currentPage === item.href
                        ? 'text-[#FF0000] bg-[rgba(16,185,129,0.1)]'
                        : 'text-[#94A3B8] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                      }
                    `}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 px-4">
                  <button
                    onClick={() => {
                      navigateTo('free-audit');
                      setIsOpen(false);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#CC0000] to-[#FF0000] text-black font-semibold rounded-full"
                  >
                    <Rocket className="w-4 h-4" />
                    Get Free Audit
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
