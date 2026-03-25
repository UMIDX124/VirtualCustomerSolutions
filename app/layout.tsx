import type { Metadata } from "next";
import { Merriweather, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virtualcustomersolution.com"),
  title: {
    default: "Virtual Customer Solution | IT, Marketing & Remote Workforce Solutions",
    template: "%s | Virtual Customer Solution",
  },
  description:
    "Virtual Customer Solution delivers comprehensive digital solutions including IT consulting, cloud solutions, cybersecurity, digital marketing, and remote workforce services for businesses worldwide.",
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
      "Comprehensive digital solutions for businesses. IT consulting, cloud, cybersecurity, digital marketing, and remote workforce services.",
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
      "Comprehensive digital solutions including IT consulting, cloud, cybersecurity, marketing and remote workforce.",
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
  verification: {
    google: "your-google-verification-code",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
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
                "A comprehensive digital solutions company offering IT consulting, cloud solutions, cybersecurity, digital marketing, and remote workforce services.",
              sameAs: [
                "https://facebook.com/virtualcustomersolution",
                "https://linkedin.com/company/virtualcustomersolution",
                "https://twitter.com/virtualcustomersolution",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@virtualcustomersolution.com",
                contactType: "customer service",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
              foundingDate: "2020",
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
        
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://digitalpointllc.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Performance Marketing",
                  item: "https://digitalpointllc.com/performance-marketing",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Remote Workforce",
                  item: "https://digitalpointllc.com/remote-workforce",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Systems & Reporting",
                  item: "https://digitalpointllc.com/systems-reporting",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Results",
                  item: "https://digitalpointllc.com/results",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Free Growth Audit",
                  item: "https://digitalpointllc.com/free-growth-audit",
                },
              ],
            }),
          }}
        />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#18230F" />
        <meta name="msapplication-TileColor" content="#1F7D53" />
      </head>
      <body
        className={`${merriweather.variable} ${roboto.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
