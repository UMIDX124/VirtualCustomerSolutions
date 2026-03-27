'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, BarChart3, Users, Clock, Zap, Target } from 'lucide-react';
import { Section, Container, SectionHeader, FadeUp, GlassCard, StaggerContainer, StaggerItem } from '@/components/ui-dp/AnimatedElements';

const problems = [
  {
    icon: BarChart3,
    title: 'Spending without clarity',
    description: 'Money going into marketing with no clear view of what\'s actually working.',
  },
  {
    icon: AlertTriangle,
    title: 'Inconsistent lead flow',
    description: 'Pipeline is unpredictable. One month up, the next month wondering what happened.',
  },
  {
    icon: Target,
    title: 'Messy reporting',
    description: 'No one trusts the numbers. Attribution is broken. Decisions are guesses.',
  },
  {
    icon: Users,
    title: 'Fragmented vendors',
    description: 'Agencies, freelancers, tools — but no real operating system connecting them.',
  },
  {
    icon: Clock,
    title: 'Founder-dependent execution',
    description: 'Nothing moves fast enough without your constant involvement.',
  },
  {
    icon: Zap,
    title: 'Hiring bottlenecks',
    description: 'Need help but can\'t find, train, and manage the right people fast enough.',
  },
];

export function ProblemSection() {
  return (
    <Section background="gradient">
      <Container>
        <SectionHeader
          eyebrow="The Reality"
          title="Most teams don't have a lead problem. They have a systems and execution problem."
          description="You're not just missing leads. You're missing the infrastructure to turn traffic into predictable revenue."
          align="center"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <StaggerItem key={problem.title}>
              <GlassCard className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
