import { SiteShell } from '@/components/layout/SiteShell';
import { Metadata } from 'next';
import { FadeUp, GlassCard } from '@/components/ui-dp/AnimatedElements';

export const metadata: Metadata = {
  title: 'Blog | Virtual Customer Solution',
  description: 'Insights and tips on IT solutions, digital marketing, remote workforce, and business growth. Stay ahead with the latest strategies.',
};

const posts = [
  {
    slug: 'digital-marketing-vs-hiring-in-house',
    title: 'Digital Marketing vs Hiring In-House: Which Saves More in 2026?',
    excerpt: 'Comparing the costs and benefits of outsourcing digital marketing versus building an in-house team. What makes more financial sense for your business?',
    date: 'March 15, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'virtual-assistant-cost-2026',
    title: 'How Much Does a Virtual Assistant Cost in 2026? Complete Guide',
    excerpt: 'Everything you need to know about hiring virtual assistants in 2026. Average costs, what to expect, and how to maximize ROI.',
    date: 'March 10, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'signs-overpaying-digital-marketing',
    title: '7 Signs You\'re Overpaying for Digital Marketing',
    excerpt: 'Are you getting ripped off? Here are the warning signs that your digital marketing agency might be charging you too much.',
    date: 'March 5, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'seo-social-remote-staff-under-500',
    title: 'How to Get SEO + Social + Remote Staff for Under $500/Month',
    excerpt: 'The secret to getting comprehensive digital marketing AND remote staff for a fraction of the cost. This game-changing approach is disrupting the industry.',
    date: 'February 28, 2026',
    readTime: '7 min read',
  },
];

export default function BlogPage() {
  return (
    <SiteShell>
      <div className="pt-32 pb-20">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Our Blog
            </h1>
            <p className="text-text-secondary text-xl">
              Insights, tips, and strategies to help your business grow. Written by our team of digital marketing and remote workforce experts.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <FadeUp key={post.slug} delay={index * 0.1}>
                <GlassCard className="p-6 h-full flex flex-col group cursor-pointer">
                  {/* Thumbnail Placeholder */}
                  <div className="h-48 bg-surface-glass-strong rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-text-muted text-sm mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-[#AEB784] transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  {/* Read More */}
                  <div className="flex items-center text-[#AEB784] font-medium text-sm group-hover:text-[#41431B] transition-colors">
                    Read More →
                  </div>
                </GlassCard>
              </FadeUp>
            ))}
          </div>

          {/* Newsletter CTA */}
          <FadeUp className="mt-16">
            <GlassCard className="p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
                Subscribe for Marketing Tips & Exclusive Offers
              </h2>
              <p className="text-text-secondary mb-6 max-w-xl mx-auto">
                Get the latest insights on digital marketing, remote workforce strategies, and growth tips delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4 rounded-lg bg-surface-glass border border-border-glass text-text-primary focus:outline-none focus:ring-2 focus:ring-[#AEB784]"
                />
                <button
                  type="submit"
                  className="bg-[#41431B] hover:bg-[#AEB784] text-white font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  Subscribe
                </button>
              </form>
            </GlassCard>
          </FadeUp>
        </div>
      </div>
    </SiteShell>
  );
}
