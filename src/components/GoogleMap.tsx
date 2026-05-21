import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, PHONE_ARIA_LABEL } from "@/lib/seo";

export default function GoogleMap() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Dispatch Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Arlington Locksmith Mobile Service Area
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We operate as a service-area business and dispatch mobile locksmith technicians across
            Arlington County for emergency calls.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49638.7!2d-77.1375!3d38.8816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c5c5c5c5c5%3A0x1234567890abcdef!2sArlington%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arlington County locksmith service area map"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3" aria-hidden="true">
                📞
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Call Dispatch</h3>
              <a
                href={`tel:${BUSINESS_PHONE_RAW}`}
                aria-label={PHONE_ARIA_LABEL}
                className="text-red-600 font-bold text-xl hover:text-red-800"
              >
                {BUSINESS_PHONE_DISPLAY}
              </a>
              <p className="text-gray-500 text-sm mt-1">Available 24/7 for emergency locksmith service</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3" aria-hidden="true">
                📍
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Coverage</h3>
              <p className="text-gray-600">Arlington VA and nearby neighborhoods</p>
              <p className="text-gray-500 text-sm mt-1">Mobile service dispatch, no walk-in office listed</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3" aria-hidden="true">
                ⏰
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Hours</h3>
              <p className="text-gray-700 font-semibold text-green-700">Open 24 Hours / 7 Days</p>
              <p className="text-gray-500 text-sm mt-1">Including nights, weekends, and holidays</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={`tel:${BUSINESS_PHONE_RAW}`}
            aria-label={PHONE_ARIA_LABEL}
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call for Immediate Dispatch
          </a>
        </div>
      </div>
    </section>
  );
}
