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
import { MascotDivider } from '@/components/layout/MascotDivider';

export default function HomePage() {
  return (
    <SiteShell>
      <ScrollProgress />
      <HeroSection />
      <HomepageHeroText />
      <ProofBar />
      <MascotDivider />
      <LatestInsights />
      <FreeResources />
      <HomepageProcess />
      <MascotDivider />
      <PillarsSection />
      <CaseStudiesPreview />
      <ProofSection />
      <MascotDivider />
      <HomepageTestimonials />
      <FAQSection />
      <CTASection />
    </SiteShell>
  );
}
