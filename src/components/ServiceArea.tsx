import Link from "next/link";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, PHONE_ARIA_LABEL } from "@/lib/seo";

const areas = [
  {
    id: "area-arlington-va",
    name: "Arlington VA",
    text: "Need a locksmith near me Arlington search result you can call right now? We dispatch across Arlington VA 24/7 for lockouts and urgent lock repairs.",
  },
  {
    id: "area-ballston",
    name: "Ballston",
    text: "Locked out near Ballston Quarter or Wilson Boulevard? Call our Arlington locksmith team for fast mobile help.",
  },
  {
    id: "area-clarendon",
    name: "Clarendon",
    text: "From Clarendon nightlife lockouts to apartment entry issues, we provide fast after-hours locksmith dispatch.",
  },
  {
    id: "area-courthouse",
    name: "Courthouse",
    text: "If you are locked out near Courthouse offices and apartments, we route a technician for immediate access support.",
  },
  {
    id: "area-crystal-city",
    name: "Crystal City",
    text: "Car lockout Arlington calls in Crystal City parking decks and streets are handled with mobile response and safe entry methods.",
  },
  {
    id: "area-pentagon-city",
    name: "Pentagon City",
    text: "Business and residential lockouts in Pentagon City get priority dispatch for quick re-entry and lock stabilization.",
  },
  {
    id: "area-rosslyn",
    name: "Rosslyn",
    text: "Need emergency locksmith Arlington VA help in Rosslyn towers or condos? We provide 24/7 call-first support.",
  },
  {
    id: "area-shirlington",
    name: "Shirlington",
    text: "From Shirlington storefronts to residential complexes, we handle lockouts, key extraction, and lock repairs.",
  },
  {
    id: "area-columbia-pike",
    name: "Columbia Pike",
    text: "Columbia Pike residents and business owners call us for fast local lockout service and urgent door hardware issues.",
  },
  {
    id: "area-cherrydale",
    name: "Cherrydale",
    text: "Cherrydale home lockouts and rekey requests are covered by our mobile locksmith units day and night.",
  },
  {
    id: "area-lyon-village",
    name: "Lyon Village",
    text: "Lyon Village homeowners call for residential locksmith Arlington support when deadbolts jam or keys break.",
  },
  {
    id: "area-bluemont",
    name: "Bluemont",
    text: "Bluemont service includes emergency lockouts, broken key removal, and practical lock repair options.",
  },
  {
    id: "area-westover",
    name: "Westover",
    text: "Need fast help in Westover? Our dispatch team routes local technicians for emergency entry and lock service.",
  },
  {
    id: "area-arlington-ridge",
    name: "Arlington Ridge",
    text: "Arlington Ridge calls often involve home lockouts and lock upgrades; we provide call-first response with upfront pricing.",
  },
  {
    id: "area-penrose",
    name: "Penrose",
    text: "Penrose residents and small businesses use our 24 hour locksmith Arlington coverage for urgent access problems.",
  },
  {
    id: "area-douglas-park",
    name: "Douglas Park",
    text: "Douglas Park lockouts, damaged lock cylinders, and key extraction issues are handled by mobile locksmith dispatch.",
  },
  {
    id: "area-fairlington",
    name: "Fairlington",
    text: "Fairlington townhome and condo communities call for lock rekeying, lockouts, and deadbolt replacement support.",
  },
  {
    id: "area-aurora-highlands",
    name: "Aurora Highlands",
    text: "Aurora Highlands commercial and residential clients call us for emergency locksmith help and secure re-entry.",
  },
];

export default function ServiceArea() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Emergency Locksmith Service Across Arlington County
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We provide 24/7 emergency locksmith Arlington VA coverage with mobile dispatch to
            local neighborhoods and business districts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area) => (
            <article
              id={area.id}
              key={area.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{area.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{area.text}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <Link
                  href="/services/emergency-locksmith-arlington-va"
                  className="text-red-700 bg-red-50 border border-red-200 px-2 py-1 rounded hover:bg-red-100"
                >
                  Emergency lockout service in Arlington
                </Link>
                <Link
                  href="/services/car-lockout-arlington"
                  className="text-amber-900 bg-amber-50 border border-amber-200 px-2 py-1 rounded hover:bg-amber-100"
                >
                  Car lockout service in {area.name}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4 text-sm">
            Need fast help in Arlington?
            <span className="font-semibold"> Tap to call now.</span>
          </p>
          <a
            href={`tel:${BUSINESS_PHONE_RAW}`}
            aria-label={PHONE_ARIA_LABEL}
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors duration-200"
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
