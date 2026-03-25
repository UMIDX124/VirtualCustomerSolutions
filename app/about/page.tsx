import { SiteShell } from '@/components/layout/SiteShell';
import { Metadata } from 'next';
import { FadeUp, GlassCard } from '@/components/ui-dp/AnimatedElements';

export const metadata: Metadata = {
  title: 'About Us | Virtual Customer Solution',
  description: 'Learn about Virtual Customer Solution - Our mission, vision, and values. We combine IT solutions, digital marketing with dedicated remote talent to help businesses grow.',
};

const values = [
  {
    icon: '🎯',
    title: 'Results-First',
    description: 'Everything we do is measured and optimized for real business growth.',
  },
  {
    icon: '🤝',
    title: 'Transparency',
    description: 'No hidden fees, no surprises, no BS. What you see is what you get.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We stay ahead of trends so you don\'t have to. You get cutting-edge strategies.',
  },
  {
    icon: '🛡️',
    title: 'Reliability',
    description: 'Your dedicated team shows up every single day, delivering consistent results.',
  },
  {
    icon: '❤️',
    title: 'Client-First',
    description: 'Your success is literally our business. We win when you win.',
  },
  {
    icon: '⚡',
    title: 'Speed & Efficiency',
    description: 'We deliver projects on time and optimize for maximum performance.',
  },
  {
    icon: '🔒',
    title: 'Security First',
    description: 'Your data and systems are protected with enterprise-grade security.',
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    description: 'Serving clients across 50+ countries with 24/7 support capabilities.',
  },
];

const team = [
  {
    name: 'CEO',
    role: 'Founder & CEO',
    description: 'Leading Digital Point LLC with a vision to transform how businesses grow.',
  },
  {
    name: 'Marketing Director',
    role: 'Marketing Director',
    description: 'Overseeing all digital marketing strategies and campaigns.',
  },
  {
    name: 'Operations Manager',
    role: 'Operations Manager',
    description: 'Managing remote team operations and client relationships.',
  },
  {
    name: 'IT Director',
    role: 'IT Director',
    description: 'Leading technology solutions and software development.',
  },
  {
    name: 'Security Expert',
    role: 'Cybersecurity Lead',
    description: 'Protecting businesses from digital threats.',
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="pt-32 pb-20">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                  About Virtual Customer Solution
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              We were born from a simple idea — businesses shouldn't have to choose between great marketing and affordable remote talent.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <h2 className="font-display text-3xl font-bold text-text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Virtual Customer Solution was born from a simple idea — businesses shouldn't have to choose between great IT solutions and affordable remote talent. We combined both into one powerful solution.
                </p>
                <p>
                  What started as a small remote staffing service has evolved into a full-service digital marketing and workforce agency serving 500+ clients across 50+ countries.
                </p>
                <p>
                  We saw businesses struggling to manage multiple vendors — one for marketing, another for staff, another for web design. The complexity was killing their growth. We fixed that by bringing everything under one roof.
                </p>
                <p>
                  Today, we're the ONLY agency that offers marketing + remote staff in one package. Our clients save 50-75% compared to hiring these services separately — and they get better results because everything works together.
                </p>
              </div>
            </div>
            <div className="bg-surface-glass border border-border-glass rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-text-secondary mb-6">
                To help businesses grow faster and smarter by combining cutting-edge marketing with dedicated remote talent — at a price that makes sense.
              </p>
              <h3 className="font-display text-xl font-bold text-text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-text-secondary">
                To become the world's most trusted partner for businesses seeking affordable, results-driven growth solutions.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-text-primary text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <FadeUp key={value.title} delay={index * 0.1}>
                  <GlassCard className="p-6">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {value.description}
                    </p>
                  </GlassCard>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-text-primary text-center mb-4">
              Meet Our Team
            </h2>
            <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
              Our dedicated team is committed to your success. Each member brings expertise in their field to deliver exceptional results.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <FadeUp key={member.name} delay={index * 0.1}>
                  <GlassCard className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#3B82F6]/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-[#3B82F6]">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#3B82F6] text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-text-muted text-sm">
                      {member.description}
                    </p>
                  </GlassCard>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
              Ready to Grow With Us?
            </h2>
            <p className="text-text-secondary mb-6">
              Let's discuss how we can help your business reach its full potential.
            </p>
            <a
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              🎯 Get Your FREE Digital Audit
            </a>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
