import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/services/residential-locksmith-arlington";

export const metadata: Metadata = {
  title: "Residential Locksmith Arlington VA | 24/7 Home Lockout Help",
  description:
    "Locked out of your house in Arlington VA? 24/7 residential locksmith service for homes, apartments & condos. 20-min arrival. Call (703) 244-0559 now!",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Residential Locksmith Arlington VA | 24/7 Home Lockout Help",
    description: "Locked out of your house in Arlington VA? 24/7 residential locksmith service. Fast local response and upfront pricing. Call (703) 244-0559!",
    url: PAGE_URL,
  },
};

const services = [
  "House lockout service",
  "Apartment & condo lockouts",
  "Lock rekeying and replacement",
  "Deadbolt installation",
  "Key extraction from locks",
  "Broken lock repair",
  "Smart lock installation",
  "Door knob and handle replacement",
];

const neighborhoods = [
  "Ballston",
  "Clarendon",
  "Courthouse",
  "Crystal City",
  "Pentagon City",
  "Rosslyn",
  "Shirlington",
  "Cherrydale",
  "Lyon Village",
  "Bluemont",
  "Westover",
  "Fairlington",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Locksmith Arlington VA",
  provider: {
    "@type": "Locksmith",
    name: "Arlington247 Lock Repair",
    telephone: "+17032440559",
    areaServed: {
      "@type": "City",
      name: "Arlington",
      addressRegion: "VA",
    },
  },
  serviceType: "Residential Locksmith",
  areaServed: {
    "@type": "City",
    name: "Arlington",
    addressRegion: "VA",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "24/7 Emergency Residential Locksmith",
    availableLanguage: "English",
    serviceUrl: PAGE_URL,
  },
};

export default function ResidentialLocksmithPage() {
  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/door-knob.jpg"
            alt="Residential locksmith Arlington VA"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-green-600/90 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
            Available Now — 20 Min Arrival
          </div>
          
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            24/7 Residential Locksmith Service
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            Residential Locksmith Arlington VA — Home Lockout Experts
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mb-8 leading-relaxed">
            Locked out of your house, apartment, or condo in Arlington? Our residential locksmiths 
            specialize in fast, damage-free entry for homeowners and renters. We arrive in 20 minutes 
            or less across all Arlington neighborhoods.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+17032440559" aria-label="Call Arlington 24/7 Lock Repair at 703-244-0559"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold text-lg px-8 py-4 rounded-xl transition-colors phone-pulse"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call (703) 244-0559 — 24/7
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-4 rounded-xl transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-8 text-sm">
            <span className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> Licensed & Insured
            </span>
            <span className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> Non-Destructive Entry When Possible
            </span>
            <span className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> Upfront Pricing
            </span>
            <span className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> Local Arlington Coverage
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Residential Locksmith Services We Provide
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From emergency lockouts to complete lock upgrades, our Arlington residential locksmiths 
              handle every home security need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 hover:border-amber-300 transition-colors"
              >
                <span className="text-amber-500 text-xl">🔑</span>
                <span className="font-medium text-gray-800">{service}</span>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              What Makes Our Residential Service Different
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you&apos;re locked out of your home, you need more than just a locksmith — you need 
              someone who understands the urgency and respects your property. Our Arlington residential 
              locksmiths use non-destructive entry techniques that preserve your locks and doors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We arrive in marked vehicles, carry proper identification, and provide upfront pricing 
              before any work begins. Whether it&apos;s 2 PM or 2 AM, you&apos;ll get the same professional 
              service from licensed technicians who know Arlington&apos;s neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Why Arlington Homeowners Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">20-Minute Response</h3>
              <p className="text-gray-600 text-sm">
                Our technicians are stationed throughout Arlington for fastest arrival times 
                to any residential location.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Lock-Safe Entry Methods</h3>
              <p className="text-gray-600 text-sm">
                We use professional techniques to get you back inside without damaging 
                your lock, door, or frame.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">
                No surprise fees. We quote the price before starting work, with no 
                hidden charges or overtime rates.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:+17032440559" aria-label="Call Arlington 24/7 Lock Repair at 703-244-0559"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg px-10 py-4 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call (703) 244-0559 for Home Lockout Help
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Arlington Neighborhoods We Serve
            </h2>
            <p className="text-gray-600 text-lg">
              Residential locksmith service available throughout Arlington County and surrounding areas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {neighborhoods.map((area) => (
              <span
                key={area}
                className="bg-gray-100 border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-50 hover:border-amber-300 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm">
            Don&apos;t see your neighborhood? Call us at{" "}
            <a href="tel:+17032440559" aria-label="Call Arlington 24/7 Lock Repair at 703-244-0559" className="text-red-600 font-semibold hover:underline">
              (703) 244-0559
            </a>{" "}
            — we likely serve your area.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Residential Locksmith FAQs
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">How quickly can you get to my house?</h3>
              <p className="text-gray-600">
                Our average response time is 20 minutes or less anywhere in Arlington. We have 
                technicians stationed throughout Ballston, Clarendon, Crystal City, and surrounding areas.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Will you damage my lock or door?</h3>
              <p className="text-gray-600">
                No. We use non-destructive entry techniques specifically designed to get you back 
                inside without damaging your lock, door, or frame whenever possible.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Do I need to show ID?</h3>
              <p className="text-gray-600">
                For your security, we may ask for proof of residence (ID, lease, or utility bill) 
                before performing residential lockout services. This protects you and ensures we&apos;re helping the rightful resident.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Can you rekey my locks instead of replacing them?</h3>
              <p className="text-gray-600">
                Yes. In most cases, we can rekey your existing locks so old keys no longer work. 
                This is faster and more cost-effective than full replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Locked Out of Your Home? Call Now!
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t wait outside in the cold. Our Arlington residential locksmiths are standing by 
            24/7 to get you back inside quickly and safely.
          </p>
          <a
            href="tel:+17032440559" aria-label="Call Arlington 24/7 Lock Repair at 703-244-0559"
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-2xl px-12 py-5 rounded-2xl phone-pulse transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            (703) 244-0559 — Call Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
