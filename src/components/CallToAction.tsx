import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, PHONE_ARIA_LABEL } from "@/lib/seo";

export default function CallToAction() {
  return (
    <section className="py-20 sm:py-24 bg-red-600 text-white text-center" id="call-now">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-5xl mb-6" aria-hidden="true">
          🔑
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Locked Out Right Now?
        </h2>
        <p className="text-red-100 text-lg sm:text-xl mb-10 max-w-xl mx-auto">
          Call {BUSINESS_PHONE_DISPLAY} for 24/7 emergency locksmith help in Arlington VA.
        </p>

        <a
          href={`tel:${BUSINESS_PHONE_RAW}`}
          aria-label={PHONE_ARIA_LABEL}
          className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-2xl sm:text-3xl px-10 sm:px-14 py-5 sm:py-6 rounded-2xl phone-pulse transition-colors duration-200"
        >
          <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call Now — {BUSINESS_PHONE_DISPLAY}
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-red-100 text-sm sm:text-base">
          <span>Licensed & Insured</span>
          <span>24/7 Emergency Service</span>
          <span>Fast Local Response</span>
          <span>Upfront Pricing</span>
        </div>
      </div>
    </section>
  );
}
