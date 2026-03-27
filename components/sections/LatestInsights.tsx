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
    gradient: 'from-[#22C55E] to-black',
  },
  {
    slug: 'performance-marketing-roi',
    category: 'Marketing',
    title: 'Maximising ROI with Performance Marketing in Emerging Markets',
    excerpt: 'How data-driven campaign management delivers measurable growth for businesses expanding into new regions.',
    date: 'Mar 10, 2025',
    readTime: '5 min read',
    author: 'VCS Team',
    gradient: 'from-[#059669] to-black',
  },
  {
    slug: 'business-systems-automation',
    category: 'Operations',
    title: 'Automating Business Systems for Operational Excellence',
    excerpt: 'A practical guide to identifying bottlenecks and implementing automation that saves hundreds of hours per quarter.',
    date: 'Feb 28, 2025',
    readTime: '6 min read',
    author: 'VCS Team',
    gradient: 'from-[#22C55E]/70 to-black',
  },
  {
    slug: 'hiring-remote-talent',
    category: 'Recruitment',
    title: 'The Art of Hiring Top Remote Talent in Competitive Markets',
    excerpt: 'Proven sourcing strategies and interview frameworks that help you build world-class distributed teams.',
    date: 'Feb 20, 2025',
    readTime: '8 min read',
    author: 'VCS Team',
    gradient: 'from-[#4ADE80]/60 to-black',
  },
  {
    slug: 'client-reporting-frameworks',
    category: 'Reporting',
    title: 'Building Client-Facing Reporting Frameworks That Drive Retention',
    excerpt: 'Transform raw data into compelling dashboards that keep stakeholders informed and clients loyal.',
    date: 'Feb 12, 2025',
    readTime: '5 min read',
    author: 'VCS Team',
    gradient: 'from-[#059669]/80 to-black',
  },
  {
    slug: 'cost-efficiency-outsourcing',
    category: 'Strategy',
    title: 'Cost Efficiency Without Compromise: The Smart Outsourcing Playbook',
    excerpt: 'How to reduce operating costs by up to 70% while maintaining quality, culture, and accountability.',
    date: 'Feb 5, 2025',
    readTime: '6 min read',
    author: 'VCS Team',
    gradient: 'from-[#22C55E]/50 to-black',
  },
];

const categoryColors: Record<string, string> = {
  'Remote Work': 'bg-[#22C55E]/10 text-[#4ADE80] neon-text',
  Marketing: 'bg-black/[0.08] text-[#09090B]',
  Operations: 'bg-black/[0.08] text-[#09090B]',
  Recruitment: 'bg-black/[0.08] text-[#09090B]',
  Reporting: 'bg-[#22C55E]/10 text-[#4ADE80] neon-text',
  Strategy: 'bg-black/[0.08] text-[#09090B]',
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
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#09090B] sm:text-4xl">
                Latest Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#22C55E] transition hover:text-[#4ADE80] neon-text"
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
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.03] transition-[border-color,background-color] hover:border-[#22C55E]/30 hover:bg-black/[0.05]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} group-hover:scale-110 transition-transform duration-700 ease-out`} />
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-black/[0.06] group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 rotate-12 rounded-lg bg-black/[0.04] group-hover:rotate-[20deg] transition-transform duration-700" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-black/[0.03] blur-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
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
                    <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-[#09090B] transition-colors group-hover:text-[#22C55E]">
                      {post.title}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-black/60">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 border-t border-black/[0.06] pt-4 text-xs text-black/40">
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
