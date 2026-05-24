import CallLink from "@/components/CallLink";
import { BUSINESS_PHONE_DISPLAY } from "@/lib/seo";

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

        <CallLink
          label={`Call Now — ${BUSINESS_PHONE_DISPLAY}`}
          location="homepage-final-cta"
          className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-2xl sm:text-3xl px-10 sm:px-14 py-5 sm:py-6 rounded-2xl phone-pulse transition-colors duration-200"
        />

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
