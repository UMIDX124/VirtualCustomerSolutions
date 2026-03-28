'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section, Container, SectionHeader, FadeUp, GlassCard, StaggerContainer, StaggerItem } from '@/components/ui-dp/AnimatedElements';
import { useNavigation } from '@/lib/navigation';

const caseStudies = [
  {
    category: 'B2B Service Business',
    result: '-42% CAC',
    description: 'Reduced customer acquisition cost while doubling lead volume through creative testing and audience refinement.',
    services: ['Performance Marketing', 'Creative Strategy'],
    timeline: '4 months',
  },
  {
    category: 'Multi-location Service',
    result: '+156% Pipeline',
    description: 'Set up proper tracking so they could see which campaigns were actually working. Moved budget from the losers to the winners.',
    services: ['Systems & Reporting', 'Attribution'],
    timeline: '3 months',
  },
  {
    category: 'Growth-stage Agency',
    result: '12-person team',
    description: 'Deployed a fully managed remote execution pod, reducing founder dependency by 60% on operational tasks.',
    services: ['Remote Workforce', 'Operations'],
    timeline: '6 months',
  },
];

export function ProofSection() {
  const { navigateTo } = useNavigation();

  return (
    <Section background="gradient">
      <Container>
        <SectionHeader
          eyebrow="Proven Results"
          title="What changes when acquisition, reporting, and execution finally line up."
          description="Real outcomes from the integrated model. Not hypothetical growth."
          align="center"
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <StaggerItem key={study.category}>
              <GlassCard className="p-6 h-full">
                {/* Result Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-sm font-semibold mb-4 neon-text-strong">
                  {study.result}
                </div>

                {/* Category */}
                <div className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-2">
                  {study.category}
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {study.description}
                </p>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.services.map((service) => (
                    <span key={service} className="text-xs px-2 py-1 rounded bg-[var(--surface-glass-strong)] text-[var(--text-muted)]">
                      {service}
                    </span>
                  ))}
                </div>

                {/* Timeline */}
                <div className="text-[var(--text-muted)] text-xs">
                  Timeline: {study.timeline}
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className="text-center">
          <Button
            onClick={() => navigateTo('results')}
            variant="outline"
            className="border-[var(--border-glass)] hover:border-[#22C55E] hover:text-[var(--text-primary)] group"
          >
            View All Results
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
