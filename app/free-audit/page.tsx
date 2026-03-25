'use client';

import { useState } from 'react';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GlassCard, FadeUp } from '@/components/ui-dp/AnimatedElements';

const auditItems = [
  { icon: '📊', title: 'Complete SEO Analysis', description: 'Full technical and on-page SEO audit' },
  { icon: '📱', title: 'Social Media Audit', description: 'Analysis of your social presence' },
  { icon: '💰', title: 'Ad Spend Analysis', description: 'Where your money is going' },
  { icon: '🔍', title: 'Competitor Intelligence', description: 'What your competitors are doing' },
  { icon: '📋', title: 'Custom 90-Day Growth Plan', description: 'Actionable roadmap for growth' },
];

const budgetOptions = [
  { value: 'under-1k', label: 'Under $1,000' },
  { value: '1k-5k', label: '$1,000 - $5,000' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k+', label: '$10,000+' },
];

const challengeOptions = [
  { value: 'more-traffic', label: 'More Traffic' },
  { value: 'more-leads', label: 'More Leads' },
  { value: 'better-roi', label: 'Better ROI' },
  { value: 'need-staff', label: 'Need Remote Staff' },
  { value: 'all-above', label: 'All of the above' },
];

export default function FreeAuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: '',
    challenge: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20">
        <div className="container-narrow">
          <GlassCard className="p-12 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="font-display text-3xl font-bold text-text-primary mb-4">
              Request Received!
            </h1>
            <p className="text-text-secondary text-lg mb-6">
              We'll analyze your digital presence and send your free audit within 24 hours.
            </p>
            <p className="text-text-muted mb-8">
              Check your email for updates. In the meantime, feel free to explore our services or pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="bg-[#41431B] hover:bg-[#AEB784] text-white font-semibold px-6 py-3 rounded-lg transition-all">
                View Our Services
              </a>
              <a href="/pricing" className="bg-surface-glass border border-border-glass hover:bg-[#41431B]/10 text-text-primary font-semibold px-6 py-3 rounded-lg transition-all">
                View Pricing
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div>
            <FadeUp>
              <div className="inline-block bg-[#41431B]/10 text-[#AEB784] px-4 py-2 rounded-full text-sm font-medium mb-6">
                🎁 FREE — No Credit Card Required
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Get a FREE $499 Digital Audit
              </h1>
              <p className="text-text-secondary text-xl mb-8">
                See Exactly Where You're Losing Money. In 24 hours, we'll analyze your entire digital presence and give you a custom growth plan.
              </p>
            </FadeUp>

            {/* What They Get */}
            <div className="space-y-4 mb-8">
              <h2 className="font-display text-xl font-bold text-text-primary">
                What You'll Get:
              </h2>
              {auditItems.map((item, index) => (
                <FadeUp key={item.title} delay={index * 0.1}>
                  <GlassCard className="p-4 flex gap-4" hover={false}>
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-text-primary">{item.title}</h3>
                      <p className="text-text-muted text-sm">{item.description}</p>
                    </div>
                  </GlassCard>
                </FadeUp>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <Check className="w-4 h-4 text-green-500" />
                100% Free — No credit card required
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <Check className="w-4 h-4 text-green-500" />
                No obligation — No sales pitch
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <Check className="w-4 h-4 text-green-500" />
                Delivered in 24 hours
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <Check className="w-4 h-4 text-green-500" />
                Confidential — We never share your data
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <FadeUp delay={0.2}>
            <GlassCard className="p-8">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
                Get Your Free Audit
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-text-secondary text-sm mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-surface-glass border-border-glass"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-surface-glass border-border-glass"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">
                    Website URL *
                  </label>
                  <Input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    required
                    className="bg-surface-glass border-border-glass"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">
                    Monthly Marketing Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg bg-surface-glass border border-border-glass text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-[#AEB784]"
                  >
                    <option value="">Select your budget</option>
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">
                    Biggest Challenge
                  </label>
                  <select
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg bg-surface-glass border border-border-glass text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-[#AEB784]"
                  >
                    <option value="">Select your challenge</option>
                    {challengeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#41431B] hover:bg-[#AEB784] text-white font-semibold py-4 text-lg mt-4"
                >
                  {isLoading ? 'Processing...' : '🚀 Get My FREE Audit'}
                  {!isLoading && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>
              </form>
            </GlassCard>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
