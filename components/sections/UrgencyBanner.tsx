'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigation } from '@/lib/navigation';
import { Button } from '@/components/ui/button';

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { navigateTo } = useNavigation();

  useEffect(() => {
    const dismissed = localStorage.getItem('urgencyBannerDismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('urgencyBannerDismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#22C55E] to-[#0F172A] text-white py-2 px-4">
      <div className="container-wide flex items-center justify-center gap-4">
        <p className="text-sm font-medium text-center">
          🔥 Limited: First 50 Clients Get Lifetime Rate Lock — Only 12 Spots Left!
        </p>
        <Button
          onClick={() => navigateTo('free-audit')}
          className="bg-white text-[#22C55E] hover:bg-gray-100 text-xs px-3 py-1 h-7"
        >
          Get Started
        </Button>
        <button
          onClick={handleDismiss}
          className="absolute right-4 p-1 hover:bg-white/20 rounded"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
