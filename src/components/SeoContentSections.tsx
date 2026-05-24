import Link from "next/link";
import CallLink from "@/components/CallLink";
import { BUSINESS_PHONE_DISPLAY } from "@/lib/seo";

type ServiceSpotlight = {
  id: string;
  heading: string;
  problem: string;
  solution: string;
  related: { href: string; label: string }[];
};

const serviceSpotlights: ServiceSpotlight[] = [
  {
    id: "service-emergency-lockout",
    heading: "Emergency Lockout Service Arlington VA",
    problem:
      "If you are locked out in Arlington and need immediate access, waiting on callbacks can waste critical time.",
    solution:
      "Our 24 hour locksmith Arlington dispatch is call-first and routes mobile technicians for fast home, office, and storefront access support.",
    related: [
      {
        href: "/services/emergency-locksmith-arlington-va",
        label: "Emergency locksmith Arlington VA service page",
      },
      { href: "/services/car-lockout-arlington", label: "Car lockout Arlington help" },
    ],
  },
  {
    id: "service-residential-locksmith",
    heading: "Residential Locksmith Arlington VA",
    problem:
      "Homeowners and renters often face late-night lockouts, jammed deadbolts, or damaged cylinders after failed DIY entry.",
    solution:
      "We provide residential locksmith Arlington service with lock-safe entry methods, rekeying options, and clear pricing before work starts.",
    related: [
      {
        href: "/services/residential-locksmith-arlington",
        label: "Residential locksmith Arlington service page",
      },
      { href: "/services/lock-rekeying-arlington-va", label: "Lock rekeying Arlington service" },
    ],
  },
  {
    id: "service-commercial-locksmith",
    heading: "Commercial Locksmith Arlington VA",
    problem:
      "Office lockouts and hardware failures can stop operations, delay staff, and interrupt customer service.",
    solution:
      "Our commercial locksmith Arlington response focuses on secure re-entry, storefront door function, and business continuity.",
    related: [
      {
        href: "/services/commercial-storefront-lockout",
        label: "Commercial locksmith in Ballston and Arlington",
      },
      {
        href: "/services/storefront-lock-repair-arlington-va",
        label: "Storefront lock repair Arlington service",
      },
    ],
  },
  {
    id: "service-car-lockout",
    heading: "Car Lockout Service Arlington VA",
    problem:
      "Drivers in Arlington often lock keys in vehicles at garages, apartment lots, shopping areas, and office buildings.",
    solution:
      "Our car lockout Arlington service uses professional tools for safe vehicle entry and fast dispatch in Crystal City and nearby areas.",
    related: [
      { href: "/services/car-lockout-arlington", label: "Car lockout service page" },
      { href: "/services/broken-key-removal-arlington-va", label: "Broken key removal Arlington page" },
    ],
  },
  {
    id: "service-key-extraction",
    heading: "Key Extraction Arlington VA",
    problem:
      "A stuck key can prevent entry and can damage pins or cylinders if forced further into the lock.",
    solution:
      "Our key extraction Arlington technicians remove fragments with precision tools, then test and restore lock function when possible.",
    related: [
      { href: "/services/key-extraction-lock-repair", label: "Key extraction service page" },
      {
        href: "/services/broken-key-removal-arlington-va",
        label: "Broken key removal Arlington page",
      },
    ],
  },
  {
    id: "service-broken-key-removal",
    heading: "Broken Key Removal Arlington VA",
    problem:
      "Broken key pieces in locks or ignitions can leave you stranded and increase replacement costs if mishandled.",
    solution:
      "We handle broken key removal Arlington calls with lock-safe extraction and practical next steps for rekeying or replacement.",
    related: [
      { href: "/services/key-extraction-lock-repair", label: "Key extraction Arlington page" },
      { href: "/services/lock-rekeying-arlington-va", label: "Lock rekeying Arlington page" },
    ],
  },
  {
    id: "service-storefront-lock-repair",
    heading: "Storefront Lock Repair Arlington VA",
    problem:
      "Misaligned storefront locks and door closers can block opening hours and create safety concerns for staff and customers.",
    solution:
      "We provide storefront lock repair Arlington service for glass-door hardware, latch issues, and urgent access restoration.",
    related: [
      {
        href: "/services/commercial-storefront-lockout",
        label: "Commercial storefront lockout service",
      },
      { href: "/services/panic-bar-repair-arlington-va", label: "Panic bar repair Arlington page" },
    ],
  },
  {
    id: "service-panic-bar-repair",
    heading: "Panic Bar Repair Arlington VA",
    problem:
      "A faulty panic bar can prevent compliant egress and expose businesses to risk during emergencies.",
    solution:
      "Our panic bar repair Arlington service restores operation, checks latching behavior, and supports emergency exit readiness.",
    related: [
      { href: "/services/emergency-exit-doors", label: "Emergency exit door repair page" },
      {
        href: "/services/storefront-lock-repair-arlington-va",
        label: "Storefront lock repair Arlington page",
      },
    ],
  },
  {
    id: "service-door-hardware-replacement",
    heading: "Door Hardware Replacement Arlington VA",
    problem:
      "Worn or broken handles, closers, and locksets can cause repeated lockouts and unreliable door function.",
    solution:
      "Our door hardware replacement Arlington team installs compatible parts and verifies door alignment for secure daily operation.",
    related: [
      { href: "/services/door-hardware-replacement", label: "Door hardware replacement page" },
      { href: "/services/deadbolt-replacement-arlington-va", label: "Deadbolt replacement Arlington page" },
    ],
  },
  {
    id: "service-lock-rekeying",
    heading: "Lock Rekeying Arlington VA",
    problem:
      "Lost keys, tenant turnover, or staff changes can leave old keys active and reduce control over who has access.",
    solution:
      "Lock rekeying Arlington service changes key access without replacing every lock body, helping restore security quickly.",
    related: [
      {
        href: "/services/residential-locksmith-arlington",
        label: "Residential locksmith rekey support",
      },
      {
        href: "/services/commercial-storefront-lockout",
        label: "Commercial locksmith rekey support",
      },
    ],
  },
  {
    id: "service-deadbolt-replacement",
    heading: "Deadbolt Replacement Arlington VA",
    problem:
      "A weak or failing deadbolt can make doors hard to secure and vulnerable after forced-entry attempts.",
    solution:
      "We provide deadbolt replacement Arlington solutions with compatible hardware options and verified lock performance.",
    related: [
      {
        href: "/services/door-hardware-replacement",
        label: "Door hardware replacement service",
      },
      { href: "/services/residential-locksmith-arlington", label: "Residential locksmith support" },
    ],
  },
  {
    id: "service-emergency-exit-door-repair",
    heading: "Emergency Exit Door Repair Arlington VA",
    problem:
      "Exit doors that do not latch or release correctly can create compliance, safety, and access problems.",
    solution:
      "Our emergency exit door repair Arlington service addresses panic hardware, exit latches, and urgent door function issues.",
    related: [
      { href: "/services/emergency-exit-doors", label: "Emergency exit doors service page" },
      { href: "/services/panic-bar-repair-arlington-va", label: "Panic bar repair Arlington page" },
    ],
  },
];

const ctaBlocks = [
  {
    title: "Locked Out Right Now?",
    description: `Call ${BUSINESS_PHONE_DISPLAY} for 24/7 emergency locksmith help in Arlington VA.`,
  },
  {
    title: "Need Fast Help in Arlington?",
    description: "Tap to call now. A mobile locksmith can be dispatched to your location.",
  },
  {
    title: "Business Door or Storefront Lock Problem?",
    description:
      "Call now for commercial locksmith, panic bar and storefront lock repair.",
  },
];

export default function SeoContentSections() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="service-spotlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Service Spotlights
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Emergency Locksmith Arlington VA Service Coverage
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Every service below is designed for phone-call dispatch. If this is urgent, call now
            for immediate help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {serviceSpotlights.map((service) => (
            <article id={service.id} key={service.id} className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.heading}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <span className="font-semibold text-gray-900">Problem:</span> {service.problem}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                <span className="font-semibold text-gray-900">How we help:</span> {service.solution}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.related.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs bg-white border border-gray-300 text-gray-800 px-2.5 py-1 rounded hover:border-red-300 hover:text-red-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <CallLink
                label={`Call Now — ${BUSINESS_PHONE_DISPLAY}`}
                location={`homepage-seo-spotlight-${service.id}`}
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-lg text-sm transition-colors"
              />
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mt-10">
          {ctaBlocks.map((block) => (
            <article key={block.title} className="rounded-2xl bg-gray-900 text-white p-6">
              <h3 className="text-xl font-extrabold mb-2">{block.title}</h3>
              <p className="text-gray-300 mb-4">{block.description}</p>
              <CallLink
                label="Call for Fast Help"
                location={`homepage-seo-cta-${block.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
                className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-4 py-2 rounded-lg transition-colors"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
