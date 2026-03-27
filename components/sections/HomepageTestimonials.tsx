'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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
    quote: "The Domination Mode package delivered 3x ROAS in four months. I've worked with agencies in Dubai, Singapore, and New York — VCS outperformed all of them.",
    author: 'Ahmed Al-Khatib',
    role: 'Agency Owner',
    location: 'Dubai, UAE',
    metric: '3x ROAS',
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
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 radial-glow opacity-30" />

      <div className="container-wide relative z-10">
        <RevealOnScroll variant="fade-up" duration={0.8}>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">Client Results</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display">
              Trusted by Leaders{' '}
              <span className="text-gradient-lime">Worldwide</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Testimonial card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative card-accent p-8 md:p-12 min-h-[320px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Quote className="w-10 h-10 text-[#22C55E]/30 mb-6" />
                <p className="text-lg md:text-xl text-[var(--text-primary)] leading-relaxed mb-8">
                  {"\u201C"}{t.quote}{"\u201D"}
                </p>

                <div className="flex items-end justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#22C55E] to-[#059669] flex items-center justify-center text-white font-bold text-lg">
                      {t.author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-primary)]">{t.author}</div>
                      <div className="text-sm text-[var(--text-muted)]">
                        {t.role}, {t.location}
                      </div>
                    </div>
                  </div>
                  <div className="font-mono text-2xl font-bold text-[#22C55E]">{t.metric}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="min-h-[44px] min-w-[44px] w-12 h-12 rounded-full border border-[var(--border-strong)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[#22C55E] hover:text-[#22C55E] transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full transition-colors duration-300`}
                >
                  <span className={`block rounded-full transition-[width,background-color] duration-300 h-2.5 ${
                    i === current
                      ? 'bg-[#22C55E] w-8'
                      : 'w-2.5 bg-[var(--border-strong)] hover:bg-[var(--text-muted)]'
                  }`} />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="min-h-[44px] min-w-[44px] w-12 h-12 rounded-full border border-[var(--border-strong)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[#22C55E] hover:text-[#22C55E] transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
