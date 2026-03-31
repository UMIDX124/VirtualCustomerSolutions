import { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { AuditPage } from '@/components/sections/AuditPage';

export const metadata: Metadata = {
  title: 'Free Growth Audit — Get Your Custom Growth Plan',
  description: 'Book your free growth audit with VCS. We analyse your marketing, team, and systems then deliver a custom roadmap to scale your revenue in 90 days.',
  alternates: {
    canonical: 'https://virtualcustomersolution.com/free-growth-audit',
  },
  openGraph: {
    title: 'Free Growth Audit — Get Your Custom Growth Plan',
    description: 'Book your free growth audit with VCS. We analyse your marketing, team, and systems then deliver a custom roadmap to scale your revenue in 90 days.',
    url: 'https://virtualcustomersolution.com/free-growth-audit',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'VCS Free Growth Audit' }],
  },
};

export default function AuditRoute() {
  return (
    <SiteShell>
      <AuditPage />
    </SiteShell>
  );
}
