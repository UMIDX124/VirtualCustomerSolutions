import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Virtual Customer Solution. Request a free consultation for digital marketing, remote workforce, or systems reporting services.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
