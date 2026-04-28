import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/services/car-lockout-arlington";

export const metadata: Metadata = {
  title: "Car Lockout Arlington VA | 24/7 Auto Locksmith Service",
  description:
    "Locked keys in your car in Arlington VA? Fast 24/7 car lockout service. We unlock all vehicle makes & models. 20-min arrival. Call (703) 244-0559 now!",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Car Lockout Arlington VA | 24/7 Auto Locksmith Service",
    description: "Locked keys in your car in Arlington VA? Fast 24/7 car lockout service. 20-min arrival, no damage. Call (703) 244-0559 now!",
    url: PAGE_URL,
  },
};

const services = [
  "Emergency car lockout",
  "Keys locked in trunk",
  "Key extraction from ignition",
  "Broken key removal",
  "Car key replacement",
  "Transponder key programming",
  "Car door unlocking",
  "All vehicle makes & models",
];

const vehicleTypes = [
  "Toyota & Lexus",
  "Honda & Acura",
  "Ford & Lincoln",
  "Chevrolet & GMC",
  "BMW & Mercedes",
  "Audi & Volkswagen",
  "Nissan & Infiniti",
  "Hyundai & Kia",
  "Jeep & Dodge",
  "Tesla & EVs",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Car Lockout Service Arlington VA",
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
  serviceType: "Automotive Locksmith",
  areaServed: {
    "@type": "City",
    name: "Arlington",
    addressRegion: "VA",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "24/7 Emergency Car Lockout",
    availableLanguage: "English",
    serviceUrl: PAGE_URL,
  },
};

export default function CarLockoutPage() {
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
            src="/images/car-lock.jpg"
            alt="Car lockout service Arlington VA"
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
            24/7 Auto Locksmith Service
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            Car Lockout Arlington VA — Keys Locked in Vehicle?
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mb-8 leading-relaxed">
            Locked your keys in the car in Arlington? Our automotive locksmiths unlock all makes and 
            models quickly and safely — no damage to your vehicle. We serve Ballston, Clarendon, 
            Crystal City, Pentagon City, and all Arlington neighborhoods with 20-minute response times.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+17032440559"
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
              <span className="text-green-400">✓</span> No Damage to Vehicle
            </span>
            <span className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> All Makes & Models
            </span>
            <span className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> Upfront Pricing
            </span>
            <span className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">✓</span> Licensed & Insured
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Automotive Locksmith Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From emergency lockouts to key replacements, our Arlington auto locksmiths 
              handle all vehicle access needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 hover:border-amber-300 transition-colors"
              >
                <span className="text-amber-500 text-xl">🚗</span>
                <span className="font-medium text-gray-800">{service}</span>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Safe, Damage-Free Vehicle Entry
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Modern vehicles have complex locking systems that require specialized tools and expertise. 
              Our Arlington automotive locksmiths use professional-grade equipment designed specifically 
              for car entry — no coat hangers or DIY methods that can damage your paint, weatherstripping, 
              or door mechanisms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We&apos;ve unlocked thousands of vehicles in Arlington, from standard sedans to luxury cars 
              and electric vehicles. Our technicians stay current with the latest automotive security 
              systems to provide fast, damage-free service every time.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              We Service All Vehicle Makes
            </h2>
            <p className="text-gray-600 text-lg">
              Our Arlington car locksmiths are trained to unlock virtually every vehicle on the road.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {vehicleTypes.map((make) => (
              <span
                key={make}
                className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-50 hover:border-amber-300 transition-colors"
              >
                {make}
              </span>
            ))}
          </div>

          <p className="text-center text-gray-600">
            Don&apos;t see your make? We likely still service it. Call{" "}
            <a href="tel:+17032440559" className="text-red-600 font-semibold hover:underline">
              (703) 244-0559
            </a>{" "}
            to confirm.
          </p>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Common Car Lockout Scenarios We Handle
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 text-lg mb-2">🚗 Keys Locked Inside</h3>
              <p className="text-gray-600 text-sm">
                The most common scenario — your keys are sitting on the seat or in the ignition 
                while you&apos;re outside. We&apos;ll have you back in within minutes.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 text-lg mb-2">🔑 Keys in Trunk</h3>
              <p className="text-gray-600 text-sm">
                Loading groceries or luggage and accidentally closed the trunk with keys inside? 
                We can access the trunk without damaging your vehicle.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 text-lg mb-2">🔧 Broken Key in Lock</h3>
              <p className="text-gray-600 text-sm">
                Key broke off in the door or ignition? We extract broken keys safely and can 
                provide replacement keys on the spot.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 text-lg mb-2">🔒 Smart Key Issues</h3>
              <p className="text-gray-600 text-sm">
                Key fob battery dead or smart key malfunction? We can help with electronic key 
                issues and provide backup access.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="tel:+17032440559"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg px-10 py-4 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Get Back in Your Car — Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Where We Provide Car Lockout Service
            </h2>
            <p className="text-gray-600 text-lg">
              Mobile automotive locksmith service throughout Arlington and surrounding areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Parking Garages", "Shopping Centers", "Office Buildings", "Residential Streets", "Highways & Roads", "Airport Areas", "Hotels & Motels", "Apartment Complexes"].map((location) => (
              <div key={location} className="bg-white rounded-xl p-4 text-center border border-gray-200">
                <span className="font-medium text-gray-800">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Car Lockout FAQs
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Will unlocking my car damage it?</h3>
              <p className="text-gray-600">
                Absolutely not. We use professional automotive entry tools specifically designed to 
                open vehicles without damaging paint, weatherstripping, or locking mechanisms. 
                Our technicians are trained in the latest techniques for damage-free entry.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Can you unlock newer cars with smart keys?</h3>
              <p className="text-gray-600">
                Yes. We service all vehicle types including those with advanced security systems, 
                smart keys, and keyless entry. Our tools and techniques work on both traditional 
                and electronic locking systems.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Do I need to be present?</h3>
              <p className="text-gray-600">
                For your vehicle&apos;s security, we require the registered owner or authorized person 
                to be present with valid ID and proof of ownership (registration, insurance card, etc.).
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">How long does car unlocking take?</h3>
              <p className="text-gray-600">
                Most vehicles can be unlocked within 5-10 minutes. Complex security systems or 
                stuck locks may take longer, but we&apos;ll keep you informed throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Staring at Your Keys Through the Window?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t let a car lockout ruin your day. Our Arlington auto locksmiths are standing by 
            24/7 to get you back on the road fast.
          </p>
          <a
            href="tel:+17032440559"
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
