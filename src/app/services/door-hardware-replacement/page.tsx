import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/services/door-hardware-replacement";

export const metadata: Metadata = {
  title: "Door Hardware Replacement Arlington VA | Locks, Knobs & More",
  description:
    "Replace broken door knobs, levers, deadbolts, hinges & closers in Arlington VA. Residential & commercial hardware service. Same-day available. Call (703) 244-0559!",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Door Hardware Replacement Arlington VA | Locks, Knobs & More",
    description: "Replace broken door knobs, levers, deadbolts, hinges & closers in Arlington VA. Same-day service. Call (703) 244-0559!",
    url: PAGE_URL,
  },
};

const hardwareItems = [
  "Entry knobs and keyed levers",
  "Deadbolts and high-security cylinders",
  "Door hinges and strike plates",
  "Commercial closers and pull handles",
  "Mailbox, gate, and utility room locks",
  "Smart locks and electronic entry",
  "Panic bars and exit devices",
  "Door viewers and peepholes",
];

const signs = [
  "Loose or wobbly door knob",
  "Lock doesn&apos;t latch properly",
  "Squeaky or grinding hinges",
  "Door closer slamming shut",
  "Rusty or corroded hardware",
  "Outdated or broken mechanisms",
  "Difficulty turning key",
  "Door sticking or dragging",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Door Hardware Replacement Arlington VA",
  provider: {
    "@type": "Locksmith",
    name: "Arlington247 Lock Repair",
    telephone: "+17032440559",
  },
  serviceType: "Locksmith",
  areaServed: {
    "@type": "City",
    name: "Arlington",
    addressRegion: "VA",
  },
};

export default function DoorHardwareReplacementPage() {
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
          <div className="inline-flex items-center gap-2 bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Same-Day Service Available
          </div>
          
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Residential And Commercial
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
            Door Hardware Replacement in Arlington, VA
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mb-6">
            Worn, loose, or broken door hardware can leave your property unsafe and hard to secure. 
            We replace the right components in one visit so your door closes, latches, and locks 
            correctly.
          </p>
          <p className="text-gray-400 max-w-3xl mb-8">
            Whether it&apos;s a sticky deadbolt, loose door knob, squeaky hinge, or broken closer, 
            malfunctioning door hardware is more than an annoyance — it&apos;s a security risk. 
            Our Arlington locksmiths carry a comprehensive inventory of residential and commercial 
            door hardware, allowing us to replace worn or broken components in a single visit. 
            From standard home locks to complex commercial systems, we have the parts and expertise 
            to restore your door&apos;s function and security.
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

      {/* Hardware Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                Hardware We Replace
              </h2>
              <ul className="space-y-3">
                {hardwareItems.map((item) => (
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
                Signs You Need Hardware Replacement
              </h2>
              <div className="space-y-3">
                {signs.map((sign) => (
                  <div
                    key={sign}
                    className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3"
                  >
                    <span className="font-medium text-gray-800">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Our Hardware Replacement Process
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We diagnose the problem and identify exactly what hardware needs replacement vs. repair.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Quote</h3>
              <p className="text-gray-600 text-sm">
                Clear upfront pricing with hardware options. No surprises. You approve before we start.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">
                Professional installation with proper alignment and testing. Everything works smoothly.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Upfront Recommendations, No Guesswork
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We explain what failed, what needs replacement, and what can be repaired. You approve 
              pricing before any work starts. Then we install, test, and make sure everything 
              operates smoothly before we leave. Our Arlington locksmiths carry quality hardware 
              from trusted brands like Schlage, Kwikset, Yale, and Baldwin.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All installations include proper door alignment, strike plate adjustment, and 
              lubrication to ensure smooth operation. We stand behind our work with a satisfaction 
              guarantee and are always available if you have questions after installation.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                Why Replace vs. Repair?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sometimes repair is the right choice — but when hardware is worn, outdated, or 
                fundamentally damaged, replacement offers better long-term value. New hardware 
                provides improved security features, smoother operation, and peace of mind.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upgrading your door hardware is also an opportunity to improve security. We can 
                install high-security deadbolts, smart locks with keyless entry, or commercial-grade 
                hardware that stands up to heavy use. Our Arlington locksmiths help you choose 
                hardware that fits your needs and budget.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For commercial properties, we ensure ADA compliance and fire code requirements 
                are met. Proper door hardware isn&apos;t just about convenience — it&apos;s about 
                safety, security, and legal compliance.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-gray-900 mb-2">Better Security</h3>
                <p className="text-gray-600 text-sm">
                  New hardware includes modern security features and stronger materials for 
                  improved protection.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">⚙️</div>
                <h3 className="font-bold text-gray-900 mb-2">Smooth Operation</h3>
                <p className="text-gray-600 text-sm">
                  No more sticking, grinding, or difficulty locking. New hardware operates 
                  like it should.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">💎</div>
                <h3 className="font-bold text-gray-900 mb-2">Curb Appeal</h3>
                <p className="text-gray-600 text-sm">
                  Updated hardware improves the appearance of your doors and adds value to your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Need Door Hardware Replaced?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Our Arlington locksmiths are ready to upgrade your door hardware with quality parts and professional installation.
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
