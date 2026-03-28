import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Uncomment when enabling AdSense
import Script from "next/script";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
    default: "Virtual Customer Solution | Marketing, Remote Teams & Web Development",
    template: "%s | Virtual Customer Solution",
  },
  description:
    "Remote teams, digital marketing, web development, and operations support — all under one roof. Virtual Customer Solution helps businesses grow without the overhead.",
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
  // verification: { google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE" },
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
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Virtual Customer Solution",
              url: "https://virtualcustomersolution.com",
              logo: "https://virtualcustomersolution.com/logo.svg",
              description:
                "Marketing, remote teams, web development, and business operations support. Helping businesses grow since 2016.",
              email: "adminatvcs@gmail.com",
              sameAs: [
                "https://facebook.com/virtualcustomersolution",
                "https://linkedin.com/company/virtualcustomersolution",
                "https://twitter.com/virtualcustomersolution",
                "https://instagram.com/virtualcustomersolution",
                "https://github.com/virtualcustomersolution",
                "https://youtube.com/@virtualcustomersolution",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "adminatvcs@gmail.com",
                contactType: "customer service",
                availableLanguage: ["English", "Urdu"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "114 McLeod Rd",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              founder: {
                "@type": "Person",
                name: "M Faizan Rafiq",
                jobTitle: "Founder & CEO",
              },
              foundingDate: "2018",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 2,
                maxValue: 10,
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
        
        {/* BreadcrumbList — handled per-page via components/seo/Breadcrumbs.tsx */}
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="msapplication-TileColor" content="#22C55E" />

        {/* Google AdSense — uncomment after approval and replace pub-XXXXXXXXXX */}
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}

        {/* Preconnect to AdSense (enable when ads are active) */}
        {/* <link rel="preconnect" href="https://pagead2.googlesyndication.com" /> */}
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
