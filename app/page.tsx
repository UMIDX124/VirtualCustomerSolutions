import { SiteShell } from '@/components/layout/SiteShell';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProofBar } from '@/components/sections/ProofBar';
import { LatestInsights } from '@/components/sections/LatestInsights';
import { FreeResources } from '@/components/sections/FreeResources';
import { PillarsSection } from '@/components/sections/PillarsSection';
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview';
import { ProofSection } from '@/components/sections/ProofSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import { HomepageProcess } from '@/components/sections/HomepageProcess';
import { HomepageTestimonials } from '@/components/sections/HomepageTestimonials';
import { HomepageHeroText } from '@/components/sections/HomepageHeroText';

export default function HomePage() {
  return (
    <SiteShell>
      <ScrollProgress />

      {/* 1. Hero — TextReveal heading, MagneticHover CTAs, FloatingElement particles */}
      <HeroSection />

      {/* 2. Text reveal */}
      <HomepageHeroText />

      {/* 3. Proof Bar — CountUpOnView numbers, StaggerChildren */}
      <ProofBar />

      {/* 4. Latest Insights — RevealOnScroll blur-in, StaggerChildren */}
      <LatestInsights />

      {/* 5. Free Resources — RevealOnScroll fade-left, StaggerChildren */}
      <FreeResources />

      {/* 6. Process — sticky scrollytelling + ScrollLine */}
      <HomepageProcess />

      {/* 7. Pillars — RevealOnScroll fade-up, StaggerChildren, MagneticHover */}
      <PillarsSection />

      {/* 8. Case Studies — RevealOnScroll zoom-in, StaggerChildren */}
      <CaseStudiesPreview />

      {/* 9. Proof Section */}
      <ProofSection />

      {/* 10. Testimonials — RevealOnScroll fade-up header */}
      <HomepageTestimonials />

      {/* 11. FAQ — RevealOnScroll fade-up wrapper */}
      <FAQSection />

      {/* 12. CTA — FloatingElement orbs, TextReveal heading, MagneticHover button */}
      <CTASection />
    </SiteShell>
  );
}
