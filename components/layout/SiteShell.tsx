import type { ReactNode } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/sections/WhatsAppButton';
import { ExitIntentPopup } from '@/components/sections/ExitIntentPopup';
import { CookieConsent } from '@/components/CookieConsent';
import { StickyCTABar } from '@/components/sections/StickyCTABar';
import { ChatbotLoader } from '@/components/ui/ChatbotLoader';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Global blurred video background — visible on all pages */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover blur-md scale-105"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0A0A0A]/75" />
      </div>
      <div className="noise-overlay pointer-events-none fixed inset-0 z-[1]" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ExitIntentPopup />
        <CookieConsent />
        <StickyCTABar />
        <ChatbotLoader />
      </div>
    </div>
  );
}
