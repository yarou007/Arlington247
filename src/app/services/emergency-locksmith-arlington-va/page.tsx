import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/services/emergency-locksmith-arlington-va";

export const metadata: Metadata = {
  title: "Emergency Locksmith Arlington VA | 24/7 Lockout Help | (703) 244-0559",
  description:
    "Emergency locksmith Arlington VA - 24/7 lockout service for homes, cars & businesses. 20-min arrival, upfront pricing. Call (703) 244-0559 now!",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Emergency Locksmith Arlington VA | 24/7 Lockout Help | (703) 244-0559",
    description: "Emergency locksmith Arlington VA - 24/7 lockout service. 20-min arrival, licensed & insured. Call (703) 244-0559 now!",
    url: PAGE_URL,
  },
};

const emergencies = [
  "House lockout - keys inside",
  "Car lockout - keys in vehicle",
  "Office/Storefront lockout",
  "Broken key in lock",
  "Lost or stolen keys",
  "Lock malfunction/jammed",
  "After-hours emergency",
  "Holiday & weekend lockouts",
];

const features = [
  {
    icon: "⚡",
    title: "20-Minute Response",
    desc: "Our mobile units are positioned throughout Arlington for fastest arrival times.",
  },
  {
    icon: "🔐",
    title: "Licensed & Insured",
    desc: "Virginia-licensed locksmiths with full insurance coverage for your protection.",
  },
  {
    icon: "💰",
    title: "Upfront Pricing",
    desc: "No hidden fees. We quote the exact price before any work begins.",
  },
  {
    icon: "🛡️",
    title: "No Damage Guarantee",
    desc: "Professional techniques that preserve your locks, doors, and property.",
  },
  {
    icon: "📱",
    title: "24/7/365 Availability",
    desc: "Real person answers every call, any time - day, night, or holiday.",
  },
  {
    icon: "🏆",
    title: "500+ 5-Star Reviews",
    desc: "Trusted by Arlington residents and businesses for reliable emergency service.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Locksmith Arlington VA",
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
  serviceType: "Emergency Locksmith",
  areaServed: {
    "@type": "City",
    name: "Arlington",
    addressRegion: "VA",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "24/7 Emergency Locksmith",
    availableLanguage: "English",
    serviceUrl: PAGE_URL,
  },
};

export default function EmergencyLocksmithPage() {
  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white text-center py-3">
        <p className="font-bold tracking-wide">
          🚨 LOCKED OUT RIGHT NOW? CALL IMMEDIATELY — {" "}
          <a href="tel:+17032440559" className="underline hover:text-amber-300">
            (703) 244-0559
          </a>
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/night-lock.jpg"
            alt="Emergency locksmith Arlington VA 24/7"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full" />
            Technicians Standing By NOW
          </div>
          
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            24/7 Emergency Locksmith Arlington VA
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            Emergency Locksmith Arlington VA — Help in 20 Minutes
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mb-8 leading-relaxed">
            Locked out of your home, car, or business in Arlington? Our emergency locksmiths are 
            standing by 24/7 with 20-minute average response times. Licensed, insured, and ready 
            to help right now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+17032440559"
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold text-xl px-10 py-5 rounded-xl transition-colors phone-pulse"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              CALL NOW (703) 244-0559
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-5 rounded-xl transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Emergency stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">20</div>
              <div className="text-sm text-gray-400">Min Avg Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">24/7</div>
              <div className="text-sm text-gray-400">Always Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">500+</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Emergency Locksmith Services We Provide
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whatever lock emergency you&apos;re facing, our Arlington locksmiths have the tools 
              and expertise to help immediately.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencies.map((emergency) => (
              <div
                key={emergency}
                className="bg-red-50 border border-red-100 rounded-xl px-5 py-4 text-center hover:bg-red-100 transition-colors"
              >
                <span className="font-semibold text-gray-800">{emergency}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Not seeing your specific emergency? Call us — we handle all lock-related emergencies.
            </p>
            <a
              href="tel:+17032440559"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call for Immediate Help
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            Why Choose Our Emergency Locksmith Service
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Emergency Service Throughout Arlington
            </h2>
            <p className="text-gray-600 text-lg">
              We dispatch mobile technicians to all Arlington neighborhoods and surrounding areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["Ballston", "Clarendon", "Courthouse", "Crystal City", "Pentagon City", "Rosslyn", "Shirlington", "Columbia Pike", "Cherrydale", "Lyon Village", "Bluemont", "Westover"].map((area) => (
              <div key={area} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <span className="font-medium text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center">
            How Emergency Service Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Call Now</h3>
              <p className="text-gray-400">
                Dial (703) 244-0559. A real person answers immediately — no waiting on hold.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-gray-900">2</div>
              <h3 className="text-xl font-bold mb-2">We Dispatch</h3>
              <p className="text-gray-400">
                Nearest mobile unit is sent immediately. Average arrival: 20 minutes or less.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Problem Solved</h3>
              <p className="text-gray-400">
                Professional entry with no damage. You&apos;re back inside and on your way.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:+17032440559"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold text-xl px-12 py-5 rounded-2xl phone-pulse transition-colors"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Start Now — Call (703) 244-0559
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Emergency Locksmith FAQs
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">How fast can you get here?</h3>
              <p className="text-gray-600">
                Our average response time is 20 minutes throughout Arlington. We have mobile units 
                positioned in Ballston, Clarendon, Crystal City, and surrounding areas for fastest 
                response.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Are you really available 24/7?</h3>
              <p className="text-gray-600">
                Yes. We operate 24 hours a day, 7 days a week, 365 days a year — including all 
                holidays. A real locksmith answers every call, not an answering service.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Will you damage my property?</h3>
              <p className="text-gray-600">
                Never. We use professional non-destructive techniques. If any damage occurs during 
                our service (which is extremely rare), we cover the repair costs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">How much does emergency service cost?</h3>
              <p className="text-gray-600">
                We provide upfront pricing before any work begins. No hidden fees, no surprise 
                charges, and no overtime rates for nights or weekends. Call for a free quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Locked Out Right Now?
          </h2>
          <p className="text-red-100 text-xl mb-8">
            Don&apos;t wait. Our emergency locksmiths are standing by to help immediately.
          </p>
          <a
            href="tel:+17032440559"
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-3xl px-14 py-6 rounded-2xl phone-pulse transition-colors"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            CALL (703) 244-0559 NOW
          </a>
          <p className="mt-6 text-red-200">
            24/7 Emergency Service • 20-Min Response • Licensed & Insured
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
