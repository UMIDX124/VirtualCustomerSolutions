import { SiteShell } from '@/components/layout/SiteShell';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing & Remote Workforce Services',
  description: 'Full-stack digital marketing, remote workforce, cloud solutions & web development. Custom plans from $399/mo. Free consultation available.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: '🎯',
      title: 'Digital Marketing',
      description: 'SEO, ads, social media, email — we run your campaigns and show you exactly what\'s working.',
      items: [
        { name: 'SEO', description: 'On-page, Off-page, Technical, Local SEO' },
        { name: 'PPC / Google Ads', description: 'Search, Display, Shopping, YouTube Ads' },
        { name: 'Social Media Marketing', description: 'Facebook, Instagram, TikTok, LinkedIn, Twitter/X' },
        { name: 'Content Marketing', description: 'Blogs, Articles, Infographics, Video Scripts' },
        { name: 'Email Marketing', description: 'Automation, Newsletters, Drip Campaigns' },
        { name: 'Meta / Facebook Ads', description: 'Campaign setup, creative, optimization' },
        { name: 'TikTok & YouTube Ads', description: 'Video ads, influencer collaborations' },
      ],
    },
    {
      icon: '👩‍💻',
      title: 'Remote Workforce',
      description: 'Dedicated remote team members who feel like part of your company.',
      items: [
        { name: 'Virtual Assistants', description: 'Admin, Data Entry, Research, Scheduling' },
        { name: 'Remote Marketing Specialists', description: 'Full-time marketers dedicated to your business' },
        { name: 'Customer Support Reps', description: 'Phone, Email, Chat support agents' },
        { name: 'Live Chat Support', description: '24/7 chat agents for your website' },
        { name: 'Bookkeeping & Accounting', description: 'Financial management and reporting' },
        { name: 'Sales Development Reps (SDRs)', description: 'Lead generation and appointment setting' },
        { name: 'Social Media Managers', description: 'Content creation and community management' },
        { name: 'Content Writers & Copywriters', description: 'Blogs, emails, ads, landing pages' },
      ],
    },
    {
      icon: '🌐',
      title: 'Web Solutions',
      description: 'Websites, landing pages, e-commerce stores, and apps — built to look good and actually work.',
      items: [
        { name: 'Website Design & Development', description: 'Custom websites from scratch' },
        { name: 'Landing Page Design', description: 'High-converting landing pages' },
        { name: 'E-Commerce Stores', description: 'Shopify, WooCommerce, BigCommerce setup' },
        { name: 'Sales Funnel Design', description: 'Complete funnel development' },
        { name: 'Website Maintenance', description: 'Ongoing support and updates' },
        { name: 'UI/UX Design', description: 'User experience optimization' },
        { name: 'Custom Software Development', description: 'Tailored software solutions for your business' },
        { name: 'Mobile Application Development', description: 'iOS and Android app development' },
      ],
    },
    {
      icon: '📈',
      title: 'Business Growth',
      description: 'Lead gen, CRO, analytics, competitor research — the stuff that moves the needle.',
      items: [
        { name: 'Lead Generation Campaigns', description: 'Multi-channel lead capture' },
        { name: 'Conversion Rate Optimization (CRO)', description: 'A/B testing and optimization' },
        { name: 'A/B Testing & Analytics', description: 'Data-backed decision making' },
        { name: 'Competitor Analysis', description: 'Intelligence and benchmarking' },
        { name: 'Brand Strategy & Positioning', description: 'Market differentiation' },
        { name: 'Business Process Consulting', description: 'Operational efficiency' },
        { name: 'IT Consulting & Strategy', description: 'Technology alignment with business goals' },
        { name: 'Digital Transformation', description: 'Modernize your business with smart tech' },
      ],
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Secure cloud infrastructure and management.',
      items: [
        { name: 'Cloud Migration', description: 'Move to cloud with zero downtime' },
        { name: 'Cloud Infrastructure Setup', description: 'AWS, Azure, Google Cloud configurations' },
        { name: 'Cloud Security', description: 'Protect your cloud assets' },
        { name: 'Cloud Maintenance', description: 'Ongoing monitoring and optimization' },
      ],
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Protect your business from digital threats.',
      items: [
        { name: 'Security Assessment', description: 'Identify vulnerabilities in your systems' },
        { name: 'Threat Protection', description: 'Advanced firewall and antivirus solutions' },
        { name: 'Data Encryption', description: 'Secure your sensitive data' },
        { name: 'Compliance & Audit', description: 'Meet industry security standards' },
      ],
    },
  ];

  return (
    <SiteShell>
      <div className="pt-32 pb-20">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Our Services
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              Complete digital marketing and remote workforce solutions — all in one affordable package.
              Save 50-75% vs hiring separately.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-20">
            {services.map((category, index) => (
              <div key={category.title} id={category.title.toLowerCase().replace(/\s+/g, '-')} className="grid lg:grid-cols-2 gap-12 items-start">
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
                    {category.title}
                  </h2>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#059669] mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-text-primary">{item.name}</span>
                          <span className="text-text-muted"> — {item.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
                  <h3 className="font-display text-xl font-bold text-text-primary mb-4">
                    Get Started with {category.title}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Want to see if this is a good fit? Book a free call and we'll walk you through what we can do for your specific situation.
                  </p>
                  <a
                    href="/free-audit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#4ADE80] text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Get Started →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-text-secondary text-lg mb-6">
              Get a free digital audit and we'll recommend the best package for your business.
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
