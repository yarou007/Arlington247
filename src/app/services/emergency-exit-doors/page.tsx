import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/services/emergency-exit-doors";

export const metadata: Metadata = {
  title: "Emergency Exit Door Service Arlington VA | Panic Bar Repair",
  description:
    "Emergency exit door installation, panic bar repair, and fire-rated hardware service in Arlington, VA. Fast 24/7 response. Licensed & insured. Call (703) 244-0559.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Emergency Exit Door Service Arlington VA | Panic Bar Repair",
    description: "Emergency exit door installation, panic bar repair, and fire-rated hardware service in Arlington, VA. Fast 24/7 response. Call (703) 244-0559!",
    url: PAGE_URL,
  },
};

const bullets = [
  "Panic bar and push bar installation",
  "Emergency exit hardware repair and replacement",
  "Fire-rated and ADA-compliant door setup",
  "Door closer adjustments and latch alignment",
  "24/7 emergency dispatch for failed exit doors",
  "Commercial code compliance inspections",
  "Emergency exit lock repair and replacement",
];

const commercialAreas = [
  "Office Buildings",
  "Retail Stores",
  "Restaurants",
  "Schools & Universities",
  "Medical Facilities",
  "Warehouses",
  "Apartment Complexes",
  "Hotels",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Exit Door Service Arlington VA",
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

export default function EmergencyExitDoorsPage() {
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
            24/7 Emergency Service Available
          </div>
          
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Commercial Locksmith Service
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
            Emergency Exit Door Service in Arlington, VA
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mb-6">
            If your emergency exit door is jammed, out of code, or unsafe to operate, our licensed 
            locksmiths can repair or replace hardware on-site. We service offices, retail spaces, 
            schools, and multifamily buildings across Arlington County.
          </p>
          <p className="text-gray-400 max-w-3xl mb-8">
            Emergency exit doors are critical for safety compliance and building security. When they 
            malfunction, you need immediate service from professionals who understand fire codes, ADA 
            requirements, and commercial building standards. Our Arlington commercial locksmiths 
            specialize in panic bars, push bars, fire-rated hardware, and emergency exit systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+17032440559"
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

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                What We Handle
              </h2>
              <ul className="space-y-3 mb-8">
                {bullets.map((item) => (
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
                Commercial Areas We Serve
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {commercialAreas.map((area) => (
                  <div
                    key={area}
                    className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-center"
                  >
                    <span className="font-medium text-gray-800 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                Why Exit Door Maintenance Matters
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Emergency exit door failures are both a safety risk and a compliance risk. Faulty panic 
                bars, misaligned latches, or worn hardware can prevent quick evacuation during emergencies, 
                putting lives at risk and exposing your business to liability.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Arlington commercial locksmiths understand Virginia building codes and fire safety 
                regulations. We perform practical repairs and hardware replacements quickly so your building 
                can remain secure and code-ready. Whether you need a simple adjustment or complete hardware 
                replacement, we arrive prepared with the right tools and parts.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Need urgent service now? Call and we will dispatch a mobile technician to your Arlington 
                location right away. We carry inventory for most major panic bar brands including Von Duprin, 
                Yale, Corbin Russwin, and Sargent.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                Common Exit Door Issues
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">🚪 Panic Bar Won&apos;t Open</h3>
                  <p className="text-gray-600 text-sm">
                    Internal mechanism failure or debris buildup preventing the latch from retracting properly.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">🔒 Door Won&apos;t Stay Closed</h3>
                  <p className="text-gray-600 text-sm">
                    Misaligned strike plate or worn latch causing the door to swing open unexpectedly.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">⚠️ Not ADA Compliant</h3>
                  <p className="text-gray-600 text-sm">
                    Outdated hardware that doesn&apos;t meet current accessibility standards for push force requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Emergency Exit Door Problem?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Don&apos;t risk safety violations or liability. Our Arlington commercial locksmiths are ready to help.
          </p>
          <a
            href="tel:+17032440559"
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
