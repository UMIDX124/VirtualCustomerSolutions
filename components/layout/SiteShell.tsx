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
      {/* Global dark background with subtle green glow — no video to avoid slow load */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(5,150,105,0.04)_0%,transparent_60%)]" />
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
