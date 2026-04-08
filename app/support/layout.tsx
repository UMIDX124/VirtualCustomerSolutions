import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — Submit a Ticket',
  description: 'Existing client support. Submit a support ticket to the Virtual Customer Solution team and we will respond within a few business hours.',
  alternates: {
    canonical: 'https://virtualcustomersolution.com/support',
  },
  openGraph: {
    title: 'Submit a Support Ticket — Virtual Customer Solution',
    description: 'Existing client support. Submit a support ticket and our team will get on it.',
    url: 'https://virtualcustomersolution.com/support',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'VCS Support' }],
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
