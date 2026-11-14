import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/lib/articles";
import { ARTICLE_LINKS } from "@/lib/navigation";
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
  return ARTICLES.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = ARTICLE_LINKS.find((article) => article.slug === slug);
  if (!entry) notFound();
  return pageMetadata(
    `/advice/${slug}`,
    `${entry.shortTitle} Arlington, VA | ${CALL_NUMBER_DISPLAY}`,
    `${entry.label} in Arlington, VA. Practical next steps. Call ${CALL_NUMBER_DISPLAY} or WhatsApp to discuss your lock or door.`,
  );
}
export default async function AdvicePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  const entry = ARTICLE_LINKS.find((item) => item.slug === slug);
  if (!article || !entry) notFound();
  const path = `/advice/${slug}`;
  const h1 = `${entry.label} in Arlington, VA`;
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Advice", href: "/advice" },
          { label: entry.label, href: path },
        ]}
      />
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">
            Practical guide · Arlington County, Virginia
          </p>
          <h1>{h1}</h1>
          <p className="lede">{article.intro}</p>
          <ContactActions path={path} location="advice-hero" />
        </div>
      </header>
      <div className="wrap page-body detail-layout">
        <article className="article-content">
          <nav aria-label="In this guide" className="toc">
            <h2>In this guide</h2>
            <ul>
              {article.sections.map((section, i) => (
                <li key={section.heading}>
                  <a href={`#section-${i + 1}`}>{section.heading}</a>
                </li>
              ))}
            </ul>
          </nav>
          <CopySections sections={article.sections} />
          {slug === "choose-trustworthy-locksmith" && (
            <section>
              <h2>Check current Virginia requirements</h2>
              <p>
                Use the{" "}
                <a
                  href="https://www.dcjs.virginia.gov/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Virginia Department of Criminal Justice Services
                </a>{" "}
                to find current requirements and credential-verification
                resources. Verify any provider’s claim independently with the
                appropriate issuer.
              </p>
            </section>
          )}
        </article>
        <aside className="related-panel">
          <RelatedServices slugs={article.services} />
          <p>
            Need to show the issue? A location pin and a clear hardware photo
            are useful first details.
          </p>
          <Link href="/advice" className="text-link">
            All advice guides →
          </Link>
        </aside>
      </div>
      <Faq items={article.faq} title="Questions about this guide" />
      <CallToAction path={path} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: h1,
          description: article.intro,
          mainEntityOfPage: `${DOMAIN}${path}`,
          publisher: { "@id": BUSINESS_ID },
        }}
      />
    </>
  );
}
