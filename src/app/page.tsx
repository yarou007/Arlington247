import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactGuide from "@/components/ContactGuide";
import ContactActions from "@/components/ContactActions";
import PriceFactors from "@/components/PriceFactors";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import LocalCoverage from "@/components/LocalCoverage";
import Icon from "@/components/Icon";
import { ARTICLE_LINKS } from "@/lib/navigation";
import { CALL_NUMBER_DISPLAY } from "@/lib/business";
import { ARLINGTON_ZIP_CODES } from "@/lib/areas";
import { HOME_FAQ } from "@/lib/seo";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "/",
  `Emergency Locksmith Arlington, VA | ${CALL_NUMBER_DISPLAY}`,
  `Home, car or business lockout in Arlington, VA? Call ${CALL_NUMBER_DISPLAY} or WhatsApp a photo for lock, storefront and panic bar help.`,
);
const segments = [
  {
    title: "Apartments & condos",
    pain: "Your front door is locked, but getting into the building is a separate problem.",
    benefits: [
      "Explain both building and unit access.",
      "Discuss the lock condition before replacement.",
      "Coordinate with your landlord or property manager.",
    ],
    path: "/services/residential-locksmith-arlington",
  },
  {
    title: "Drivers",
    pain: "Your keys are in the car and the vehicle is in a lot, driveway or garage.",
    benefits: [
      "Identify the exact vehicle and parking level.",
      "Describe a trunk-only or whole-car lockout.",
      "Discuss whether entry or a lock assessment is needed.",
    ],
    path: "/services/car-lockout-arlington",
  },
  {
    title: "Offices & retail",
    pain: "A locked office or failed shop door is interrupting access for your team.",
    benefits: [
      "Separate entry problems from lock failures.",
      "Flag shared-building access restrictions.",
      "Discuss storefront and panic hardware together.",
    ],
    path: "/services/commercial-storefront-lockout",
  },
  {
    title: "Restaurants",
    pain: "A push bar, staff entrance or closing-time lock is not working as intended.",
    benefits: [
      "Identify whether an exit is affected.",
      "Share photos of both sides of the hardware.",
      "Arrange access with the person responsible for the premises.",
    ],
    path: "/services/panic-bar-repair-arlington-va",
  },
  {
    title: "Property managers",
    pain: "Lost keys or a change of occupants means access needs to be reviewed.",
    benefits: [
      "Check which doors share a key.",
      "Compare rekeying with replacing worn hardware.",
      "Coordinate authorized access across units or suites.",
    ],
    path: "/services/lock-rekeying-arlington-va",
  },
];
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ContactGuide />
      <section className="section section-soft">
        <div className="wrap">
          <div className="section-intro">
            <p className="eyebrow">Different doors, different needs</p>
            <h2>Help for the place you need to get into</h2>
            <p>
              A useful first conversation starts with your situation, not a long
              list of lock names. Let us know who can authorize the visit, what
              is locked and whether there is another way to reach the property
              safely.
            </p>
          </div>
          <div className="segment-grid">
            {segments.map((s) => (
              <article key={s.title} className="segment-card">
                <h3>{s.title}</h3>
                <p>{s.pain}</p>
                <ul>
                  {s.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <ContactActions
                  path={s.path}
                  location={`home-segment-${s.path.split("/").pop()}`}
                  compact
                />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Before a visit</p>
            <h2>A simpler way to explain the problem</h2>
            <ol className="numbered-list">
              <li>
                <h3>Say where you are</h3>
                <p>
                  Give the neighborhood, street address and any separate
                  building, garage or rear entrance. A location pin helps when
                  the vehicle or entrance is not visible from the street.
                </p>
              </li>
              <li>
                <h3>Describe what changed</h3>
                <p>
                  Were the keys left inside, did a key snap, or does the lock
                  turn without opening the door? Say whether you can still enter
                  another way and whether the door can currently be secured.
                </p>
              </li>
              <li>
                <h3>Confirm the next step</h3>
                <p>
                  Ask about current availability, an arrival estimate and the
                  work being proposed. Arrange proof that you are authorized to
                  request access. Keep a record of any scope and price you
                  agree.
                </p>
              </li>
            </ol>
          </div>
          <div className="help-card">
            <h3>How to spot a legitimate locksmith</h3>
            <p>
              Ask for the business name and who will attend. Ask how to verify
              any licence or registration claimed, request identification and
              make sure the business name matches the service you arranged.
            </p>
            <p>
              Before work starts, ask for an explanation of the proposed entry
              method or repair and its price. Be cautious if someone insists
              every lock must be drilled or pressures you into replacing
              hardware without assessing it.
            </p>
            <Link
              href="/advice/choose-trustworthy-locksmith"
              className="text-link"
            >
              Read the locksmith-check guide →
            </Link>
          </div>
        </div>
      </section>
      <PriceFactors />
      <section id="areas" className="section">
        <span id="service-area" />
        <div className="wrap">
          <div className="section-intro">
            <p className="eyebrow">Service area</p>
            <h2>Across Arlington County, Virginia</h2>
            <p>
              Mobile service covers Arlington County, including streets beyond
              the examples below, with no walk-in office. Choose your
              neighborhood for practical notes on building entrances, vehicle
              locations and the details to send when you request a visit.
            </p>
          </div>
          <LocalCoverage />
          <p><Link href="/areas" className="text-link">Find your neighborhood and street corridor →</Link></p>
          <p className="zip-list">
            Arlington ZIP codes: {ARLINGTON_ZIP_CODES.join(" · ")}.
          </p>
        </div>
      </section>
      <Faq
        items={HOME_FAQ}
        title="Emergency locksmith questions in Arlington, VA"
      />
      <section className="section section-soft">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Useful while you decide</p>
              <h2>Lock & door advice</h2>
            </div>
            <Link className="text-link" href="/advice">
              All guides →
            </Link>
          </div>
          <div className="article-grid">
            {ARTICLE_LINKS.slice(0, 3).map((a) => (
              <article className="article-card" key={a.slug}>
                <p className="eyebrow">Practical guide</p>
                <h3>{a.label}</h3>
                <Link className="text-link" href={`/advice/${a.slug}`}>
                  Read the guide <Icon name="arrow" size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
