'use client';

import { ArrowRight, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { RevealOnScroll, StaggerChildren, StaggerItem } from '@/components/animations/ScrollAnimations';

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  gradient: string;
}

const posts: BlogPost[] = [
  {
    slug: 'why-remote-teams-outperform-local-hires',
    category: 'Remote Work',
    title: 'What We Learned Managing 200+ Remote Teams',
    excerpt: 'After years of building remote teams for clients, here are the patterns that keep showing up in the ones that actually work.',
    date: 'Mar 18, 2026',
    readTime: '7 min read',
    author: 'VCS Team',
    gradient: 'from-[#22C55E] to-black',
  },
  {
    slug: 'google-ads-vs-meta-ads-which-drives-better-roi',
    category: 'Marketing',
    title: 'Why Most Google Ads Campaigns Waste Money (And How to Fix Yours)',
    excerpt: 'We audited 50 ad accounts last quarter. Here\'s what the profitable ones had in common.',
    date: 'Mar 10, 2026',
    readTime: '5 min read',
    author: 'VCS Team',
    gradient: 'from-[#059669] to-black',
  },
  {
    slug: 'automation-tools-every-growing-business-needs',
    category: 'Operations',
    title: 'The 5 Tasks You Should Have Automated Yesterday',
    excerpt: 'Simple automations that save our clients 10-20 hours a week. Most take under an hour to set up.',
    date: 'Feb 28, 2026',
    readTime: '6 min read',
    author: 'VCS Team',
    gradient: 'from-[#22C55E]/70 to-black',
  },
  {
    slug: 'hiring-remote-talent',
    category: 'Recruitment',
    title: 'Stop Hiring on Fiverr: How to Find Remote Staff That Stick Around',
    excerpt: 'Freelance marketplaces are a gamble. Here\'s how we source, vet, and retain dedicated remote workers.',
    date: 'Feb 20, 2026',
    readTime: '8 min read',
    author: 'VCS Team',
    gradient: 'from-[#4ADE80]/60 to-black',
  },
  {
    slug: 'client-reporting-frameworks',
    category: 'Reporting',
    title: 'Your Clients Don\'t Read Your Reports. Here\'s How to Change That.',
    excerpt: 'We rebuilt our reporting from scratch after a client told us they never open them. What we changed made all the difference.',
    date: 'Feb 12, 2026',
    readTime: '5 min read',
    author: 'VCS Team',
    gradient: 'from-[#059669]/80 to-black',
  },
  {
    slug: 'cost-efficiency-outsourcing',
    category: 'Strategy',
    title: 'How One Agency Cut Their Overhead by 60% Without Firing Anyone',
    excerpt: 'A real case study of how we helped a 12-person agency restructure with remote staff and come out stronger.',
    date: 'Feb 5, 2026',
    readTime: '6 min read',
    author: 'VCS Team',
    gradient: 'from-[#22C55E]/50 to-black',
  },
];

const categoryColors: Record<string, string> = {
  'Remote Work': 'bg-[#22C55E]/15 text-[#4ADE80] border border-[#22C55E]/20',
  Marketing: 'bg-[#059669]/15 text-[#34D399] border border-[#059669]/20',
  Operations: 'bg-[#22C55E]/10 text-[#4ADE80] border border-[#22C55E]/15',
  Recruitment: 'bg-[#059669]/10 text-[#34D399] border border-[#059669]/15',
  Reporting: 'bg-[#22C55E]/15 text-[#4ADE80] border border-[#22C55E]/20',
  Strategy: 'bg-[#059669]/15 text-[#34D399] border border-[#059669]/20',
};

export function LatestInsights() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <RevealOnScroll variant="fade-up" duration={0.8}>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#22C55E] neon-text">
                Blog
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
                Latest Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#22C55E] transition hover:text-[#4ADE80] neon-text min-h-[44px]"
            >
              View All Posts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </RevealOnScroll>

        <StaggerChildren staggerDelay={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <StaggerItem key={post.slug}>
              <RevealOnScroll variant="blur-in" duration={0.8}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] transition-[border-color,background-color] hover:border-[#22C55E]/30 hover:bg-white/[0.05]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} group-hover:scale-110 transition-transform duration-700 ease-out`} />
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/[0.06] group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 rotate-12 rounded-lg bg-white/[0.04] group-hover:rotate-[20deg] transition-transform duration-700" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/[0.03] blur-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${
                          categoryColors[post.category] ?? 'bg-[#22C55E]/10 text-[#4ADE80]'
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-[#F5F5F5] transition-colors group-hover:text-[#22C55E]">
                      {post.title}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-white/60">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/[0.06] pt-4 text-xs text-white/40">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
