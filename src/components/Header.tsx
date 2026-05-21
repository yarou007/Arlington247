import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, PHONE_ARIA_LABEL } from "@/lib/seo";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-900 shadow-lg" aria-label="Site header">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <span className="text-xl sm:text-2xl flex-shrink-0" aria-hidden="true">
                🔑
              </span>
              <span className="text-white font-bold text-sm sm:text-xl tracking-tight truncate">
                arlington247<span className="text-red-500">lockrepair</span>
              </span>
            </div>

            <div className="hidden lg:block text-center">
              <p className="text-gray-300 text-sm font-medium">
                24/7 Emergency Locksmith Arlington VA
                <span className="mx-2 text-red-400">•</span>
                Fast Local Dispatch
                <span className="mx-2 text-red-400">•</span>
                Upfront Pricing
              </p>
            </div>

            <a
              href={`tel:${BUSINESS_PHONE_RAW}`}
              aria-label={PHONE_ARIA_LABEL}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="hidden sm:inline">Call Now — {BUSINESS_PHONE_DISPLAY}</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </div>
      </header>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe" aria-label="Mobile call bar">
        <a
          href={`tel:${BUSINESS_PHONE_RAW}`}
          aria-label={PHONE_ARIA_LABEL}
          className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold text-lg py-4 w-full phone-pulse"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Tap to Call 24/7 — {BUSINESS_PHONE_DISPLAY}
        </a>
      </div>
    </>
  );
}
