'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigation } from '@/lib/navigation';

const smoothEase = [0.16, 1, 0.3, 1] as const;

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isDismissed, setIsDismissed] = useState(false);
  const { navigateTo } = useNavigation();

  useEffect(() => {
    const dismissed = sessionStorage.getItem('exitIntentDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isDismissed) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('exitIntentDismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDismiss();
    navigateTo('free-audit');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleDismiss}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="relative z-10 bg-[var(--surface)] border border-[var(--border-glass)] rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
          >
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-1 min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-[400ms]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="text-4xl mb-4">🛑</div>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
                Wait! Before You Go...
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Get a <span className="text-[#22C55E] font-semibold">FREE $499 Digital Audit</span> — On Us.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[var(--surface-glass)] border-[var(--border-glass)]"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#22C55E] hover:bg-[#059669] text-white font-semibold py-3"
                >
                  YES, I Want My Free Audit
                </Button>
              </form>

              <button
                onClick={handleDismiss}
                className="mt-4 text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
              >
                No thanks, I don't want free stuff
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
