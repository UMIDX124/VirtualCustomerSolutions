import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Marketing Audit | Virtual Customer Solution',
  description: 'Get a free, no-obligation marketing audit. We analyze your SEO, ads, social media, and competitors to deliver a custom 90-day growth plan.',
};

export default function FreeAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
