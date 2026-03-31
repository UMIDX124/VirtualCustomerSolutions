import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Free Digital Audit — Find What\'s Holding You Back' },
  description: 'Get a free audit of your website, marketing, and online presence. We pinpoint the top issues holding back your growth and show you what to fix first.',
  alternates: {
    canonical: 'https://virtualcustomersolution.com/free-audit',
  },
  openGraph: {
    title: 'Free Digital Audit — Find What\'s Holding You Back',
    description: 'Get a free audit of your website, marketing, and online presence. We pinpoint the top issues holding back your growth and show you what to fix first.',
    url: 'https://virtualcustomersolution.com/free-audit',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'VCS Free Digital Audit' }],
  },
};

export default function FreeAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
