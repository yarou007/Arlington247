import Link from "next/link";
import CallLink from "@/components/CallLink";
import { AREA_LINKS } from "@/lib/areas";
import { BUSINESS_PHONE_DISPLAY } from "@/lib/seo";

const areaHighlights = [
  {
    slug: "ballston-locksmith",
    name: "Ballston locksmith",
    text: "Locked out near Ballston Quarter or a nearby apartment tower? We dispatch mobile locksmith help 24/7.",
  },
  {
    slug: "clarendon-locksmith",
    name: "Clarendon locksmith",
    text: "From late-night lockouts to urgent apartment access in Clarendon, call for fast local dispatch.",
  },
  {
    slug: "rosslyn-locksmith",
    name: "Rosslyn locksmith",
    text: "Rosslyn office towers and condos rely on quick emergency locksmith response for secure re-entry.",
  },
  {
    slug: "crystal-city-locksmith",
    name: "Crystal City locksmith",
    text: "Need lockout support in Crystal City garages or residential buildings? We provide 24/7 phone-first help.",
  },
  {
    slug: "pentagon-city-locksmith",
    name: "Pentagon City locksmith",
    text: "Pentagon City storefronts, residents, and drivers call us for urgent lock repair and lockout service.",
  },
  {
    slug: "courthouse-locksmith",
    name: "Courthouse locksmith",
    text: "Courthouse lockouts and office access issues are prioritized for fast response across Arlington.",
  },
  {
    slug: "shirlington-locksmith",
    name: "Shirlington locksmith",
    text: "Shirlington businesses and residents call us for emergency lockouts, key extraction, and hardware repair.",
  },
  {
    slug: "columbia-pike-locksmith",
    name: "Columbia Pike locksmith",
    text: "Columbia Pike lockouts often need same-day response. We dispatch mobile locksmith support day and night.",
  },
  {
    slug: "westover-locksmith",
    name: "Westover locksmith",
    text: "Westover home and business calls include deadbolt issues, key breakage, and emergency re-entry.",
  },
  {
    slug: "arlington-ridge-locksmith",
    name: "Arlington Ridge locksmith",
    text: "Arlington Ridge calls include residential lockouts, car lockouts, and emergency door hardware service.",
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
            Arlington Neighborhood Locksmith Coverage Pages
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore neighborhood pages below for local service details and call dispatch options in
            Arlington VA.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areaHighlights.map((area) => (
            <article
              id={`area-${area.slug}`}
              key={area.slug}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                <Link href={`/areas/${area.slug}`} className="hover:text-red-700 transition-colors">
                  {area.name}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{area.text}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <Link
                  href={`/areas/${area.slug}`}
                  className="text-red-700 bg-red-50 border border-red-200 px-2 py-1 rounded hover:bg-red-100"
                >
                  Visit {area.name} page
                </Link>
                <Link
                  href="/services/emergency-locksmith-arlington-va"
                  className="text-amber-900 bg-amber-50 border border-amber-200 px-2 py-1 rounded hover:bg-amber-100"
                >
                  Emergency locksmith Arlington VA
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4 text-sm">
            Need fast help in Arlington?
            <span className="font-semibold"> Call now for immediate dispatch.</span>
          </p>
          <CallLink
            label={`Call ${BUSINESS_PHONE_DISPLAY}`}
            location="homepage-service-area"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors duration-200"
          />
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {AREA_LINKS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="text-xs bg-white border border-gray-300 px-2.5 py-1 rounded hover:border-red-300 hover:text-red-700"
              >
                {area.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
