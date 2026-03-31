import { SiteShell } from '@/components/layout/SiteShell';
import { SystemsReportingPage } from '@/components/sections/SystemsReportingPage';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Systems & Reporting',
  description: 'Custom dashboards, analytics, and reporting systems to give businesses full visibility into performance.',
  provider: {
    '@type': 'Organization',
    name: 'Virtual Customer Solution',
    url: 'https://virtualcustomersolution.com',
  },
  areaServed: 'Worldwide',
  url: 'https://virtualcustomersolution.com/systems-reporting',
};

export default function SystemsReportingRoute() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SystemsReportingPage />
    </SiteShell>
  );
}
