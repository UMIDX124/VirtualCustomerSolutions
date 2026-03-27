'use client';

import { Linkedin, Mail, ArrowUpRight, Instagram, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';
import { useNavigation } from '@/lib/navigation';

const footerLinks = {
  quickLinks: [
    { name: 'Home', page: 'home' as const },
    { name: 'Services', page: 'services' as const },
    { name: 'Pricing', page: 'pricing' as const },
    { name: 'About', page: 'about' as const },
    { name: 'Blog', page: 'blog' as const },
    { name: 'Contact', page: 'contact' as const },
  ],
  services: [
    { name: 'AI-Powered CX', page: 'services' as const },
    { name: 'Cloud Infrastructure', page: 'services' as const },
    { name: 'Cybersecurity', page: 'services' as const },
    { name: 'Digital Engineering', page: 'services' as const },
    { name: 'Remote Workforce', page: 'services' as const },
    { name: 'Digital Marketing', page: 'services' as const },
  ],
};

export function Footer() {
  const { navigateTo } = useNavigation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F4F4F5] border-t border-[rgba(34,197,94,0.15)] mt-auto neon-border">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#22C55E]/5 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button onClick={() => navigateTo('home')} className="mb-6 flex items-center gap-3">
              <div className="relative h-14 w-14">
                <Image
                  src="/mascot.png"
                  alt="VCS Mascot"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                  style={{ filter: 'drop-shadow(0 0 16px rgba(74,222,128,0.5))' }}
                />
                <div className="absolute -inset-3 bg-[#22C55E]/25 blur-xl rounded-full animate-mascot-glow" />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight">
                  <span className="text-[#09090B]">Virtual </span>
                  <span className="text-[#22C55E] font-extrabold neon-text-strong">Customer</span>
                </span>
                <span className="text-[#22C55E]/50 text-[8px] block -mt-0.5 tracking-[0.3em] font-semibold uppercase neon-text">Solution</span>
              </div>
            </button>
            <p className="max-w-xs text-sm leading-relaxed text-gray-600 mb-6">
              Revolutionizing operations through Human-Centric AI. 
              We deliver scalable solutions for the world's most ambitious companies.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://facebook.com/nexusvcs" target="_blank" rel="noopener noreferrer" className="min-w-[44px] min-h-[44px] w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-600 hover:text-[#22C55E] hover:neon-text transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/nexusvcs" target="_blank" rel="noopener noreferrer" className="min-w-[44px] min-h-[44px] w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-600 hover:text-[#22C55E] hover:neon-text transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/nexusvcs" target="_blank" rel="noopener noreferrer" className="min-w-[44px] min-h-[44px] w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-600 hover:text-[#22C55E] hover:neon-text transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/nexusvcs" target="_blank" rel="noopener noreferrer" className="min-w-[44px] min-h-[44px] w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-600 hover:text-[#22C55E] hover:neon-text transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-[#09090B] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="group inline-flex items-center gap-1 text-sm text-gray-600 hover:text-[#22C55E] transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 translate-y-1 -translate-x-1 opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-[#09090B] mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="group inline-flex items-center gap-1 text-sm text-gray-600 hover:text-[#22C55E] transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 translate-y-1 -translate-x-1 opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-[#09090B] mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:info@virtualcustomersolution.com"
                className="group flex items-center gap-3 text-sm text-gray-600 hover:text-[#22C55E] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#059669] neon-text" />
                info@virtualcustomersolution.com
              </a>
              <a
                href="https://linkedin.com/company/nexusvcs"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-gray-600 hover:text-[#22C55E] transition-colors"
              >
                <Linkedin className="h-4 w-4 text-[#059669] neon-text" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[rgba(34,197,94,0.15)] py-6 sm:flex-row">
          <p className="text-xs text-gray-500">© {currentYear} NEXUS VCS Global. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
