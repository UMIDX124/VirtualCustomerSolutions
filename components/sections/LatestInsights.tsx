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
    slug: 'scaling-remote-teams-2025',
    category: 'Remote Work',
    title: 'Scaling Remote Teams: Lessons from 200+ Engagements',
    excerpt: 'Discover the frameworks and processes that help distributed teams operate at peak efficiency across multiple time zones.',
    date: 'Mar 18, 2025',
    readTime: '7 min read',
    author: 'VCS Team',
    gradient: 'from-[#22C55E] to-[#1E293B]',
  },
  {
    slug: 'performance-marketing-roi',
    category: 'Marketing',
    title: 'Maximising ROI with Performance Marketing in Emerging Markets',
    excerpt: 'How data-driven campaign management delivers measurable growth for businesses expanding into new regions.',
    date: 'Mar 10, 2025',
    readTime: '5 min read',
    author: 'VCS Team',
    gradient: 'from-emerald-600 to-[#1E293B]',
  },
  {
    slug: 'business-systems-automation',
    category: 'Operations',
    title: 'Automating Business Systems for Operational Excellence',
    excerpt: 'A practical guide to identifying bottlenecks and implementing automation that saves hundreds of hours per quarter.',
    date: 'Feb 28, 2025',
    readTime: '6 min read',
    author: 'VCS Team',
    gradient: 'from-amber-600 to-[#1E293B]',
  },
  {
    slug: 'hiring-remote-talent',
    category: 'Recruitment',
    title: 'The Art of Hiring Top Remote Talent in Competitive Markets',
    excerpt: 'Proven sourcing strategies and interview frameworks that help you build world-class distributed teams.',
    date: 'Feb 20, 2025',
    readTime: '8 min read',
    author: 'VCS Team',
    gradient: 'from-violet-600 to-[#1E293B]',
  },
  {
    slug: 'client-reporting-frameworks',
    category: 'Reporting',
    title: 'Building Client-Facing Reporting Frameworks That Drive Retention',
    excerpt: 'Transform raw data into compelling dashboards that keep stakeholders informed and clients loyal.',
    date: 'Feb 12, 2025',
    readTime: '5 min read',
    author: 'VCS Team',
    gradient: 'from-cyan-600 to-[#1E293B]',
  },
  {
    slug: 'cost-efficiency-outsourcing',
    category: 'Strategy',
    title: 'Cost Efficiency Without Compromise: The Smart Outsourcing Playbook',
    excerpt: 'How to reduce operating costs by up to 70% while maintaining quality, culture, and accountability.',
    date: 'Feb 5, 2025',
    readTime: '6 min read',
    author: 'VCS Team',
    gradient: 'from-rose-600 to-[#1E293B]',
  },
];

const categoryColors: Record<string, string> = {
  'Remote Work': 'bg-[#22C55E]/10 text-[#4ADE80]',
  Marketing: 'bg-emerald-500/10 text-emerald-400',
  Operations: 'bg-amber-500/10 text-amber-400',
  Recruitment: 'bg-violet-500/10 text-violet-400',
  Reporting: 'bg-cyan-500/10 text-cyan-400',
  Strategy: 'bg-rose-500/10 text-rose-400',
};

export function LatestInsights() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <RevealOnScroll variant="fade-up" duration={0.8}>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#22C55E]">
                Blog
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
                Latest Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#22C55E] transition hover:text-[#4ADE80]"
            >
              View All Posts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </RevealOnScroll>

        <StaggerChildren staggerDelay={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <RevealOnScroll variant="blur-in" duration={0.8}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#1E293B]/50 transition-[border-color,background-color] hover:border-[#22C55E]/30 hover:bg-[#1E293B]/70"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} group-hover:scale-110 transition-transform duration-700 ease-out`} />
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/[0.06] group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 rotate-12 rounded-lg bg-white/[0.04] group-hover:rotate-[20deg] transition-transform duration-700" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/[0.03] blur-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent" />
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
                    <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-[#F8FAFC] transition-colors group-hover:text-[#22C55E]">
                      {post.title}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-[#94A3B8]">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/[0.06] pt-4 text-xs text-[#64748B]">
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
