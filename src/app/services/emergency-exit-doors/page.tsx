import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/services/emergency-exit-doors";

export const metadata: Metadata = {
  title: "Emergency Exit Door Service Arlington, VA",
  description:
    "Emergency exit door installation, panic bar repair, and fire-rated hardware service in Arlington, VA. Fast 24/7 response. Call (703) 244-0559.",
  alternates: {
    canonical: PAGE_URL,
  },
};

const bullets = [
  "Panic bar and push bar installation",
  "Emergency exit hardware repair and replacement",
  "Fire-rated and ADA-compliant door setup",
  "Door closer adjustments and latch alignment",
  "24/7 emergency dispatch for failed exit doors",
];

export default function EmergencyExitDoorsPage() {
  return (
    <main>
      <Header />

      <section className="bg-gray-900 text-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Commercial Locksmith Service
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
            Emergency Exit Door Service in Arlington, VA
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            If your emergency exit door is jammed, out of code, or unsafe to operate,
            our licensed locksmiths can repair or replace hardware on-site. We service
            offices, retail spaces, schools, and multifamily buildings across Arlington.
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
            What We Handle
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {bullets.map((item) => (
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
              Why this matters
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Exit door failures are both a safety risk and a compliance risk. Our team
              performs practical repairs and hardware swaps quickly so your building can
              remain secure and code-ready.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Need urgent service now? Call and we will dispatch a mobile technician to
              your Arlington location right away.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
