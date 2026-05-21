import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, PHONE_ARIA_LABEL } from "@/lib/seo";

const reasons = [
  {
    icon: "🔐",
    title: "Licensed and insured locksmith help",
    desc: "You receive professional service from trained technicians focused on safe entry and secure repairs.",
  },
  {
    icon: "💵",
    title: "Upfront pricing before work starts",
    desc: "We explain the work and quote first so you can approve pricing before service begins.",
  },
  {
    icon: "✅",
    title: "No hidden call-out fee",
    desc: "Clear dispatch communication and pricing transparency for emergency and scheduled service calls.",
  },
  {
    icon: "🛠️",
    title: "Non-destructive entry when possible",
    desc: "Our team uses lock-safe methods first to reduce unnecessary damage and avoid avoidable replacements.",
  },
  {
    icon: "🕒",
    title: "24/7 real emergency availability",
    desc: "Day, night, weekends, and holidays. Call any time for emergency locksmith Arlington VA dispatch.",
  },
  {
    icon: "📍",
    title: "Local Arlington service coverage",
    desc: "Mobile service across Arlington VA neighborhoods with practical response routing based on your location.",
  },
  {
    icon: "🚐",
    title: "Clear technician dispatch process",
    desc: "You call, confirm location and issue, then a locksmith is dispatched with the right tools for the job.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Why Arlington Customers Call Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Trusted Emergency Locksmith Service in Arlington VA
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We focus on what matters during a lockout: fast arrival, transparent pricing, and
            secure work that gets you back inside.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-colors duration-200"
            >
              <div className="text-3xl flex-shrink-0 mt-0.5" aria-hidden="true">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={`tel:${BUSINESS_PHONE_RAW}`}
            aria-label={PHONE_ARIA_LABEL}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
