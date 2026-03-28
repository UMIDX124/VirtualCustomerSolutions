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
      {/* Global animated background — same as hero but blurred and dimmed */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#050505]">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#22C55E]/[0.04] blur-[150px] animate-[hero-drift_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-30%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#059669]/[0.03] blur-[130px] animate-[hero-drift_25s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full bg-[#4ADE80]/[0.02] blur-[100px] animate-[hero-drift_18s_ease-in-out_infinite_2s]" />
        <div className="absolute inset-0 grid-bg opacity-[0.03]" />
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
