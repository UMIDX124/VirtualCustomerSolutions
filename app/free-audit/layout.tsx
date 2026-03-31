import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Digital Audit — Identify What\'s Holding Your Growth Back',
  description: 'Get a free digital audit of your website, marketing, and online presence. We identify the top issues holding back your growth and show you exactly what to fix first.',
  alternates: {
    canonical: 'https://virtualcustomersolution.com/free-audit',
  },
  openGraph: {
    title: 'Free Digital Audit — Identify What\'s Holding Your Growth Back',
    description: 'Get a free digital audit of your website, marketing, and online presence. We identify the top issues holding back your growth and show you exactly what to fix first.',
    url: 'https://virtualcustomersolution.com/free-audit',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'VCS Free Digital Audit' }],
  },
};

export default function FreeAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
