'use client';

import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeUp, GlassCard } from '@/components/ui-dp/AnimatedElements';
import { useNavigation } from '@/lib/navigation';
import { SiteShell } from '@/components/layout/SiteShell';

const packages = [
  {
    name: 'Starter Rocket',
    price: '$399',
    originalPrice: '$808',
    period: '/mo',
    firstMonth: '$199',
    description: 'For Startups & Small Businesses',
    badge: '🟢',
    badgeText: 'Save 50%',
    highlighted: false,
    features: [
      { name: '8 SEO keywords + on-page optimization', included: true },
      { name: 'Social Media: 2 platforms (Facebook + Instagram)', included: true },
      { name: '8 designed posts/month', included: true },
      { name: 'Part-time Remote VA (20 hrs/week)', included: true },
      { name: 'Monthly analytics report', included: true },
      { name: 'WhatsApp direct support', included: true },
      { name: 'Full-time Marketing Specialist', included: false },
      { name: 'Bi-weekly strategy calls', included: false },
      { name: 'PPC management', included: false },
      { name: 'Blog content', included: false },
      { name: 'CRM setup', included: false },
    ],
    bonuses: [
      '🎁 Brand Kit — logo refresh + templates (Worth $299)',
      '🎁 $0 setup fee (others charge $200-$500)',
    ],
    guarantee: '30-Day Money-Back Guarantee',
  },
  {
    name: 'Growth Engine',
    price: '$999',
    originalPrice: '$4,199',
    period: '/mo',
    firstMonth: '$999',
    offer: '3-month signup = 4th month FREE',
    description: 'For Growing Businesses & E-Commerce',
    badge: '🔵',
    badgeText: '⭐ Most Popular — Save 76%',
    highlighted: true,
    features: [
      { name: '20 SEO keywords + full technical audit', included: true },
      { name: 'PPC: Google Ads + Meta Ads management', included: true },
      { name: 'Social Media: 4 platforms', included: true },
      { name: '16 posts + 4 reels/month', included: true },
      { name: '2 blog articles/month + 1 newsletter', included: true },
      { name: 'Full-time Marketing Specialist (40 hrs/week)', included: true },
      { name: 'Bi-weekly strategy calls', included: true },
      { name: 'Monthly competitor analysis report', included: true },
      { name: 'CRM setup (HubSpot/GoHighLevel)', included: true },
      { name: 'WhatsApp direct support', included: true },
    ],
    bonuses: [
      '🎁 Custom Landing Page (Worth $799)',
      '🎁 1-Hour Strategy Session (Worth $299)',
      '🎁 Refer a Friend = $200 OFF for both',
    ],
    guarantee: '20% traffic increase in 90 days or next month FREE',
  },
  {
    name: 'Domination Mode',
    price: '$2,499',
    originalPrice: '$10,699',
    period: '/mo',
    firstMonth: '$2,499',
    offer: '6-month signup = 2 months FREE',
    description: 'For Established Businesses & Agencies',
    badge: '🟡',
    badgeText: 'Save 77% — Best Value',
    highlighted: false,
    features: [
      { name: '40+ SEO keywords + link building + technical audits', included: true },
      { name: 'Multi-platform PPC (Google, Meta, TikTok, LinkedIn)', included: true },
      { name: 'Social Media: 5 platforms', included: true },
      { name: '24 posts + 8 reels + daily stories', included: true },
      { name: '4 blogs + 2 email campaigns + 1 lead magnet/month', included: true },
      { name: '2 Full-Time Remote Staff (1 Marketer + 1 VA)', included: true },
      { name: 'Weekly strategy calls with account manager', included: true },
      { name: 'CRO, A/B testing, funnel optimization', included: true },
      { name: 'Competitor intelligence spy reports', included: true },
      { name: 'White-label reports (for agencies)', included: true },
      { name: 'Priority Slack support + 4-hour response', included: true },
    ],
    bonuses: [
      '🎁 Complete Website Redesign (Worth $2,999)',
      '🎁 Marketing Funnel Build (Worth $1,499)',
      '🎁 Full-Day Strategy Sprint (Worth $1,999)',
      '🎁 Total Bonus Value: $6,497!',
      '🎁 VIP Referral: $500 credit per referral',
    ],
    guarantee: '3X ROI in 6 months or we work FREE until achieved',
  },
];

const faqs = [
  {
    question: 'Is there a setup fee?',
    answer: 'No! All packages include FREE setup and onboarding. Zero hidden fees.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. No long-term contracts. Cancel with 30-day notice.',
  },
  {
    question: 'How fast will I see results?',
    answer: 'Most clients see improvements in 30-60 days. Growth Engine guarantees 20% traffic increase in 90 days.',
  },
  {
    question: 'Who will work on my account?',
    answer: 'Your OWN dedicated team — not shared, not outsourced.',
  },
  {
    question: 'What if I\'m not satisfied?',
    answer: 'Every plan has a guarantee. Starter has 30-day money-back, Growth has performance guarantee, Domination has ROI guarantee.',
  },
  {
    question: 'Can I upgrade later?',
    answer: 'Absolutely! Upgrade anytime. We prorate the difference.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! We serve clients in 50+ countries.',
  },
  {
    question: 'What tools do you use?',
    answer: 'Google Analytics, SEMrush, Ahrefs, Canva Pro, HubSpot, GoHighLevel, Meta Business Suite, Google Ads — all included.',
  },
];

export default function PricingPage() {
  const { navigateTo } = useNavigation();

  return (
    <SiteShell>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block bg-red-700/10 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎁 LAUNCH SPECIAL: First month 50% OFF on any package!
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            Simple, Transparent Pricing 💰
          </h1>
          <p className="text-text-secondary text-xl mb-2">
            No hidden fees. No long-term contracts. Just results.
          </p>
          <p className="text-text-muted">
            All plans include marketing + dedicated remote staff.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <FadeUp key={pkg.name} delay={index * 0.1}>
              <GlassCard 
                className={`p-6 lg:p-8 h-full flex flex-col ${pkg.highlighted ? 'border-2 border-red-600 relative' : ''}`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-700 text-white text-sm font-medium rounded-full">
                    ⭐ Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{pkg.badge}</div>
                  <div className="inline-block bg-red-700/10 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {pkg.badgeText}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-text-muted line-through">{pkg.originalPrice}</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-red-600">{pkg.price}</span>
                    <span className="text-text-muted text-sm">{pkg.period}</span>
                  </div>
                  {pkg.firstMonth && (
                    <p className="text-sm text-text-muted mb-2">
                      First month: <span className="text-red-600 font-semibold">{pkg.firstMonth}</span>
                    </p>
                  )}
                  {pkg.offer && (
                    <p className="text-sm text-green-500 font-medium mb-2">
                      {pkg.offer}
                    </p>
                  )}
                  <p className="text-text-muted">{pkg.description}</p>
                </div>

                <div className="flex-1">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature.name} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-text-muted/50 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-text-primary text-sm' : 'text-text-muted/50 text-sm'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border-glass pt-4 mb-4">
                  <p className="text-xs text-text-muted mb-2">Bonuses included:</p>
                  <ul className="space-y-1">
                    {pkg.bonuses.map((bonus) => (
                      <li key={bonus} className="text-xs text-red-600">
                        {bonus}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface-glass rounded-lg p-3 mb-4 text-center">
                  <p className="text-xs text-text-muted">Guarantee:</p>
                  <p className="text-sm text-text-primary font-medium">{pkg.guarantee}</p>
                </div>

                <Button
                  onClick={() => navigateTo('free-audit')}
                  className={`w-full ${pkg.highlighted ? 'bg-red-700 hover:bg-red-600' : 'bg-surface-glass border border-border-glass hover:bg-red-700/10'}`}
                >
                  {pkg.highlighted ? 'Start Growing — Claim Your Free Month' : 'Get Started'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        {/* Launch Offers */}
        <FadeUp className="mb-20">
          <div className="bg-gradient-to-r from-red-700/20 to-red-500/20 border border-border-glass rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
              🚀 Launch Offers — Limited Time!
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl mb-2">⏰</div>
                <h3 className="font-semibold text-text-primary">First 50 Clients</h3>
                <p className="text-text-muted text-sm">Lifetime rate lock</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💚</div>
                <h3 className="font-semibold text-text-primary">First Month</h3>
                <p className="text-text-muted text-sm">50% OFF any package</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💳</div>
                <h3 className="font-semibold text-text-primary">Pay Annually</h3>
                <p className="text-text-muted text-sm">Get 3 months FREE</p>
              </div>
              <div>
                <div className="text-3xl mb-2">👥</div>
                <h3 className="font-semibold text-text-primary">Buddy Deal</h3>
                <p className="text-text-muted text-sm">Sign up with friend = 20% OFF for 3 months</p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard key={index} className="p-6" hover={false}>
                <h3 className="font-semibold text-text-primary mb-2">{faq.question}</h3>
                <p className="text-text-secondary text-sm">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
