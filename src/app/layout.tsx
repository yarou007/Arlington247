import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://arlington247lockrepair.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Emergency Locksmith Arlington VA – 24/7 Fast Help | (703) 244-0559",
    template: "%s | Arlington247 Locksmith",
  },
  description:
    "Locked out in Arlington VA? Call (703) 244-0559 now! 24/7 emergency locksmith service. 20-min arrival, upfront pricing, licensed & insured. Residential, commercial & car lockouts.",
  keywords: [
    "emergency locksmith arlington",
    "locksmith arlington va",
    "locked out arlington",
    "car lockout arlington",
    "house lockout arlington",
    "24 hour locksmith arlington",
    "locksmith near me arlington",
    "arlington locksmith",
    "emergency lockout service arlington va",
    "auto locksmith arlington",
    "residential locksmith arlington",
    "commercial locksmith arlington",
    "lock repair arlington",
    "key extraction arlington",
    "arlington va locksmith 24/7",
    "locksmith 22201",
    "locksmith 22202",
    "locksmith 22203",
    "locksmith 22204",
    "locksmith 22205",
    "locksmith 22206",
    "locksmith 22207",
    "locksmith ballston va",
    "locksmith clarendon va",
    "locksmith crystal city va",
    "locksmith rosslyn va",
    "locksmith pentagon city va",
    "locksmith shirlington va",
    "locksmith columbia pike",
    "lock change arlington va",
    "lock rekey arlington va",
    "broken key removal arlington",
    "door lock installation arlington",
    "locksmith near me open now",
    "cheap locksmith arlington va",
    "affordable locksmith arlington",
    "storefront lockout arlington",
    "office lockout arlington va",
    "apartment lockout arlington",
    "condo lockout arlington va",
    "car key replacement arlington va",
    "deadbolt installation arlington",
    "lock replacement arlington va",
    "emergency lock change arlington",
    "late night locksmith arlington",
    "weekend locksmith arlington va",
  ],
  openGraph: {
    title: "Emergency Locksmith Arlington VA – 24/7 Fast Help | (703) 244-0559",
    description:
      "Locked out in Arlington VA? Call (703) 244-0559 now! 24/7 emergency locksmith service. 20-min arrival, upfront pricing, licensed & insured. Residential, commercial & car lockouts.",
    url: BASE_URL,
    siteName: "Arlington247 Lock Repair",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/keys-in-lock.jpg",
        width: 1200,
        height: 630,
        alt: "Arlington247 Lock Repair — 24/7 Emergency Locksmith Service in Arlington VA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Locksmith Arlington VA – 24/7 Fast Help | (703) 244-0559",
    description:
      "Locked out in Arlington VA? Call (703) 244-0559 now! 24/7 emergency locksmith service. 20-min arrival, upfront pricing, licensed & insured. Residential, commercial & car lockouts.",
    images: ["/images/keys-in-lock.jpg"],
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
    canonical: BASE_URL,
  },
  verification: {
    // Replace with your actual Google Search Console verification code
    // google: "your-google-verification-code",
  },
  category: "Locksmith Service",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  name: "Arlington247 Lock Repair",
  url: "https://arlington247lockrepair.com/",
  telephone: "+17032440559",
  areaServed: {
    "@type": "City",
    name: "Arlington",
    addressRegion: "VA",
    addressCountry: "US",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arlington",
    addressRegion: "VA",
    postalCode: "22201",
    addressCountry: "US",
  },
  openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah M." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Locked out of my house at 2am and they arrived in 15 minutes. Professional and affordable. Highly recommend!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mike T." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Got me back in my car within 20 minutes at Crystal City. Great service and fair pricing.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jennifer K." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Best locksmith in Arlington! Fixed our commercial door lock same day. Very professional.",
    },
  ],
  image: "https://arlington247lockrepair.com/images/keys-in-lock.jpg",
  description: "24/7 emergency locksmith service in Arlington VA. Residential, commercial, and automotive lockout services with 20-minute response time.",
  serviceType: "Locksmith",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Locksmith Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Lockout Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Locksmith" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Locksmith" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Lockout Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Key Extraction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lock Repair" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can you respond to an emergency lockout in Arlington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our average response time is 20 minutes or less anywhere in Arlington County. We have mobile technicians stationed throughout Ballston, Clarendon, Crystal City, Rosslyn, and surrounding neighborhoods ready to dispatch 24/7 — including nights, weekends, and holidays.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a lockout service cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide upfront flat-rate pricing before any work begins — no hidden fees, no surprise charges, and no call-out fee. The exact cost depends on the type of lockout (residential, commercial, storefront, or auto). Call (703) 244-0559 for a free, no-obligation quote.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available 24 hours a day, 7 days a week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. arlington247lockrepair operates 24 hours a day, 7 days a week, 365 days a year. Whether it's 2am on a Tuesday or Christmas morning, a real person will answer your call and dispatch a technician immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Will you damage my door or lock during a lockout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We use professional non-destructive entry techniques on every job. Your lock, door, and frame stay intact. We back this up with a no-damage guarantee. If any damage occurs during our service, we cover the repair at no cost to you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you service storefront and commercial locks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We specialize in commercial and storefront lockouts including glass storefront door locks, panic bars, push bars, access control systems, high-security deadbolts, and master key systems. We serve offices, retail shops, restaurants, and warehouses across Arlington.",
      },
    },
    {
      "@type": "Question",
      name: "Can you replace door hardware on the spot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our technicians carry a full inventory of commercial and residential door hardware including knobs, levers, deadbolts, hinges, and door closers. In most cases we can replace your hardware in a single visit — no need to schedule a follow-up.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install and repair emergency exit doors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We install, repair, and inspect emergency exit doors, panic hardware, and fire-rated door assemblies. We ensure your doors meet local fire codes, ADA requirements, and Virginia building regulations.",
      },
    },
    {
      "@type": "Question",
      name: "Are your locksmiths licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every technician on our team is fully licensed in the state of Virginia, background-checked, and carries proof of insurance. We bring our credentials to every job so you can verify before we start.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all of Arlington County and surrounding areas including Ballston, Clarendon, Courthouse, Crystal City, Pentagon City, Rosslyn, Shirlington, Columbia Pike, Cherrydale, Lyon Village, Bluemont, Westover, Fairlington, and more. Call us to confirm coverage for your location.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide ID to get a lockout service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For your safety and ours, we may ask for proof of residence or authorization (such as a photo ID, lease, or utility bill) before performing a lockout service. This protects you and ensures we're helping the rightful owner or tenant.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Arlington" />
        <meta name="geo.position" content="38.8816;-77.091" />
        <meta name="ICBM" content="38.8816, -77.091" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="NSQ1ozShi5v60xjJpaTrWg"
          async
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
