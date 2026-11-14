import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactActions from "@/components/ContactActions";
import CopySections from "@/components/CopySections";
import RelatedServices from "@/components/RelatedServices";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import { BUSINESS_ID } from "@/lib/seo";
import { DOMAIN, CALL_NUMBER_DISPLAY } from "@/lib/business";
import { AREA_LINKS } from "@/lib/navigation";
import { pageMetadata } from "@/lib/metadata";
import type { ServicePageConfig } from "@/lib/services";
export type { ServicePageConfig } from "@/lib/services";
export function buildServiceMetadata(config: ServicePageConfig) {
  return pageMetadata(
    `/services/${config.slug}`,
    `${config.seoTitle} | ${CALL_NUMBER_DISPLAY}`,
    `${config.summary} Call ${CALL_NUMBER_DISPLAY} or WhatsApp.`,
  );
}
export function ServiceLandingPage({ config }: { config: ServicePageConfig }) {
  const path = `/services/${config.slug}`;
  return (
    <>
      <Breadcrumbs items={[{ label: config.seoTitle, href: path }]} />
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">
            Mobile locksmith · Arlington County, Virginia
          </p>
          <h1>{config.h1}</h1>
          <p className="lede">{config.intro}</p>
          <ContactActions path={path} location="service-hero" />
        </div>
      </header>
      <div className="wrap page-body detail-layout">
        <article className="article-content">
          <div className="help-card" style={{ marginBottom: 36 }}>
            <h2>Useful details to share</h2>
            <ul>
              {config.checks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          </div>
          <CopySections sections={config.sections} />
        </article>
        <aside
          className="related-panel"
          aria-label="Related services and advice"
        >
          <RelatedServices slugs={config.related} />
          <p>
            Want to show the problem before arranging a visit? Send a location
            pin, a photo and the type of property on WhatsApp.
          </p>
          <Link href="/advice" className="text-link">
            Lock & door advice →
          </Link>
        </aside>
      </div>
      <Faq items={config.faq} title="About this service" />
      <section className="related-strip">
        <div className="wrap">
          <h2>Service areas in Arlington, VA</h2>
          <ul>
            {AREA_LINKS.map((area) => (
              <li key={area.slug}>
                <Link href={`/areas/${area.slug}`}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CallToAction
        path={path}
        title="Describe the lock, door or access problem."
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${DOMAIN}${path}#service`,
          name: config.h1,
          serviceType: config.seoTitle,
          description: config.summary,
          url: `${DOMAIN}${path}`,
          provider: { "@id": BUSINESS_ID },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Arlington County, Virginia",
          },
        }}
      />
    </>
  );
}
