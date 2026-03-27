'use client';

import { useState, useRef, useEffect } from 'react';
import { Check, X, ArrowRight, Rocket, Zap, Crown, ChevronDown, Minus } from 'lucide-react';
import { useNavigation } from '@/lib/navigation';
import { SiteShell } from '@/components/layout/SiteShell';

/* ─── Data ──────────────────────────────────────────────────────────────── */

const plans = [
  {
    id: 'launch',
    name: 'Launch Pack',
    subtitle: 'For Startups & Small Businesses',
    price: 399,
    original: 799,
    firstMonth: 199,
    offer: null as string | null,
    badge: 'Save 50%',
    Icon: Rocket,
    color: '#4ADE80',
    glow: 'rgba(74,222,128,0.18)',
    border: 'rgba(74,222,128,0.2)',
    popular: false,
    cta: 'Get Started',
    guarantee: '30-Day Money-Back',
    features: [
      { label: '8 SEO keywords + on-page optimization', ok: true },
      { label: 'Social Media: 2 platforms (FB + IG)', ok: true },
      { label: '8 designed posts / month', ok: true },
      { label: 'Part-time Remote VA (20 hrs/wk)', ok: true },
      { label: 'Monthly analytics report', ok: true },
      { label: 'WhatsApp direct support', ok: true },
      { label: 'PPC / Google Ads management', ok: false },
      { label: 'Blog content writing', ok: false },
      { label: 'CRM setup', ok: false },
      { label: 'Bi-weekly strategy calls', ok: false },
    ],
    bonuses: ['Brand Kit + templates (worth $299)', '$0 setup fee'],
  },
  {
    id: 'growth',
    name: 'Growth Suite',
    subtitle: 'For Growing Businesses & E-Commerce',
    price: 999,
    original: 3999,
    firstMonth: 999,
    offer: '3 months → 4th month FREE',
    badge: '⭐ Most Popular',
    Icon: Zap,
    color: '#22C55E',
    glow: 'rgba(34,197,94,0.28)',
    border: 'rgba(34,197,94,0.45)',
    popular: true,
    cta: 'Start Growing',
    guarantee: '20% traffic boost in 90 days',
    features: [
      { label: '20 SEO keywords + full technical audit', ok: true },
      { label: 'PPC: Google Ads + Meta Ads management', ok: true },
      { label: 'Social Media: 4 platforms', ok: true },
      { label: '16 posts + 4 reels / month', ok: true },
      { label: '2 blog articles + 1 newsletter/mo', ok: true },
      { label: 'Full-time Marketing Specialist', ok: true },
      { label: 'Bi-weekly strategy calls', ok: true },
      { label: 'Monthly competitor analysis report', ok: true },
      { label: 'CRM setup (HubSpot / GoHighLevel)', ok: true },
      { label: 'WhatsApp priority support', ok: true },
    ],
    bonuses: ['Custom Landing Page ($799)', '1-Hr Strategy Session ($299)', 'Refer a friend = $200 OFF both'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Pro',
    subtitle: 'For Established Businesses & Agencies',
    price: 2499,
    original: 9999,
    firstMonth: 2499,
    offer: '6 months → 2 months FREE',
    badge: 'Best Value',
    Icon: Crown,
    color: '#A78BFA',
    glow: 'rgba(167,139,250,0.18)',
    border: 'rgba(167,139,250,0.25)',
    popular: false,
    cta: 'Go Enterprise',
    guarantee: '3× ROI in 6 months or work FREE',
    features: [
      { label: '40+ SEO keywords + link building', ok: true },
      { label: 'Multi-platform PPC (Google, Meta, TikTok, LinkedIn)', ok: true },
      { label: 'Social Media: 5 platforms', ok: true },
      { label: '24 posts + 8 reels + daily stories', ok: true },
      { label: '4 blogs + 2 email campaigns/mo', ok: true },
      { label: '2 Full-Time Remote Staff (Mktr + VA)', ok: true },
      { label: 'Weekly strategy calls + account mgr', ok: true },
      { label: 'CRO, A/B testing, funnel optimization', ok: true },
      { label: 'Competitor intelligence reports', ok: true },
      { label: 'White-label reports + priority SLA', ok: true },
    ],
    bonuses: ['Full Website Redesign ($2,999)', 'Marketing Funnel ($1,499)', 'Strategy Sprint ($1,999)', 'Total bonus value: $6,497'],
  },
];

const faqs = [
  { q: 'Is there a setup fee?', a: 'No — all packages include free setup and onboarding. Zero hidden charges.' },
  { q: 'Can I cancel anytime?', a: 'Yes. No long-term contracts. Cancel with 30-day notice, no questions asked.' },
  { q: 'How fast will I see results?', a: 'Most clients see measurable improvements in 30–60 days. Growth Suite guarantees 20% traffic increase in 90 days.' },
  { q: 'Who works on my account?', a: 'Your own dedicated team — not shared, not outsourced. People who work only for you.' },
  { q: "What if I'm not satisfied?", a: 'Every plan has a guarantee: Launch gets 30-day money-back, Growth gets performance guarantee, Enterprise gets ROI guarantee.' },
  { q: 'Can I upgrade later?', a: 'Absolutely. Upgrade anytime — we prorate the difference so you never overpay.' },
  { q: 'Do you work internationally?', a: 'Yes — we serve clients in 50+ countries across every major time zone.' },
];

/* ─── Hooks ─────────────────────────────────────────────────────────────── */

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    },
  };
}

/* ─── PlanCard ──────────────────────────────────────────────────────────── */

function PlanCard({ plan, index, onCta }: { plan: typeof plans[0]; index: number; onCta: () => void }) {
  const reveal = useReveal(index * 100);

  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      className={`relative flex flex-col rounded-2xl overflow-hidden ${plan.popular ? 'md:-mt-5 md:mb-0' : ''}`}
    >
      {/* Glow border */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{
          border: `1px solid ${plan.border}`,
          boxShadow: plan.popular
            ? `0 0 0 1px ${plan.border}, 0 0 40px ${plan.glow}, 0 20px 60px ${plan.glow}`
            : `0 0 20px ${plan.glow}`,
        }}
      />

      {/* Popular top bar */}
      {plan.popular && (
        <div
          className="relative z-20 py-2.5 text-center text-[11px] font-black tracking-widest"
          style={{ background: plan.color, color: '#09090B' }}
        >
          ⭐ MOST POPULAR
        </div>
      )}

      {/* Card body */}
      <div
        className="flex flex-col flex-1 p-7"
        style={{
          background: plan.popular
            ? `linear-gradient(160deg, rgba(34,197,94,0.07) 0%, rgba(255,255,255,0.97) 60%)`
            : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(24px)',
        }}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}25` }}
            >
              <plan.Icon className="w-4 h-4" style={{ color: plan.color }} />
            </div>
            <span
              className="text-[11px] font-bold px-2.5 py-1 rounded-full"
              style={{ color: plan.color, background: `${plan.color}12` }}
            >
              {plan.badge}
            </span>
          </div>
          <h3 className="font-display text-2xl font-black text-[#09090B] mb-1">{plan.name}</h3>
          <p className="text-black/40 text-xs">{plan.subtitle}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="text-black/30 text-sm line-through mb-0.5">
            ${plan.original.toLocaleString()}/mo
          </div>
          <div className="flex items-baseline gap-1.5 mb-1">
            <span className="font-black text-5xl leading-none" style={{ color: plan.color }}>
              ${plan.price.toLocaleString()}
            </span>
            <span className="text-black/40 text-sm">/mo</span>
          </div>
          {plan.firstMonth !== plan.price && (
            <p className="text-xs text-black/40">
              First month:{' '}
              <span className="font-semibold" style={{ color: plan.color }}>
                ${plan.firstMonth}
              </span>
            </p>
          )}
          {plan.offer && (
            <div
              className="mt-2 text-xs font-semibold px-2.5 py-1 rounded-lg inline-block"
              style={{ color: plan.color, background: `${plan.color}10` }}
            >
              {plan.offer}
            </div>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={onCta}
          className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] mb-7"
          style={{
            background: plan.popular ? plan.color : `${plan.color}10`,
            color: plan.popular ? '#09090B' : plan.color,
            border: `1px solid ${plan.popular ? plan.color : plan.color + '30'}`,
            boxShadow: plan.popular ? `0 4px 20px ${plan.glow}` : 'none',
          }}
        >
          {plan.cta}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: `${plan.color}15` }} />

        {/* Features */}
        <ul className="space-y-2.5 flex-1 mb-6">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              {f.ok ? (
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
              ) : (
                <Minus className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/15" />
              )}
              <span className={`text-xs leading-relaxed ${f.ok ? 'text-black/70' : 'text-black/25 line-through'}`}>
                {f.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Bonuses */}
        <div
          className="rounded-xl p-4 mb-4"
          style={{ background: `${plan.color}07`, border: `1px solid ${plan.color}15` }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2.5" style={{ color: plan.color }}>
            🎁 Included Bonuses
          </p>
          <ul className="space-y-1.5">
            {plan.bonuses.map((b, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-black/40">
                <span style={{ color: plan.color }} className="flex-shrink-0">›</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Guarantee */}
        <p className="text-[11px] text-black/30 flex items-center gap-1.5">
          <span>🛡️</span> {plan.guarantee}
        </p>
      </div>
    </div>
  );
}

/* ─── FaqItem ───────────────────────────────────────────────────────────── */

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  const reveal = useReveal(i * 55);

  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      className="border-b border-black/6 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left gap-4 group"
      >
        <span className="text-black/75 text-sm font-medium group-hover:text-[#09090B] transition-colors">
          {q}
        </span>
        <ChevronDown
          className="w-4 h-4 text-black/30 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '150px' : '0' }}
      >
        <p className="text-black/45 text-sm pb-5 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function PricingPage() {
  const { navigateTo } = useNavigation();

  return (
    <SiteShell>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-20 text-center px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34,197,94,0.12) 1px, transparent 0)',
            backgroundSize: '44px 44px',
            opacity: 0.4,
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(34,197,94,0.12) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide mb-7"
            style={{
              borderColor: 'rgba(34,197,94,0.25)',
              background: 'rgba(34,197,94,0.08)',
              color: '#4ADE80',
              boxShadow: '0 0 20px rgba(34,197,94,0.1)',
            }}
          >
            🎁 LAUNCH SPECIAL — First month 50% OFF
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-[#09090B] mb-5 leading-[1.05]">
            Pricing that pays
            <br />
            <span style={{ color: '#22C55E', textShadow: '0 0 40px rgba(34,197,94,0.35)' }}>
              for itself.
            </span>
          </h1>
          <p className="text-black/50 text-lg mb-3">
            Marketing + dedicated remote staff — all in one plan.
          </p>
          <p className="text-black/30 text-sm">
            No hidden fees · No long-term contracts · Results guaranteed
          </p>
        </div>
      </section>

      {/* ── Cards ────────────────────────────────────────────────────── */}
      <section className="relative pb-28 px-4">
        {/* Spline BG */}
        <div className="absolute inset-0 z-0 overflow-hidden mx-2 rounded-3xl">
          <iframe
            src="https://my.spline.design/3duipricing-eHOz23ohPwRwYNHu59vcCg2z/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none', opacity: 0.3 }}
            loading="lazy"
            title="3D pricing background"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.7) 100%)' }} />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-start">
            {plans.map((plan, i) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                index={i}
                onCta={() => navigateTo('free-audit')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <section className="border-y border-black/5 py-10">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: '300+', l: 'Clients served' },
            { n: '50+', l: 'Countries' },
            { n: '3×', l: 'Average ROI' },
            { n: '95%', l: 'Retention rate' },
          ].map(({ n, l }) => (
            <div key={l}>
              <div className="text-3xl font-black mb-1" style={{ color: '#22C55E' }}>{n}</div>
              <div className="text-black/35 text-xs uppercase tracking-wider">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Launch Offers ────────────────────────────────────────────── */}
      <section className="container-wide py-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-black text-[#09090B] mb-2">
            Limited-time launch offers
          </h2>
          <p className="text-black/35 text-sm">First 50 clients only</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '⏰', title: 'Rate Lock', desc: 'Lifetime pricing for first 50 clients' },
            { icon: '💚', title: 'First Month', desc: '50% OFF any package' },
            { icon: '💳', title: 'Annual Plan', desc: '3 months FREE' },
            { icon: '👥', title: 'Buddy Deal', desc: '20% OFF for 3 months when you refer' },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-5 rounded-2xl text-center border border-black/6 transition-all duration-200 hover:border-[#22C55E]/20 hover:bg-[#22C55E]/3"
              style={{ background: 'rgba(0,0,0,0.02)' }}
            >
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-[#09090B] text-sm font-semibold mb-1">{title}</div>
              <div className="text-black/35 text-xs leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="container-wide pb-24 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-black text-[#09090B] mb-2">
            Frequently asked
          </h2>
          <p className="text-black/35 text-sm">Everything you need to know</p>
        </div>
        <div
          className="rounded-2xl px-6 border border-black/6"
          style={{ background: 'rgba(0,0,0,0.02)' }}
        >
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} i={i} />
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="container-wide pb-28 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#09090B] mb-4 leading-tight">
            Ready to start growing?
          </h2>
          <p className="text-black/35 text-sm mb-8">
            Book a free audit — no commitment, just a clear growth plan for your business.
          </p>
          <button
            onClick={() => navigateTo('free-audit')}
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: '#22C55E',
              color: '#09090B',
              boxShadow: '0 0 30px rgba(34,197,94,0.3), 0 4px 20px rgba(34,197,94,0.2)',
            }}
          >
            Get My Free Audit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="text-black/25 text-xs mt-4">No credit card · Cancel anytime · Results guaranteed</p>
        </div>
      </section>

    </SiteShell>
  );
}
