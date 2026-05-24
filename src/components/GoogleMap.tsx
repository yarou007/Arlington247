import CallLink from "@/components/CallLink";
import { BUSINESS_PHONE_DISPLAY } from "@/lib/seo";

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
              <CallLink
                label={BUSINESS_PHONE_DISPLAY}
                location="homepage-map-card"
                className="text-red-600 font-bold text-xl hover:text-red-800"
              />
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
          <CallLink
            label="Call for Immediate Dispatch"
            location="homepage-map-final"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
          />
        </div>
      </div>
    </section>
  );
}
