import Link from "next/link";
import { ARTICLE_LINKS } from "@/lib/navigation";
import { CALL_NUMBER_DISPLAY } from "@/lib/business";
import { ARTICLES } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
import CallToAction from "@/components/CallToAction";
export const metadata = pageMetadata(
  "/advice",
  `Lock & Door Advice Arlington, VA | ${CALL_NUMBER_DISPLAY}`,
  `Practical lockout, locksmith cost and door hardware guides for Arlington, VA. Call ${CALL_NUMBER_DISPLAY} or WhatsApp for help.`,
);
export default function AdviceIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Lock & door advice", href: "/advice" }]} />
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Know the next step</p>
          <h1>Lock & Door Advice for Arlington, VA</h1>
          <p className="lede">
            Practical guides for lockouts, quotes and door hardware decisions.
            For a problem happening now, call to describe it or send a photo and
            location on WhatsApp.
          </p>
          <ContactActions path="/advice" location="advice-index-hero" />
        </div>
      </header>
      <section className="section">
        <div className="wrap article-grid">
          {ARTICLE_LINKS.map((item) => (
            <article className="article-card" key={item.slug}>
              <h2>
                <Link href={`/advice/${item.slug}`}>{item.label}</Link>
              </h2>
              <p>{ARTICLES.find((a) => a.slug === item.slug)!.intro}</p>
              <Link className="text-link" href={`/advice/${item.slug}`}>
                Read the guide →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CallToAction path="/advice" />
    </>
  );
}
