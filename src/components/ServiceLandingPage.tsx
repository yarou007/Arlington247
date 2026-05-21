import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BASE_URL,
  BUSINESS_NAME,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_RAW,
  PHONE_ARIA_LABEL,
} from "@/lib/seo";

type LinkItem = {
  href: string;
  label: string;
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
  };

  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="relative bg-gray-900 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={config.image} alt={config.imageAlt} fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            Arlington Locksmith Service
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5">{config.h1}</h1>
          <p className="text-gray-300 text-lg max-w-3xl mb-8">{config.intro}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${BUSINESS_PHONE_RAW}`}
              aria-label={PHONE_ARIA_LABEL}
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold px-6 py-3 rounded-xl transition-colors"
            >
              Call Now — {BUSINESS_PHONE_DISPLAY}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Back to Home
            </Link>
          </div>
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
            <a
              href={`tel:${BUSINESS_PHONE_RAW}`}
              aria-label={PHONE_ARIA_LABEL}
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              Call for Fast Help
            </a>
          </article>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Arlington Service Details
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {config.bullets.map((item) => (
              <article key={item} className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900">{item}</h3>
              </article>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Related Arlington Services</h3>
            <div className="flex flex-wrap gap-2 mb-4">
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
            <a
              href={`tel:${BUSINESS_PHONE_RAW}`}
              aria-label={PHONE_ARIA_LABEL}
              className="inline-flex items-center bg-gray-900 hover:bg-red-600 text-white font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              Need immediate dispatch? Call {BUSINESS_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export type { ServicePageConfig };
