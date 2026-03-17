import type { Metadata } from "next";

import { CaseStudies } from "@/components/sections/case-studies";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Founder } from "@/components/sections/founder";
import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBar } from "@/components/sections/trust-bar";
import { siteSchema } from "@/lib/content";

export const metadata: Metadata = {
  title: "B2B Growth Systems and Marketing Automation Agency",
  description:
    "DigitalPoint LLC helps B2B companies improve growth systems, marketing automation, revenue operations, and remote execution support with clearer reporting and stronger follow-through.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "B2B Growth Systems and Marketing Automation Agency | DigitalPoint LLC",
    description:
      "Growth systems, marketing automation, revenue operations, and remote execution support for B2B companies that need clearer reporting and stronger execution.",
    url: "/",
  },
  twitter: {
    title: "B2B Growth Systems and Marketing Automation Agency | DigitalPoint LLC",
    description:
      "Growth systems, marketing automation, revenue operations, and remote execution support for B2B companies.",
  },
};

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
        <TrustBar />
        <PainPoints />
        <Services />
        <CaseStudies />
        <Process />
        <Testimonials />
        <Founder />
        <FinalCta />
        <Faq />
      </main>
    </>
  );
}
