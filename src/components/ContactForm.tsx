import Link from "next/link";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, PHONE_ARIA_LABEL } from "@/lib/seo";

const quickActions = [
  {
    title: "Locked out of home or apartment",
    desc: "Tell us your Arlington location and lock type for immediate dispatch.",
    link: "/services/residential-locksmith-arlington",
    label: "Residential locksmith Arlington",
  },
  {
    title: "Business door or storefront lock problem",
    desc: "Call for commercial locksmith, panic bar, and storefront lock repair support.",
    link: "/services/commercial-storefront-lockout",
    label: "Commercial locksmith in Ballston",
  },
  {
    title: "Car lockout emergency",
    desc: "Need vehicle entry in Arlington? We dispatch mobile car lockout service 24/7.",
    link: "/services/car-lockout-arlington",
    label: "Car lockout service in Crystal City",
  },
];

export default function ContactForm() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="call-dispatch">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Call-Only Dispatch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Skip Forms. Call for Fast Help.
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            For emergencies, calling is the fastest option. We do not use a web request form for
            urgent locksmith dispatch.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {quickActions.map((action) => (
            <article
              key={action.title}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-2">{action.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">{action.desc}</p>
              <Link
                href={action.link}
                className="text-sm font-semibold text-red-700 hover:text-red-900 underline underline-offset-2"
              >
                {action.label}
              </Link>
            </article>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Fast Help in Arlington?</h3>
          <p className="text-gray-300 mb-6">
            Tap to call now. A mobile locksmith can be dispatched to your location.
          </p>
          <a
            href={`tel:${BUSINESS_PHONE_RAW}`}
            aria-label={PHONE_ARIA_LABEL}
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-xl px-10 py-4 rounded-xl phone-pulse transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now — {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
