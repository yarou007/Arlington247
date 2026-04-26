import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/services/key-extraction-lock-repair";

export const metadata: Metadata = {
  title: "Broken Key Extraction And Lock Repair Arlington, VA",
  description:
    "Key stuck or broken in a lock? Fast extraction and lock repair service in Arlington, VA for homes, cars, and commercial doors. 24/7 emergency help.",
  alternates: {
    canonical: PAGE_URL,
  },
};

const issues = [
  "Key snapped inside cylinder",
  "Key turns but door will not unlock",
  "Jammed deadbolt and stiff keyway",
  "Damaged lock after forced attempt",
  "Post-extraction rekey and hardware reset",
];

export default function KeyExtractionLockRepairPage() {
  return (
    <main>
      <Header />

      <section className="bg-gray-900 text-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Emergency Locksmith Service
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
            Broken Key Extraction And Lock Repair in Arlington, VA
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            A stuck or broken key can happen without warning. We extract keys using
            professional tools and restore lock function whenever possible to avoid
            unnecessary replacement.
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
            Signs You Need Immediate Help
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {issues.map((item) => (
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
              Repair-first approach
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our locksmiths evaluate whether your lock can be restored before recommending
              replacement. That helps reduce cost and gets you secured faster.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
