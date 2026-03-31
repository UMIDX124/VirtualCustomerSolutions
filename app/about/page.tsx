import { SiteShell } from '@/components/layout/SiteShell';
import { Metadata } from 'next';
// import Image from 'next/image'; // Ready for real images
import { FadeUp, GlassCard } from '@/components/ui-dp/AnimatedElements';

export const metadata: Metadata = {
  title: 'About Us — 8+ Years, 200+ Clients',
  description: 'Learn about Virtual Customer Solution — 8+ years combining AI-powered digital marketing, remote teams & web development. 200+ clients across 15+ countries.',
  alternates: {
    canonical: 'https://virtualcustomersolution.com/about',
  },
  openGraph: {
    title: 'About Virtual Customer Solution',
    description: '8+ years combining AI-powered digital marketing, remote teams & web development. 200+ clients across 15+ countries.',
    url: 'https://virtualcustomersolution.com/about',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'About Virtual Customer Solution' }],
  },
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
    description: 'We keep up with what works so you don\'t have to. You get strategies that are actually current.',
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
    description: 'Working with clients across 15+ countries with flexible scheduling.',
  },
];

const team = [
  {
    name: 'CEO',
    role: 'Founder & CEO',
    description: 'Leading Virtual Customer Solution with a vision to help businesses grow smarter.',
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

          {/* Hero Image Section */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-20 group">
            {/* Light background with subtle green glow */}
            <div className="absolute inset-0 bg-[#111111]" />
            {/* Decorative geometric elements */}
            <div className="absolute top-12 left-12 w-40 h-40 rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-16 left-16 w-32 h-32 rounded-full border border-white/[0.07]" />
            <div className="absolute bottom-16 right-16 w-64 h-64 rotate-45 border border-white/[0.05] group-hover:rotate-[50deg] transition-transform duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/[0.04] blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-80 h-80 rounded-full bg-[#22C55E]/10 blur-[100px]" />
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-bg opacity-10" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
              <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-2">Est. 2016</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2">
                8+ Years of Getting It Done
              </h2>
              <p className="text-[#A1A1AA] max-w-lg">
                200+ clients across 15+ countries rely on us to handle the work that matters.
              </p>
            </div>
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
                  What started as a small remote staffing operation has grown into a full-service agency handling marketing, web development, and operations support for 200+ clients in 15+ countries.
                </p>
                <p>
                  We saw businesses struggling to manage multiple vendors — one for marketing, another for staff, another for web design. The complexity was killing their growth. We fixed that by bringing everything under one roof.
                </p>
                <p>
                  Today, we're the ONLY agency that offers marketing + remote staff in one package. Our clients save 50-75% compared to hiring these services separately — and they get better results because everything works together.
                </p>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-text-secondary mb-6">
                Help businesses stop overpaying for marketing and remote staff by putting both under one roof — with people who actually care about results.
              </p>
              <h3 className="font-display text-xl font-bold text-text-primary mb-4">
                Where We're Headed
              </h3>
              <p className="text-text-secondary">
                We want to be the first call when a business needs to grow but doesn't want to deal with five different agencies to make it happen.
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
                    <div className="w-20 h-20 rounded-full bg-white/[0.06] border border-[#22C55E]/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-[#22C55E]">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#22C55E] text-sm font-medium mb-2">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#4ADE80] text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
            >
              🎯 Get Your FREE Digital Audit
            </a>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
