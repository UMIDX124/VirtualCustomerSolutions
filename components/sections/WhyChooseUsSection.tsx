'use client';

import { Check, ArrowRight } from 'lucide-react';
import { Section, Container, SectionHeader, FadeUp, GlassCard } from '@/components/ui-dp/AnimatedElements';
import { useNavigation } from '@/lib/navigation';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    title: 'Marketing + Remote Staff in ONE package',
    description: 'Unique offering — competitors don\'t offer this combination',
    icon: '✅',
  },
  {
    title: 'Save 50-75% vs hiring separately',
    description: 'Get both services at a fraction of the cost',
    icon: '💰',
  },
  {
    title: 'Your OWN dedicated team',
    description: 'Not shared, not outsourced — they\'re all yours',
    icon: '👥',
  },
  {
    title: 'Performance guarantees on every plan',
    description: 'We put our money where our mouth is',
    icon: '🎯',
  },
  {
    title: 'No long-term contracts',
    description: 'Cancel anytime with 30-day notice',
    icon: '🔓',
  },
];

const packages = [
  {
    name: 'Starter Rocket',
    price: '$399',
    period: '/mo',
    description: 'For Startups',
    badge: '🟢',
    highlighted: false,
    link: 'pricing',
  },
  {
    name: 'Growth Engine',
    price: '$999',
    period: '/mo',
    description: 'Most Popular',
    badge: '🔵',
    highlighted: true,
    link: 'pricing',
  },
  {
    name: 'Domination Mode',
    price: '$2,499',
    period: '/mo',
    description: 'For Market Leaders',
    badge: '🟡',
    highlighted: false,
    link: 'pricing',
  },
];

export function WhyChooseUsSection() {
  const { navigateTo } = useNavigation();

  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Why Choose Us"
          title="The Only Agency That Does This"
          description="Why businesses choose VCS over other agencies and freelance options."
          align="center"
        />

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <FadeUp key={benefit.title} delay={index * 0.1}>
              <GlassCard className="p-6 flex gap-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="font-display text-lg font-bold text-text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {benefit.description}
                  </p>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        {/* Package Preview */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
            Our Pricing Packages
          </h3>
          <p className="text-text-secondary">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <FadeUp key={pkg.name} delay={index * 0.1}>
              <GlassCard 
                className={`p-6 text-center ${pkg.highlighted ? 'border-2 border-[#1F7D53] relative' : ''}`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#255F38] text-black text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-4xl mb-4">{pkg.badge}</div>
                <h4 className="font-display text-xl font-bold text-text-primary mb-2">
                  {pkg.name}
                </h4>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-[#1F7D53]">{pkg.price}</span>
                  <span className="text-text-muted text-sm">{pkg.period}</span>
                </div>
                <p className="text-text-muted text-sm mb-4">{pkg.description}</p>
                <Button
                  onClick={() => navigateTo(pkg.link as any)}
                  variant={pkg.highlighted ? 'default' : 'outline'}
                  className="w-full"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
