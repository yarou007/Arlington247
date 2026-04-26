import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/services/commercial-storefront-lockout";

export const metadata: Metadata = {
  title: "Commercial And Storefront Lockout Arlington, VA",
  description:
    "Locked out of your office, storefront, or warehouse in Arlington? 24/7 commercial locksmith response for doors, panic bars, and access hardware.",
  alternates: {
    canonical: PAGE_URL,
  },
};

const coverage = [
  "Retail storefront lockouts",
  "Office suite and tenant lockouts",
  "Panic bar and push-bar entry issues",
  "Glass door and narrow stile lock problems",
  "After-hours and weekend business entry",
];

export default function CommercialStorefrontLockoutPage() {
  return (
    <main>
      <Header />

      <section className="bg-gray-900 text-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-3">
            24/7 Business Lockout Service
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
            Commercial And Storefront Lockout in Arlington, VA
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Downtime costs money. We help business owners, property managers, and staff
            regain access quickly without forcing the door or damaging hardware.
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

      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            Common Commercial Calls
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {coverage.map((item) => (
              <li
                key={item}
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Built for urgency and professionalism
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We arrive prepared for common storefront and office lock systems, verify
              authorization, and complete entry with care. If needed, we can also rekey
              or replace compromised locks before your business opens.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
