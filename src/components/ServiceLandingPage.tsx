import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallLink from "@/components/CallLink";
import RelatedServices from "@/components/RelatedServices";
import { AREA_LINKS } from "@/lib/areas";
import {
  BASE_URL,
  BUSINESS_NAME,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_RAW,
} from "@/lib/seo";

type LinkItem = {
  href: string;
  label: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ServicePageConfig = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  problemTitle: string;
  problemText: string;
  solutionTitle: string;
  solutionText: string;
  serviceType: string;
  relatedLinks: LinkItem[];
  bullets: string[];
  localParagraphs: string[];
  faqItems: FaqItem[];
};

export function buildServiceMetadata(config: ServicePageConfig): Metadata {
  const pageUrl = `${BASE_URL}/services/${config.slug}`;

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: pageUrl,
      images: [
        {
          url: config.image,
          alt: config.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [config.image],
    },
  };
}

export function ServiceLandingPage({ config }: { config: ServicePageConfig }) {
  const pageUrl = `${BASE_URL}/services/${config.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.h1,
    serviceType: config.serviceType,
    areaServed: {
      "@type": "Place",
      name: "Arlington VA",
    },
    provider: {
      "@type": "Locksmith",
      name: BUSINESS_NAME,
      telephone: BUSINESS_PHONE_RAW,
      url: `${BASE_URL}/`,
    },
    url: pageUrl,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${config.serviceType} in Arlington VA`,
      itemListElement: config.bullets.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item,
        },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative bg-gray-900 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image src={config.image} alt={config.imageAlt} fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Arlington Locksmith Service
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">{config.h1}</h1>
          <p className="text-gray-300 text-lg max-w-4xl mb-8">{config.intro}</p>

          <div className="flex flex-wrap gap-3 mb-4">
            <CallLink
              label={`Call Now — ${BUSINESS_PHONE_DISPLAY}`}
              location={`service-${config.slug}-hero`}
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold px-7 py-3.5 rounded-xl transition-colors"
            />
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            Call from mobile or copy this number for fast dispatch: {BUSINESS_PHONE_DISPLAY}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <article className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">{config.problemTitle}</h2>
            <p className="text-gray-700 leading-relaxed">{config.problemText}</p>
          </article>

          <article className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">{config.solutionTitle}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{config.solutionText}</p>
            <CallLink
              label="Call for Fast Help"
              location={`service-${config.slug}-problem-solution`}
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-lg transition-colors"
            />
          </article>
        </div>
      </section>

      <section className="py-10 bg-red-50 border-y border-red-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 mb-4">
            Need immediate {config.serviceType.toLowerCase()} support in Arlington VA?
          </p>
          <CallLink
            label={`Call Now — ${BUSINESS_PHONE_DISPLAY}`}
            location={`service-${config.slug}-mid-callout`}
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-extrabold px-8 py-3 rounded-xl transition-colors"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            {config.serviceType} Service Details in Arlington
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {config.bullets.map((item) => (
              <article key={item} className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900">{item}</h3>
              </article>
            ))}
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <h3 className="text-xl font-extrabold text-gray-900 mb-3">
              Local Arlington Context for {config.serviceType}
            </h3>
            <div className="space-y-4 mb-6">
              {config.localParagraphs.map((paragraph, index) => (
                <p key={`${config.slug}-local-${index}`} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <CallLink
              label="Need immediate dispatch? Call now"
              location={`service-${config.slug}-local-context`}
              className="inline-flex items-center bg-gray-900 hover:bg-red-600 text-white font-bold px-5 py-2.5 rounded-lg transition-colors"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
            Related Service and Area Links
          </h2>
          <p className="text-gray-700 mb-5">
            Compare related locksmith services or open a neighborhood page for location-specific
            dispatch details.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {config.relatedLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm bg-amber-50 border border-amber-200 text-amber-900 px-3 py-1.5 rounded-md hover:bg-amber-100"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {AREA_LINKS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="text-sm bg-gray-100 border border-gray-200 text-gray-800 px-3 py-1.5 rounded-md hover:border-red-300 hover:text-red-700"
              >
                {area.label}
              </Link>
            ))}
          </div>

          <h3 className="text-2xl font-extrabold text-gray-900 mb-4">FAQ</h3>
          <div className="space-y-3">
            {config.faqItems.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices title="More Arlington Locksmith Services" />

      <section className="py-16 sm:py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Need {config.serviceType} in Arlington Right Now?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Call {BUSINESS_PHONE_DISPLAY} for immediate dispatch and clear, phone-first service.
          </p>
          <CallLink
            label={`Call ${BUSINESS_PHONE_DISPLAY}`}
            location={`service-${config.slug}-final-cta`}
            className="inline-flex items-center bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-2xl px-12 py-5 rounded-2xl transition-colors"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export type { ServicePageConfig, FaqItem };
