import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDock from "@/components/ContactDock";
import ContactTracking from "@/components/ContactTracking";
import JsonLd from "@/components/JsonLd";
import { DOMAIN } from "@/lib/business";
import { LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  robots: { index: true, follow: true },
  category: "Locksmith service",
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#152d2b",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ContactDock />
        <ContactTracking />
        <JsonLd data={LOCAL_BUSINESS_SCHEMA} />
      </body>
    </html>
  );
}
