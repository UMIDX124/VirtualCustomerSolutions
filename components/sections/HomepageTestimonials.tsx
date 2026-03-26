'use client';

import { HorizontalScroll, HorizontalCard } from '@/components/motion/HorizontalScroll';
import { Quote } from 'lucide-react';
import { RevealOnScroll } from '@/components/animations/ScrollAnimations';

const testimonials = [
  {
    quote: "We were paying $8,000/month to two separate agencies. VCS gave us better results for a fraction of that. The ROI speaks for itself.",
    author: 'Sarah Mitchell',
    role: 'E-Commerce Founder',
    location: 'New York, USA',
    metric: '340% ROI',
  },
  {
    quote: "Their remote marketing specialist feels like part of our in-house team. Best hiring decision we made this year — and we didn't even have to do the hiring.",
    author: 'James Richardson',
    role: 'SaaS Co-Founder',
    location: 'London, UK',
    metric: '52% Cost Reduction',
  },
  {
    quote: "The Domination Mode package delivered 3× ROAS in four months. I've worked with agencies in Dubai, Singapore, and New York — VCS outperformed all of them.",
    author: 'Ahmed Al-Khatib',
    role: 'Agency Owner',
    location: 'Dubai, UAE',
    metric: '3× ROAS',
  },
  {
    quote: "From campaign strategy to reporting dashboards, everything is handled. I finally have time to focus on product instead of firefighting marketing.",
    author: 'Lisa Thompson',
    role: 'Real Estate Tech CEO',
    location: 'Toronto, Canada',
    metric: '12hrs/week Saved',
  },
  {
    quote: "Their Pakistan-based team is sharper than any local hire I've made. The time zone overlap with the US East Coast is actually an advantage — work gets done while we sleep.",
    author: 'David Chen',
    role: 'FinTech Director',
    location: 'San Francisco, USA',
    metric: '24/7 Coverage',
  },
];

export function HomepageTestimonials() {
  return (
    <div className="relative bg-[var(--bg-primary)]">
      {/* Section header */}
      <RevealOnScroll variant="fade-up" duration={0.8}>
        <div className="container-wide pt-24 pb-8 text-center">
          <span className="badge mb-4 inline-block">Client Results</span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Trusted by Leaders{' '}
            <span className="text-gradient-lime">Worldwide</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">
            Scroll sideways to hear from our clients →
          </p>
        </div>
      </RevealOnScroll>

      {/* Horizontal scroll testimonials */}
      <HorizontalScroll>
        {testimonials.map((t, i) => (
          <HorizontalCard key={i}>
            <div className="h-full card-accent p-8 md:p-10 flex flex-col justify-between min-h-[400px]">
              {/* Quote icon */}
              <div>
                <Quote className="w-10 h-10 text-[#3B82F6]/30 mb-6" />
                <p className="text-lg md:text-xl text-[var(--text-primary)] leading-relaxed mb-8">
                  {"\u201C"}{t.quote}{"\u201D"}
                </p>
              </div>

              {/* Author + metric */}
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center text-white font-bold text-lg">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{t.author}</div>
                    <div className="text-sm text-[var(--text-muted)]">
                      {t.role}, {t.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-2xl font-bold text-[#3B82F6]">{t.metric}</div>
                </div>
              </div>
            </div>
          </HorizontalCard>
        ))}
      </HorizontalScroll>
    </div>
  );
}
