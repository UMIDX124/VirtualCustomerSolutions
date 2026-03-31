import { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { AuditPage } from '@/components/sections/AuditPage';

export const metadata: Metadata = {
  title: { absolute: 'Free Growth Audit — Custom Growth Plan | VCS' },
  description: 'Book your free growth audit with VCS. We analyse your marketing, team, and systems then deliver a custom roadmap to scale your revenue in 90 days.',
  alternates: {
    canonical: 'https://virtualcustomersolution.com/free-growth-audit',
  },
  openGraph: {
    title: 'Free Growth Audit — Custom Growth Plan | VCS',
    description: 'Book your free growth audit with VCS. We analyse your marketing, team, and systems then deliver a custom roadmap to scale your revenue in 90 days.',
    url: 'https://virtualcustomersolution.com/free-growth-audit',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'VCS Free Growth Audit' }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://virtualcustomersolution.com" },
    { "@type": "ListItem", position: 2, name: "Free Growth Audit", item: "https://virtualcustomersolution.com/free-growth-audit" },
  ],
};

export default function AuditRoute() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AuditPage />
    </SiteShell>
  );
}
