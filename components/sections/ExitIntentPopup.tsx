'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigation } from '@/lib/navigation';

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

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />
      
      {/* Popup */}
      <div className="relative z-10 bg-surface border border-border-glass rounded-2xl p-8 max-w-md mx-4 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-1 text-text-muted hover:text-text-primary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="text-4xl mb-4">🛑</div>
          <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
            Wait! Before You Go...
          </h2>
          <p className="text-text-secondary mb-6">
            Get a <span className="text-[#3B82F6] font-semibold">FREE $499 Digital Audit</span> — On Us.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-surface-glass border-border-glass"
            />
            <Button
              type="submit"
              className="w-full bg-[#3B82F6] hover:bg-[#1D4ED8] text-white font-semibold py-3"
            >
              🎯 YES, I Want My Free Audit
            </Button>
          </form>

          <button
            onClick={handleDismiss}
            className="mt-4 text-xs text-text-muted hover:text-text-secondary"
          >
            No thanks, I don't want free stuff
          </button>
        </div>
      </div>
    </div>
  );
}
