import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CallLink from "@/components/CallLink";
import RelatedServices from "@/components/RelatedServices";
import { AREA_LINKS, AREA_PAGE_MAP, AREA_PAGES } from "@/lib/areas";
import {
  BASE_URL,
  BUSINESS_NAME,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_RAW,
} from "@/lib/seo";

type AreaPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return AREA_PAGES.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: AreaPageProps): Metadata {
  const area = AREA_PAGE_MAP[params.slug];

  if (!area) {
    return {
      title: "Arlington Area Locksmith Service",
      description: "24/7 emergency locksmith service across Arlington VA.",
    };
  }

  const pageUrl = `${BASE_URL}/areas/${area.slug}`;

  return {
    title: area.title,
    description: area.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: area.title,
      description: area.description,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: "/images/keys-in-lock.jpg",
          alt: `${area.areaName} Arlington VA emergency locksmith service`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: area.title,
      description: area.description,
      images: ["/images/keys-in-lock.jpg"],
    },
  };
}

const primaryServiceLinks = [
  {
    href: "/services/emergency-locksmith-arlington-va",
    label: "Emergency locksmith Arlington VA",
  },
  { href: "/services/car-lockout-arlington", label: "Car lockout Arlington" },
  {
    href: "/services/residential-locksmith-arlington",
    label: "Residential locksmith Arlington",
  },
  {
    href: "/services/commercial-storefront-lockout",
    label: "Commercial locksmith Arlington",
  },
  {
    href: "/services/key-extraction-lock-repair",
    label: "Key extraction lock repair Arlington",
  },
  {
    href: "/services/storefront-lock-repair-arlington-va",
    label: "Storefront lock repair Arlington VA",
  },
];

const universalServiceList = [
  "Emergency lockouts for homes, apartments, offices, and storefronts",
  "Residential locksmith service including rekeying and deadbolt replacement",
  "Commercial locksmith service including storefront lock repair and panic bar repair",
  "Car lockout support and broken key extraction in Arlington neighborhoods",
  "Lock repair, key extraction, and emergency door hardware troubleshooting",
  "Fast mobile response with clear phone-first dispatch updates",
];

export default function AreaPage({ params }: AreaPageProps) {
  const area = AREA_PAGE_MAP[params.slug];

  if (!area) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/areas/${area.slug}`;

  const areaLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": `${pageUrl}#locksmith`,
    name: BUSINESS_NAME,
    url: pageUrl,
    telephone: BUSINESS_PHONE_RAW,
    areaServed: {
      "@type": "Place",
      name: `${area.areaName}, Arlington VA`,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "$$",
  };

  const areaServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${area.areaName} Locksmith Service`,
    serviceType: [
      "Emergency locksmith",
      "Residential locksmith",
      "Commercial locksmith",
      "Car lockout service",
      "Key extraction",
      "Lock repair",
      "Emergency door hardware service",
    ],
    url: pageUrl,
    areaServed: {
      "@type": "Place",
      name: `${area.areaName}, Arlington VA`,
    },
    provider: {
      "@type": "Locksmith",
      name: BUSINESS_NAME,
      telephone: BUSINESS_PHONE_RAW,
      url: `${BASE_URL}/`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${area.areaName} Locksmith Services`,
      itemListElement: primaryServiceLinks.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.label,
          url: `${BASE_URL}${service.href}`,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaLocalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Arlington Area Locksmith Service
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">{area.h1}</h1>
          <p className="text-gray-300 text-lg max-w-4xl mb-8">{area.heroIntro}</p>

          <div className="flex flex-wrap gap-3 mb-6">
            <CallLink
              label={`Call Now — ${BUSINESS_PHONE_DISPLAY}`}
              location={`area-${area.slug}-hero`}
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold px-8 py-3.5 rounded-xl transition-colors"
            />
            <Link
              href="/services/emergency-locksmith-arlington-va"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              Emergency Locksmith Arlington VA
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            Landmarks we frequently support: {area.landmarks.join(", ")}.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
            Emergency Locksmith Support in {area.areaName}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">{area.contextLead}</p>
          <p className="text-gray-700 leading-relaxed mb-5">{area.residentialFocus}</p>
          <p className="text-gray-700 leading-relaxed mb-5">{area.commercialFocus}</p>
          <p className="text-gray-700 leading-relaxed mb-8">{area.automotiveFocus}</p>

          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <p className="text-gray-800 mb-3">
              Need urgent help in {area.areaName}? Calling is faster than waiting.
            </p>
            <CallLink
              label={`Call ${BUSINESS_PHONE_DISPLAY} for ${area.areaName} Dispatch`}
              location={`area-${area.slug}-mid-cta`}
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
            What We Handle in {area.areaName}, Arlington VA
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            {area.responseFlow}
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            We regularly coordinate service around {area.landmarks.join(", ")}, while also serving
            nearby neighborhoods like {area.nearbyAreas.join(", ")}. If your issue is time-sensitive,
            call {BUSINESS_PHONE_DISPLAY} and we will route the nearest available locksmith.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {universalServiceList.map((item) => (
              <article key={item} className="rounded-xl bg-white border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900">{item}</h3>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-10">
            <h3 className="text-xl font-extrabold text-gray-900 mb-3">
              Why Local Call-First Locksmith Service Matters in {area.areaName}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In {area.areaName}, emergency calls usually happen when timing is already tight: an
              early commute, a delayed opening, a late-night return, or an urgent vehicle lockout.
              Calling first gives dispatch the details needed to send the right technician instead
              of guessing on-site. That saves time and helps avoid unnecessary rework.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We support homeowners, renters, drivers, business teams, and property managers across
              Arlington with practical locksmith solutions focused on real access issues. Whether
              you need emergency locksmith Arlington VA help, residential lock repair, commercial
              storefront lock service, car lockout support, or key extraction, our process remains
              simple: call, confirm details, dispatch, and restore access as safely as possible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If this is an active lockout, call {BUSINESS_PHONE_DISPLAY} now. Quick contact is
              usually the difference between a short interruption and a prolonged access problem.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-10">
            <h3 className="text-xl font-extrabold text-gray-900 mb-3">
              Typical Locksmith Scenarios We Handle in {area.areaName}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many calls in {area.areaName} start with a lockout and then reveal a second issue,
              such as a worn key, a misaligned strike, or hardware that has been failing for weeks.
              That is why our response is not limited to simply opening the door. We also inspect
              whether the lock can keep working safely after entry and explain when repair, rekey,
              or replacement is the better long-term decision.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Residential clients often need home lockout help plus rekeying after key loss.
              Commercial clients may need storefront access restored before opening and emergency
              door hardware stabilized before staff arrives. Drivers may need car lockout support,
              then key extraction if a damaged key fails again. Our Arlington process is designed to
              solve both immediate access and root-cause lock reliability in the same service visit
              whenever practical.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If your situation is urgent, call {BUSINESS_PHONE_DISPLAY}. A clear call with your
              location and lock type helps us dispatch faster and arrive ready to resolve the issue.
            </p>
          </div>

          <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Service Links for {area.areaName}</h3>
          <div className="flex flex-wrap gap-2">
            {primaryServiceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-amber-50 border border-amber-200 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-amber-100 transition-colors"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Nearby Arlington Neighborhood Links
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Looking for a nearby Arlington neighborhood page? Use the links below to compare local
            locksmith coverage and call options across nearby areas.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {AREA_LINKS.map((areaLink) => (
              <Link
                key={areaLink.slug}
                href={`/areas/${areaLink.slug}`}
                className="bg-gray-100 border border-gray-200 text-gray-800 px-3 py-1.5 rounded-lg text-sm font-semibold hover:border-red-300 hover:text-red-700 transition-colors"
              >
                {areaLink.label}
              </Link>
            ))}
          </div>

          <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
            {area.areaName} Locksmith FAQ
          </h3>
          <div className="space-y-3">
            {area.faq.map((item) => (
              <article key={item.question} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">{item.question}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices title={`Related Locksmith Services for ${area.areaName}`} />

      <section className="py-16 sm:py-20 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Need a Locksmith in {area.areaName} Right Now?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Call {BUSINESS_PHONE_DISPLAY} for fast mobile locksmith response in {area.areaName} and
            nearby Arlington neighborhoods.
          </p>
          <CallLink
            label={`Call Now — ${BUSINESS_PHONE_DISPLAY}`}
            location={`area-${area.slug}-final-cta`}
            className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-2xl px-12 py-5 rounded-2xl transition-colors"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
