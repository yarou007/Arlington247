import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/services/key-extraction-lock-repair";

export const metadata: Metadata = {
  title: "Broken Key Extraction Arlington VA | Key Stuck in Lock Removal",
  description:
    "Key stuck or broken in a lock in Arlington VA? Fast extraction and lock repair for homes, cars & businesses. 24/7 emergency service. Call (703) 244-0559!",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Broken Key Extraction Arlington VA | Key Stuck in Lock Removal",
    description: "Key stuck or broken in a lock in Arlington VA? Fast extraction and lock repair. 24/7 emergency service. Call (703) 244-0559!",
    url: PAGE_URL,
  },
};

const issues = [
  "Key snapped inside cylinder",
  "Key turns but door will not unlock",
  "Jammed deadbolt and stiff keyway",
  "Damaged lock after forced attempt",
  "Post-extraction rekey and hardware reset",
  "Key extraction from car ignition",
  "Broken key in trunk lock",
  "Key stuck in commercial lock",
];

const causes = [
  "Worn key grooves",
  "Damaged lock cylinder",
  "Forced key turning",
  "Extreme weather conditions",
  "Poor key duplication",
  "Lock lack of lubrication",
  "Metal fatigue in key",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Key Extraction and Lock Repair Arlington VA",
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

export default function KeyExtractionLockRepairPage() {
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
            24/7 Emergency Service
          </div>
          
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Emergency Locksmith Service
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
            Broken Key Extraction & Lock Repair in Arlington, VA
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mb-6">
            A stuck or broken key can happen without warning. We extract keys using professional 
            tools and restore lock function whenever possible to avoid unnecessary replacement. 
            Our Arlington locksmiths arrive prepared to handle any key extraction scenario.
          </p>
          <p className="text-gray-400 max-w-3xl mb-8">
            When a key breaks off in your lock, it&apos;s not just an inconvenience — it can leave 
            you stranded outside your home, office, or vehicle. Attempting to remove a broken key 
            yourself often makes the situation worse, pushing the key fragment deeper into the 
            cylinder or damaging the lock mechanism. Our Arlington locksmiths use specialized 
            extraction tools and techniques to safely remove broken keys and restore your lock to 
            working condition.
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

      {/* Content Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                Signs You Need Immediate Help
              </h2>
              <ul className="space-y-3">
                {issues.map((item) => (
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
                Common Causes of Key Breakage
              </h2>
              <div className="space-y-3">
                {causes.map((cause) => (
                  <div
                    key={cause}
                    className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3"
                  >
                    <span className="font-medium text-gray-800">{cause}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Approach Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                Our Repair-First Approach
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our locksmiths evaluate whether your lock can be restored before recommending 
                replacement. That helps reduce cost and gets you secured faster. We carry 
                specialized extraction tools designed to grip and remove broken key fragments 
                without damaging the lock cylinder.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once the broken key is extracted, we inspect the lock for damage. In many cases, 
                the lock can be repaired and returned to full function. If the cylinder is damaged, 
                we can often rebuild it with new components rather than replacing the entire lock, 
                saving you money.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We also provide new keys cut to factory specifications, ensuring smooth operation 
                and preventing future breakage. Our Arlington locksmiths can also rekey your locks 
                so the old broken key no longer works, enhancing your security.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-bold text-gray-900 mb-2">Professional Extraction Tools</h3>
                <p className="text-gray-600 text-sm">
                  Specialized key extractors, scope cameras, and precision tools for safe removal 
                  without lock damage.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-gray-900 mb-2">Save Money on Replacement</h3>
                <p className="text-gray-600 text-sm">
                  Our repair-first approach often saves the cost of full lock replacement while 
                  restoring full security.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600 text-sm">
                  Most extractions completed in a single visit. We arrive with tools and parts 
                  to fix the problem immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Key Extraction FAQs
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Can you remove a broken key without damaging the lock?</h3>
              <p className="text-gray-600">
                In most cases, yes. Our professional extraction tools and techniques allow us to 
                remove broken keys while preserving the lock cylinder. Success rate is over 95% 
                for residential and commercial locks.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">What if the key broke off flush with the lock?</h3>
              <p className="text-gray-600">
                We have specialized tools for extracting keys broken flush with the cylinder face. 
                Scope cameras help us see inside the lock to grasp and remove the fragment safely.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Should I try to remove it myself?</h3>
              <p className="text-gray-600">
                We strongly advise against DIY extraction attempts. Using glue, magnets, or forced 
                tools can push the key deeper, damage pins and springs, or make professional 
                extraction impossible. Call us for safe removal.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">How long does key extraction take?</h3>
              <p className="text-gray-600">
                Most residential extractions take 15-30 minutes. Complex commercial locks or deeply 
                embedded keys may take longer. We&apos;ll give you an estimate before starting work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Key Broken in Your Lock?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Don&apos;t risk damaging your lock. Our Arlington locksmiths extract broken keys safely and professionally.
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
