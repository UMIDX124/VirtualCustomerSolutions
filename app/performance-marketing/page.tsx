import { SiteShell } from '@/components/layout/SiteShell';
import { PerformanceMarketingPage } from '@/components/sections/PerformanceMarketingPage';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Performance Marketing',
  description: 'ROI-focused paid ads, SEO, and social media marketing for growing businesses.',
  provider: {
    '@type': 'Organization',
    name: 'Virtual Customer Solution',
    url: 'https://virtualcustomersolution.com',
  },
  areaServed: 'Worldwide',
  url: 'https://virtualcustomersolution.com/performance-marketing',
};

export default function PerformanceMarketingRoute() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PerformanceMarketingPage />
    </SiteShell>
  );
}
