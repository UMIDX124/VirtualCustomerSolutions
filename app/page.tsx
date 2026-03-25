import { SiteShell } from '@/components/layout/SiteShell';
import { HeroSection } from '@/components/sections/HeroSection';
import { PillarsSection } from '@/components/sections/PillarsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <PillarsSection />
      
      {/* Stats Section */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '500+', label: 'Clients Served' },
              { value: '$10M+', label: 'Revenue Generated' },
              { value: '50+', label: 'Countries' },
              { value: '98%', label: 'Retention Rate' },
            ].map((stat, i) => (
              <div key={i} className="card-accent p-8 text-center glow-green-sm">
                <div className="text-4xl font-bold text-gradient-green mb-2">{stat.value}</div>
                <div className="text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-[var(--bg-secondary)]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="badge mb-4">Why VCS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Smart Choice for <span className="text-gradient-green">Growth</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              We combine premium digital marketing with dedicated remote talent — a unique offering that saves you 50-75%.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Marketing + Remote Staff', desc: 'One package, two powerful solutions', icon: '🎯' },
              { title: 'Save 50-75%', desc: 'Get both services at a fraction of the cost', icon: '💰' },
              { title: 'Dedicated Team', desc: 'Your own staff — not shared, not outsourced', icon: '👥' },
              { title: 'Performance Guarantees', desc: 'We put our money where our mouth is', icon: '✅' },
              { title: 'No Long Contracts', desc: 'Month-to-month, cancel anytime', icon: '🔓' },
              { title: '24/7 Support', desc: 'Round-the-clock assistance when you need it', icon: '🌍' },
            ].map((item, i) => (
              <div key={i} className="card-accent p-6 hover:glow-green-sm transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="badge-gold mb-4">Client Results</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Businesses <span className="text-gradient-gold">Worldwide</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { quote: "We were paying $8,000/month to two companies. VCS gave us BETTER results for $999/month. Unreal.", author: 'Sarah M.', company: 'E-Commerce Owner', location: 'USA' },
              { quote: "Their remote marketing specialist feels like part of our team. Best decision we made this year.", author: 'James R.', company: 'SaaS Founder', location: 'UK' },
              { quote: "We got 3X ROI in just 4 months. The Domination Mode package is worth every penny.", author: 'Ahmed K.', company: 'Agency Owner', location: 'Dubai' },
              { quote: "The free website redesign alone was worth more than what we pay monthly. Incredible value.", author: 'Lisa T.', company: 'Real Estate Agent', location: 'Canada' },
            ].map((t, i) => (
              <div key={i} className="card-accent p-8">
                <p className="text-[var(--text-secondary)] mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--green-primary)] flex items-center justify-center text-black font-bold">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-medium">{t.author}</div>
                    <div className="text-sm text-[var(--text-muted)]">{t.company}, {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pakistan Pride Section */}
      <section className="section-padding bg-[var(--bg-secondary)]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="badge mb-4">Made in Pakistan</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pakistan's Finest. The World's <span className="text-gradient-green">Choice</span>.
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A world-class company built in Pakistan, serving global clients with premium digital solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-accent p-8 text-center">
              <div className="text-5xl mb-4">🇵🇰</div>
              <h3 className="text-xl font-bold mb-2">Pakistani Talent</h3>
              <p className="text-[var(--text-secondary)]">World-class professionals from Pakistan making global impact</p>
            </div>
            <div className="card-accent p-8 text-center glow-green">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-[var(--text-secondary)]">Silicon Valley-level work at a fraction of the cost</p>
            </div>
            <div className="card-accent p-8 text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-[var(--text-secondary)]">Serving clients across 50+ countries worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="badge mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common <span className="text-gradient-green">Questions</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: "What's included in digital marketing?", a: "SEO, PPC, social media, content marketing, email campaigns, and analytics — all in one package." },
              { q: "How does remote workforce work?", a: "You get dedicated remote staff — VAs, marketing specialists, support — who work exclusively for your business." },
              { q: "Are there long-term contracts?", a: "No! All plans are month-to-month. Cancel anytime with 30-day notice." },
              { q: "How fast will I see results?", a: "Most clients see improvements in 30-60 days. We guarantee visible results or your money back." },
            ].map((faq, i) => (
              <details key={i} className="faq-item group">
                <summary className="faq-question">
                  {faq.q}
                  <svg className="w-5 h-5 text-[var(--text-muted)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="faq-answer">
                  <p className="text-[var(--text-secondary)]">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
