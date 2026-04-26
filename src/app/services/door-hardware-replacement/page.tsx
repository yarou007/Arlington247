import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/services/door-hardware-replacement";

export const metadata: Metadata = {
  title: "Door Hardware Replacement Arlington, VA",
  description:
    "Replace broken knobs, levers, deadbolts, hinges, and closers in Arlington, VA. Residential and commercial hardware service with same-day availability.",
  alternates: {
    canonical: PAGE_URL,
  },
};

const hardwareItems = [
  "Entry knobs and keyed levers",
  "Deadbolts and high-security cylinders",
  "Door hinges and strike plates",
  "Commercial closers and pull handles",
  "Mailbox, gate, and utility room locks",
];

export default function DoorHardwareReplacementPage() {
  return (
    <main>
      <Header />

      <section className="bg-gray-900 text-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Residential And Commercial
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
            Door Hardware Replacement in Arlington, VA
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Worn, loose, or broken door hardware can leave your property unsafe and hard
            to secure. We replace the right components in one visit so your door closes,
            latches, and locks correctly.
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
            Hardware We Replace
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {hardwareItems.map((item) => (
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
              Upfront recommendations, no guesswork
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We explain what failed, what needs replacement, and what can be repaired.
              You approve pricing before any work starts. Then we install, test, and make
              sure everything operates smoothly before we leave.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
