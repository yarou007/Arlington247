import Link from "next/link";
import { notFound } from "next/navigation";
import { AREA_PAGES, getArea } from "@/lib/areas";
import { AREA_LINKS } from "@/lib/navigation";
import { CALL_NUMBER_DISPLAY, DOMAIN } from "@/lib/business";
import { BUSINESS_ID } from "@/lib/seo";
import { pageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
import CopySections from "@/components/CopySections";
import RelatedServices from "@/components/RelatedServices";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return AREA_PAGES.map((area) => ({ slug: area.slug }));
}
export async function generateMetadata({ params }: Props) {
  const area = getArea((await params).slug);
  if (!area) notFound();
  return pageMetadata(
    `/areas/${area.slug}`,
    `${area.name} Locksmith Arlington, VA | ${CALL_NUMBER_DISPLAY}`,
    `Lockout or lock repair in ${area.name}, Arlington, VA? Call ${CALL_NUMBER_DISPLAY} or WhatsApp your location and a photo for mobile service.`,
  );
}
export default async function AreaPage({ params }: Props) {
  const area = getArea((await params).slug);
  if (!area) notFound();
  const path = `/areas/${area.slug}`;
  return (
    <>
      <Breadcrumbs
        items={[{ label: `${area.name}, Arlington, VA`, href: path }]}
      />
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Arlington County, Virginia · Mobile service</p>
          <h1>Locksmith in {area.name}, Arlington, VA</h1>
          <p className="lede">{area.intro}</p>
          <ContactActions path={path} location={`area-${area.slug}-hero`} />
        </div>
      </header>
      <div className="wrap page-body detail-layout">
        <article className="article-content">
          <CopySections sections={area.sections} />
        </article>
        <aside
          className="related-panel"
          aria-label="Services for this neighborhood"
        >
          <RelatedServices slugs={area.services} />
          <p>
            Mobile service at the property or vehicle. There is no walk-in
            office in this neighborhood.
          </p>
          <Link
            href="/advice/locksmith-cost-factors-arlington"
            className="text-link"
          >
            What affects a quote? →
          </Link>
        </aside>
      </div>
      <Faq items={area.faq} title={`${area.name} locksmith questions`} />
      <section className="related-strip">
        <div className="wrap">
          <h2>Nearby service areas</h2>
          <ul>
            {area.nearby.map((slug) => {
              const nearby = AREA_LINKS.find((a) => a.slug === slug);
              return nearby ? (
                <li key={slug}>
                  <Link href={`/areas/${slug}`}>
                    {nearby.name}, Arlington, VA
                  </Link>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </section>
      <CallToAction
        path={path}
        title={`Need help with a lock in ${area.name}?`}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${DOMAIN}${path}#service`,
          name: `Mobile locksmith in ${area.name}, Arlington, VA`,
          serviceType: "Lockouts and lock repair",
          url: `${DOMAIN}${path}`,
          areaServed: { "@type": "Place", name: `${area.name}, Arlington, VA` },
          provider: { "@id": BUSINESS_ID },
        }}
      />
    </>
  );
}
