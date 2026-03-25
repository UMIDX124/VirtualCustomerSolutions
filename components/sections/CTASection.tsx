'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigation } from '@/lib/navigation';

const auditIncludes = [
  'Free Digital Audit (Worth $499)',
  'No Obligation',
  'Custom Growth Plan in 24hrs',
  'No Sales Pitch',
  '100% Confidential',
];

export function CTASection() {
  const { navigateTo } = useNavigation();

  return (
    <section className="section-padding bg-gradient-hero">
      <div className="container-wide">
        <div className="card-accent p-8 md:p-12 text-center max-w-3xl mx-auto glow-green">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--green-primary)]/10 mb-6">
            <svg className="w-8 h-8 text-[var(--green-primary)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow? Let's Talk. 🚀
          </h2>

          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Get your custom growth plan in 24 hours. No obligation, no sales pressure.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {auditIncludes.map((item) => (
              <div key={item} className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <CheckCircle className="w-4 h-4 text-[var(--green-primary)]" />
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={() => navigateTo('free-audit')}
            className="btn-primary text-lg"
          >
            🎯 CLAIM YOUR FREE AUDIT NOW
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>

          <p className="text-[var(--text-muted)] text-sm mt-4">
            Limited spots available — First 50 clients get lifetime rate lock!
          </p>
        </div>
      </div>
    </section>
  );
}