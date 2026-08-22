import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import {
  BASE_URL,
  BUSINESS_NAME,
  FAQ_SCHEMA,
  LOCAL_BUSINESS_SCHEMA,
} from "@/lib/seo";
import "./globals.css";

const homeTitle = "Emergency Locksmith Arlington VA | 24/7 Lockout Help";
const homeDescription =
  "Locked out in Arlington VA? Call (703) 244-0559 now for 24/7 emergency locksmith service near you — lockouts, key extraction and lock repair in Ballston, Clarendon, Rosslyn, Crystal City, Pentagon City & all Arlington ZIP codes.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: homeTitle,
    template: "%s | Arlington 24/7 Lock Repair",
  },
  description: homeDescription,
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}/`,
    siteName: BUSINESS_NAME,
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: "/images/keys-in-lock.jpg",
        width: 1200,
        height: 630,
        alt: "24/7 emergency locksmith in Arlington VA with mobile lockout service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
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
  category: "Locksmith Service",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />
      </head>
      <body className="pb-16 md:pb-0">
        <BreadcrumbSchema />
        {children}
      </body>
    </html>
  );
}
