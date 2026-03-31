import { SiteShell } from '@/components/layout/SiteShell';
import { RemoteWorkforcePage } from '@/components/sections/RemoteWorkforcePage';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Remote Workforce Solutions',
  description: 'Skilled remote teams for customer support, operations, and back-office functions.',
  provider: {
    '@type': 'Organization',
    name: 'Virtual Customer Solution',
    url: 'https://virtualcustomersolution.com',
  },
  areaServed: 'Worldwide',
  url: 'https://virtualcustomersolution.com/remote-workforce',
};

export default function RemoteWorkforceRoute() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RemoteWorkforcePage />
    </SiteShell>
  );
}
