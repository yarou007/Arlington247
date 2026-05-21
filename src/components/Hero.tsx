import Image from "next/image";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, PHONE_ARIA_LABEL } from "@/lib/seo";

const trustBadges = [
  "Licensed & Insured",
  "24/7 Emergency Service",
  "Fast Local Response",
  "Upfront Pricing",
  "No-Damage Entry When Possible",
];

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] sm:min-h-[88vh] flex flex-col items-center justify-center overflow-hidden">
      <Image
        src="/images/keys-in-lock.jpg"
        alt="Emergency locksmith Arlington VA responding to a lockout"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-green-600/90 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" aria-hidden="true" />
          Dispatch Team Available 24/7 in Arlington County
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-shadow mb-4 sm:mb-6">
          Locked Out in Arlington VA? 24/7 Emergency Locksmith Help
        </h1>

        <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 text-shadow">
          Fast mobile locksmith service for homes, cars, offices and storefronts across
          Arlington County. Call now for immediate dispatch.
        </p>

        <a
          href={`tel:${BUSINESS_PHONE_RAW}`}
          aria-label={PHONE_ARIA_LABEL}
          className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold text-lg sm:text-2xl px-6 sm:px-12 py-3.5 sm:py-5 rounded-xl phone-pulse transition-colors duration-200 mb-6 sm:mb-10"
        >
          <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call Now — {BUSINESS_PHONE_DISPLAY}
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 justify-center gap-2 sm:gap-3 text-white text-xs sm:text-sm">
          {trustBadges.map((text) => (
            <div
              key={text}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg"
            >
              <span aria-hidden="true">✓</span>
              <span className="font-semibold">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
