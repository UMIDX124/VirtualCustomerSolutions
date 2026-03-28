import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

import { SiteShell } from '@/components/layout/SiteShell';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import { BlogListClient } from './BlogListClient';

export const metadata: Metadata = {
  title: 'Blog | Virtual Customer Solution',
  description:
    'Practical tips on marketing, remote teams, and growing your business. Written by our team based on what we actually do for clients.',
  alternates: {
    canonical: 'https://virtualcustomersolution.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  // Separate featured post
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const remainingPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  // Serialize posts for client component
  const serializedPosts = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
    date: post.date,
    author: post.author,
    readingTime: post.readingTime,
    featured: post.featured,
  }));

  return (
    <SiteShell>
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-4">
              Our Blog
            </h1>
            <p className="text-white/60 text-lg">
              Insights, tips, and strategies to help your business grow. Written
              by our team of digital marketing and remote workforce experts.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block glass-panel p-6 md:p-8 mb-12 group hover:border-[rgba(34,197,94,0.2)] transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Thumbnail placeholder */}
                <div className="shrink-0 w-full md:w-80 h-48 md:h-auto rounded-xl bg-gradient-to-br from-[rgba(34,197,94,0.1)] to-[rgba(29,78,216,0.05)] border border-[rgba(255,255,255,0.04)] flex items-center justify-center">
                  <Tag className="w-10 h-10 text-[#22C55E] opacity-40" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[rgba(34,197,94,0.1)] text-[#22C55E] border border-[rgba(34,197,94,0.2)]">
                      {featuredPost.featured ? 'Featured' : featuredPost.category}
                    </span>
                    <span className="text-sm text-white/40">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-3 group-hover:text-[#22C55E] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-4 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-sm text-white/40">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readingTime} min read
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-[#22C55E] font-medium group-hover:gap-2 transition-all">
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Client-side filter + grid */}
          <BlogListClient posts={serializedPosts} categories={categories} />

          {/* Newsletter CTA */}
          <div className="mt-16 glass-panel p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-[#F5F5F5] mb-4">
              Subscribe for Marketing Tips & Exclusive Offers
            </h2>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Get the latest insights on digital marketing, remote workforce
              strategies, and growth tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-lg bg-[rgba(34,197,94,0.04)] border border-[rgba(255,255,255,0.08)] text-[#F5F5F5] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
              />
              <button
                type="submit"
                className="bg-[#22C55E] hover:bg-[#059669] text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
