import { Benefits } from "@/components/sections/benefits";
import { CaseStudies } from "@/components/sections/case-studies";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { SocialProof } from "@/components/sections/social-proof";
import { Solution } from "@/components/sections/solution";
import { Testimonials } from "@/components/sections/testimonials";
import { siteSchema } from "@/lib/content";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteSchema),
        }}
      />
      <main id="main-content" className="relative overflow-x-clip">
        <Hero />
        <PainPoints />
        <Solution />
        <Services />
        <SocialProof />
        <CaseStudies />
        <Testimonials />
        <Process />
        <Benefits />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}
