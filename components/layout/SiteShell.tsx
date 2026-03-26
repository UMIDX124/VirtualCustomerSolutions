import type { ReactNode } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/sections/WhatsAppButton';
import { ExitIntentPopup } from '@/components/sections/ExitIntentPopup';
import { CookieConsent } from '@/components/CookieConsent';
import { StickyCTABar } from '@/components/sections/StickyCTABar';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="noise-overlay pointer-events-none fixed inset-0 z-0" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ExitIntentPopup />
        <CookieConsent />
        <StickyCTABar />
      </div>
    </div>
  );
}
