import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Virtual Customer Solution',
  description: 'Transparent pricing for digital marketing, remote workforce, and systems reporting services. Plans starting from $399/month with no hidden fees.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
