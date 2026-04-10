import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import StickyConsultationCTA from "@/components/StickyConsultationCTA";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virtualcustomersolution.com"),
  title: {
    default: "AI Marketing & Remote Teams | VCS",
    template: "%s | Virtual Customer Solution",
  },
  description:
    "Save 50-75% with AI-powered digital marketing, remote teams & web development. 200+ clients in 15+ countries. Get your free audit today.",
  keywords: [
    "IT consulting",
    "cloud solutions",
    "cybersecurity",
    "digital marketing agency",
    "remote workforce",
    "virtual assistants",
    "custom software development",
    "mobile app development",
    "digital transformation",
    "marketing agency near me",
    "virtual customer service",
    "remote team management",
    "lead generation",
    "SEO services",
    "PPC management",
  ],
  authors: [{ name: "Virtual Customer Solution" }],
  creator: "Virtual Customer Solution",
  publisher: "Virtual Customer Solution",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Virtual Customer Solution | IT, Marketing & Remote Workforce Solutions",
    description:
      "Marketing, remote teams, web development, and operations support for businesses that want to grow without the overhead.",
    url: "https://virtualcustomersolution.com",
    siteName: "Virtual Customer Solution",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Virtual Customer Solution - IT, Marketing & Remote Workforce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Customer Solution | IT & Digital Services",
    description:
      "Remote teams, marketing, web dev, and operations support — all under one roof.",
    images: ["/opengraph-image"],
    creator: "@virtualcustomersolution",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://virtualcustomersolution.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#0A0A0A' }} suppressHydrationWarning>
      <head>
        {/* Prevent flash on load */}
        <style dangerouslySetInnerHTML={{ __html: `html,body{background-color:#0A0A0A!important;color:#F5F5F5}` }} />
        {/* ProfessionalService + Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["ProfessionalService", "Organization"],
              name: "Virtual Customer Solution",
              url: "https://www.virtualcustomersolution.com",
              logo: "https://www.virtualcustomersolution.com/Virtual.png",
              image: "https://www.virtualcustomersolution.com/opengraph-image",
              description: "AI-powered digital marketing, remote workforce, and web development solutions for businesses in 15+ countries.",
              email: "contact@virtualcustomersolution.com",
              telephone: "+92-315-1407896",
              priceRange: "$399-$2499/mo",
              openingHours: "Mo-Sa 10:00-19:00",
              currenciesAccepted: "USD, PKR",
              paymentAccepted: "Bank Transfer, PayPal",
              sameAs: [
                "https://facebook.com/virtualcustomersolution",
                "https://linkedin.com/company/virtualcustomersolution",
                "https://twitter.com/virtualcustsol",
                "https://instagram.com/virtualcustomersolution",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-315-1407896",
                email: "contact@virtualcustomersolution.com",
                contactType: "customer service",
                availableLanguage: ["English", "Urdu"],
                areaServed: ["US", "UK", "AE", "CA", "AU", "PK"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "114 McLeod Rd",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "31.5497",
                longitude: "74.3436",
              },
              founder: {
                "@type": "Person",
                name: "M Faizan Rafiq",
                jobTitle: "Founder & CEO",
              },
              foundingDate: "2017",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 50,
                maxValue: 100,
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing", description: "SEO, PPC, social media, content marketing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remote Workforce", description: "Virtual assistants, marketing specialists, support agents" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", description: "Websites, e-commerce stores, custom web applications" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Solutions", description: "AWS, Azure, GCP migration and management" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity", description: "Security assessments, compliance, threat protection" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Growth", description: "Lead generation, CRO, analytics, strategy" } },
                ],
              },
            }),
          }}
        />
        
        {/* Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Virtual Customer Solution",
              description:
                "IT consulting, cloud solutions, cybersecurity, digital marketing, and remote workforce services.",
              url: "https://virtualcustomersolution.com",
              serviceType: [
                "IT Consulting",
                "Cloud Solutions",
                "Cybersecurity",
                "Digital Marketing",
                "Remote Workforce",
                "Custom Software Development",
                "Mobile Application Development",
              ],
              areaServed: {
                "@type": "Place",
                name: "Worldwide",
              },
              priceRange: "$$",
            }),
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Virtual Customer Solution",
              url: "https://virtualcustomersolution.com",
            }),
          }}
        />
        
        {/* FAQPage Schema - Will be added dynamically on FAQ section */}

        {/* BreadcrumbList for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://virtualcustomersolution.com" },
              ],
            }),
          }}
        />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="msapplication-TileColor" content="#22C55E" />

      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
        <StickyConsultationCTA />
        <Toaster />
        <Script
          src="https://fu-corp-crm.vercel.app/tracker.js"
          data-key="cmnsabw1t0003rgw4qj6w6y0e"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
