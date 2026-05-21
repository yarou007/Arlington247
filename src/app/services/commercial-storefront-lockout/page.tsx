import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/services/commercial-storefront-lockout";

export const metadata: Metadata = {
  title: "Commercial & Storefront Lockout Arlington VA | 24/7 Business Entry",
  description:
    "Locked out of your office or storefront in Arlington VA? 24/7 commercial locksmith service. 20-min arrival, no damage. Call (703) 244-0559 now!",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Commercial & Storefront Lockout Arlington VA | 24/7 Business Entry",
    description: "Locked out of your office or storefront in Arlington VA? 24/7 commercial locksmith service. 20-min arrival. Call (703) 244-0559!",
    url: PAGE_URL,
  },
};

const coverage = [
  "Retail storefront lockouts",
  "Office suite and tenant lockouts",
  "Panic bar and push-bar entry issues",
  "Glass door and narrow stile lock problems",
  "After-hours and weekend business entry",
  "Restaurant and food service lockouts",
  "Warehouse and industrial lockouts",
  "Medical office lockouts",
];

const businessTypes = [
  "Retail Stores",
  "Restaurants",
  "Office Buildings",
  "Medical Practices",
  "Warehouses",
  "Salons & Spas",
  "Hotels",
  "Apartment Lobbies",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Storefront Lockout Arlington VA",
  provider: {
    "@type": "Locksmith",
    name: "Arlington247 Lock Repair",
    telephone: "+17032440559",
  },
  serviceType: "Commercial Locksmith",
  areaServed: {
    "@type": "City",
    name: "Arlington",
    addressRegion: "VA",
  },
};

export default function CommercialStorefrontLockoutPage() {
  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            24/7 Business Lockout Service
          </div>
          
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Commercial Locksmith Arlington
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
            Commercial & Storefront Lockout in Arlington, VA
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mb-6">
            Downtime costs money. We help business owners, property managers, and staff regain access 
            quickly without forcing the door or damaging hardware. Our Arlington commercial locksmiths 
            understand the urgency of getting your business back open.
          </p>
          <p className="text-gray-400 max-w-3xl mb-8">
            When you&apos;re locked out of your storefront, office, or commercial building, every minute 
            counts. Lost revenue, frustrated customers, and delayed operations can quickly add up. 
            That&apos;s why Arlington businesses trust our 24/7 commercial locksmith service for fast, 
            professional entry that gets you back to business without damage to your property.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+17032440559" aria-label="Call Arlington 24/7 Lock Repair at 703-244-0559"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold px-6 py-3 rounded-xl transition-colors"
            >
              Call (703) 244-0559
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                Common Commercial Calls We Handle
              </h2>
              <ul className="space-y-3">
                {coverage.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700"
                  >
                    <span className="text-amber-500">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                Business Types We Serve
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {businessTypes.map((type) => (
                  <div
                    key={type}
                    className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-center"
                  >
                    <span className="font-medium text-gray-800 text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Built for Urgency and Professionalism
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">
                20-minute average arrival time. We understand that every minute of downtime costs your business money.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">No Property Damage</h3>
              <p className="text-gray-600 text-sm">
                Professional techniques that preserve your storefront glass, frames, and expensive locking hardware.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Proper Authorization</h3>
              <p className="text-gray-600 text-sm">
                We verify identity and authorization before entry to protect your business and employees.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Commercial Expertise You Can Trust
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Commercial locks are different from residential locks. They&apos;re often more complex, 
              higher security, and integrated with access control systems. Our Arlington commercial 
              locksmiths arrive prepared for common storefront and office lock systems, carrying 
              specialized tools for glass doors, panic bars, mortise locks, and high-security cylinders.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We verify authorization before entry and complete access with care. If needed, we can 
              also rekey or replace compromised locks before your business opens. We understand 
              Virginia commercial building codes and work efficiently to minimize disruption to your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Arlington Business Districts We Cover
            </h2>
            <p className="text-gray-600">
              Commercial locksmith service throughout Arlington&apos;s major business corridors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["Ballston Business District", "Clarendon", "Crystal City", "Pentagon City", "Rosslyn", "Shirlington", "Columbia Pike", "National Landing"].map((area) => (
              <div key={area} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <span className="font-medium text-gray-700 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Locked Out of Your Business?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Don&apos;t let a lockout cost you revenue. Our Arlington commercial locksmiths are standing by 24/7.
          </p>
          <a
            href="tel:+17032440559" aria-label="Call Arlington 24/7 Lock Repair at 703-244-0559"
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-xl px-10 py-4 rounded-2xl phone-pulse transition-colors"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call (703) 244-0559 Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
