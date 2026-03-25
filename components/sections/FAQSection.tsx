'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FadeUp, GlassCard, SignalPoint, StaggerContainer, StaggerItem } from '@/components/ui-dp/AnimatedElements';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'What happens after I request a free digital audit?',
        answer: 'Within 24 hours, our team will analyze your digital presence and send you a comprehensive report with actionable recommendations. No obligation, no sales pressure.',
      },
      {
        question: 'Is the digital audit really free?',
        answer: 'Yes! The audit is 100% free. We\'ll analyze your SEO, social media, ad spend, and competitors — and give you a custom growth plan. No credit card required.',
      },
      {
        question: 'What types of businesses do you work with?',
        answer: 'We work with businesses of all sizes — from startups to enterprise. Whether you need digital marketing, remote staff, or both, we have packages that fit.',
      },
    ],
  },
  {
    category: 'Services',
    questions: [
      {
        question: 'What\'s included in digital marketing services?',
        answer: 'Our digital marketing covers SEO, PPC (Google Ads), social media marketing (Facebook, Instagram, TikTok, LinkedIn), content marketing, email marketing, and more.',
      },
      {
        question: 'How does the remote workforce service work?',
        answer: 'We provide dedicated remote staff — VAs, marketing specialists, customer support, content writers, and more. You get your own team that works exclusively for you.',
      },
      {
        question: 'Can I get both marketing AND remote staff?',
        answer: 'Absolutely! That\'s our unique offering. Get powerful digital marketing AND dedicated remote staff in one affordable package — saving 50-75% vs hiring separately.',
      },
    ],
  },
  {
    category: 'Pricing & Guarantees',
    questions: [
      {
        question: 'Are there long-term contracts?',
        answer: 'No! All plans are month-to-month. Cancel anytime with 30-day notice. No hidden fees, no surprises.',
      },
      {
        question: 'What if I\'m not satisfied?',
        answer: 'Every plan comes with a guarantee. Starter has 30-day money-back, Growth Engine guarantees 20% traffic increase in 90 days, Domination Mode guarantees 3X ROI in 6 months.',
      },
      {
        question: 'Can I upgrade my plan later?',
        answer: 'Absolutely! Upgrade anytime. We\'ll prorate the difference and you\'ll get access to more features and dedicated staff.',
      },
    ],
  },
  {
    category: 'Team & Support',
    questions: [
      {
        question: 'Who will work on my account?',
        answer: 'You get your OWN dedicated team — not shared, not outsourced. Depending on your plan, you\'ll have a marketing specialist, VA, content creator, and dedicated account manager.',
      },
      {
        question: 'How do you ensure quality?',
        answer: 'We have daily standups, weekly reviews, and clear quality metrics. If anyone isn\'t meeting standards, we replace them at no extra cost.',
      },
      {
        question: 'What tools do you use?',
        answer: 'We use industry-leading tools: Google Analytics, SEMrush, Ahrefs, Canva Pro, HubSpot, GoHighLevel, Meta Business Suite, Google Ads — all included in your plan.',
      },
    ],
  },
  {
    category: 'International',
    questions: [
      {
        question: 'Do you work with international clients?',
        answer: 'Yes! We serve clients in 50+ countries. Our remote team model means we can work effectively across time zones.',
      },
      {
        question: 'How do we communicate?',
        answer: 'Depending on your plan, you get WhatsApp support, Slack, email, and scheduled video calls with your account manager.',
      },
      {
        question: 'How fast will I see results?',
        answer: 'Most clients see improvements in 30-60 days. Growth Engine guarantees 20% traffic increase in 90 days.',
      },
    ],
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
    <section className="section-padding relative">
      <div className="container-narrow">
        {/* Section Header */}
        <FadeUp className="text-center mb-12">
          <span className="text-[#1F7D53] text-sm font-medium uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            Common questions about working with us.
          </h2>
        </FadeUp>

        <div className="space-y-8">
          {faqs.map((category) => (
            <FadeUp key={category.category}>
              <div className="mb-4">
                <h3 className="font-display font-semibold text-text-primary text-lg mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.questions.map((faq, index) => {
                    const itemKey = `${category.category}-${index}`;
                    const isOpen = openItems.has(itemKey);

                    return (
                      <GlassCard key={itemKey} className="overflow-hidden" hover={false}>
                        <button
                          onClick={() => toggleItem(itemKey)}
                          className="w-full text-left p-4 flex items-start justify-between gap-4"
                        >
                          <span className="font-medium text-text-primary pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-text-muted flex-shrink-0 mt-0.5 transition-transform duration-300 ${
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
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 text-text-secondary text-sm leading-relaxed">
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
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
