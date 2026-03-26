'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FadeUp, GlassCard, SignalPoint, StaggerContainer, StaggerItem } from '@/components/ui-dp/AnimatedElements';
import { RevealOnScroll } from '@/components/animations/ScrollAnimations';

const faqs = [
  {
    question: 'What happens after I request a free digital audit?',
    answer: 'Within 24 hours, our team will analyze your digital presence and send you a comprehensive report with actionable recommendations. No obligation, no sales pressure.',
  },
  {
    question: 'What\'s included in your digital marketing services?',
    answer: 'SEO, PPC (Google Ads), social media marketing, content marketing, email marketing, and full analytics — all managed by your dedicated team.',
  },
  {
    question: 'How does the remote workforce service work?',
    answer: 'We provide dedicated remote staff — VAs, marketing specialists, customer support, content writers — who work exclusively for your business. Not shared, not outsourced.',
  },
  {
    question: 'Are there long-term contracts?',
    answer: 'No! All plans are month-to-month. Cancel anytime with 30-day notice. No hidden fees, no surprises.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! We serve clients in 50+ countries. Our remote team model means we work effectively across time zones with 24/7 coverage.',
  },
  {
    question: 'How fast will I see results?',
    answer: 'Most clients see improvements in 30-60 days. We guarantee visible results — or your money back.',
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <RevealOnScroll variant="fade-up" duration={0.8}>
    <section className="section-padding relative">
      <div className="container-narrow">
        {/* Section Header */}
        <FadeUp className="text-center mb-12">
          <span className="text-[#3B82F6] text-sm font-medium uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            Common questions about working with us.
          </h2>
        </FadeUp>

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const itemKey = `faq-${index}`;
            const isOpen = openItems.has(itemKey);

            return (
              <GlassCard key={itemKey} className="overflow-hidden" hover={false}>
                <button
                  onClick={() => toggleItem(itemKey)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4"
                >
                  <span className="font-medium text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted flex-shrink-0 mt-0.5 transition-transform duration-500 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed border-t border-white/[0.04] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
}
