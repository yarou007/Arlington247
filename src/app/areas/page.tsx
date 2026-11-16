import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocalCoverage from "@/components/LocalCoverage";
import ContactActions from "@/components/ContactActions";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { AREA_LINKS } from "@/lib/navigation";
import { CALL_NUMBER_DISPLAY, DOMAIN } from "@/lib/business";

export const metadata = pageMetadata(
  "/areas",
  `Locksmith Areas Arlington, VA | ${CALL_NUMBER_DISPLAY}`,
  `Find mobile locksmith help by neighborhood and street in Arlington, VA. Home, car and business lockouts. Call ${CALL_NUMBER_DISPLAY} for availability.`,
);

export default function AreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Arlington service areas", href: "/areas" }]} />
      <header className="page-hero"><div className="wrap">
        <p className="eyebrow">Mobile service · Arlington County, Virginia</p>
        <h1>Locksmith service areas in Arlington, VA</h1>
        <p className="lede">Find help for a home, car or business by neighborhood. Share your street number, nearest cross street and the entrance or parking level so we can discuss the right location.</p>
        <ContactActions path="/areas" location="areas-hero" />
      </div></header>
      <section className="section"><div className="wrap">
        <div className="section-intro">
          <h2>Arlington neighborhoods and street corridors</h2>
          <p>Mobile service covers Arlington County, including addresses beyond the neighborhood and street examples below. These streets help identify your location; they are not office addresses. There is no walk-in shop. Call to confirm availability and an arrival estimate for your exact address.</p>
        </div>
        <LocalCoverage />
        <div className="section-intro" style={{ marginTop: 36 }}>
          <h2>Elsewhere in Arlington County?</h2>
          <p>Service also covers Virginia Square, Cherrydale, Lyon Village, Lyon Park, Aurora Highlands, Penrose, Buckingham, Bluemont and East Falls Church, along with other Arlington neighborhoods. Send your full Arlington address and nearest cross street for a home, car or business request.</p>
          <Link href="/services/emergency-locksmith-arlington-va" className="text-link">Request help with an Arlington lockout →</Link>
        </div>
      </div></section>
      <section className="section section-soft"><div className="wrap">
        <h2>Choose the help you need</h2>
        <ul className="area-list">
          <li><Link href="/services/emergency-locksmith-arlington-va">Home or business lockout</Link></li>
          <li><Link href="/services/car-lockout-arlington">Keys locked in a car</Link></li>
          <li><Link href="/services/lock-rekeying-arlington-va">Lock rekeying after a move or lost key</Link></li>
          <li><Link href="/services/storefront-lock-repair-arlington-va">Storefront lock repair</Link></li>
        </ul>
        <p>If you are near a county boundary, give the full address and locality when calling. A road name alone may refer to more than one place.</p>
      </div></section>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "CollectionPage",
        "@id": `${DOMAIN}/areas#page`, url: `${DOMAIN}/areas`,
        name: "Locksmith service areas in Arlington, VA",
        mainEntity: { "@type": "ItemList", itemListElement: AREA_LINKS.map((area, index) => ({
          "@type": "ListItem", position: index + 1, name: `${area.name}, Arlington, VA`, url: `${DOMAIN}/areas/${area.slug}`,
        })) },
      }} />
    </>
  );
}
