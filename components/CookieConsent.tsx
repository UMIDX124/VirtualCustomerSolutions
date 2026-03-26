'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, X } from 'lucide-react';
import Link from 'next/link';

const STORAGE_KEY = 'vcs-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
          transition={{ type: 'tween', duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl"
        >
          <div className="relative rounded-2xl border border-white/[0.08] bg-[#1E293B]/90 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
            {/* dismiss */}
            <button
              onClick={handleDecline}
              aria-label="Dismiss cookie consent"
              className="absolute right-3 top-3 rounded-full p-1 text-[#94A3B8] transition hover:bg-white/5 hover:text-[#F8FAFC]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* icon + text */}
              <div className="flex items-start gap-3 sm:flex-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                  <Cookie className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F8FAFC]">
                    We use cookies to enhance your experience
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#94A3B8]">
                    We use cookies and similar technologies to personalise content, analyse
                    traffic, and improve our services.{' '}
                    <Link
                      href="/privacy-policy"
                      className="inline-flex items-center gap-1 text-[#3B82F6] underline underline-offset-2 transition hover:text-[#60A5FA]"
                    >
                      <Shield className="h-3 w-3" />
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>

              {/* buttons */}
              <div className="flex shrink-0 items-center gap-2">
                <button
                  onClick={handleDecline}
                  className="rounded-full border border-white/[0.08] bg-transparent px-4 py-2 text-sm font-medium text-[#CBD5E1] transition hover:border-white/20 hover:text-[#F8FAFC]"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/20 transition hover:shadow-[#3B82F6]/30"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
