import Image from "next/image";
import Link from "next/link";
import ContactActions from "@/components/ContactActions";
import Icon from "@/components/Icon";
export default function Hero() {
  return (
    <section className="home-hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">
            Mobile locksmith · Arlington County, Virginia
          </p>
          <h1>Emergency Locksmith in Arlington, VA</h1>
          <p className="lede">
            Locked out or dealing with a broken lock? Mobile help for homes,
            cars and businesses across Arlington County. Call to check
            availability, an arrival estimate and pricing for your address.
          </p>
          <ContactActions location="home-hero" showNumber />
          <p className="hero-area-links">
            <Link href="/areas/ballston-locksmith">Ballston</Link> ·{" "}
            <Link href="/areas/clarendon-locksmith">Clarendon</Link> ·{" "}
            <Link href="/areas/rosslyn-locksmith">Rosslyn</Link> ·{" "}
            <Link href="/areas/crystal-city-locksmith">Crystal City</Link> ·{" "}
            <Link href="/areas">All Arlington service areas →</Link>
          </p>
          <ul className="trust-list">
            <li>
              <Icon name="check" size={18} />
              Mobile service
            </li>
            <li>
              <Icon name="check" size={18} />
              Call or WhatsApp
            </li>
            <li>
              <Icon name="check" size={18} />
              Arlington County
            </li>
          </ul>
        </div>
        <div className="hero-image">
          <Image
            src="/images/night-lock.jpg"
            alt="Close-up of a door lock cylinder"
            fill
            sizes="(max-width: 899px) 1px, 420px"
            fetchPriority="high"
            className="object-cover"
          />
          <div className="hero-image-caption">
            <strong>Home. Car. Business.</strong>A clear next step for your lock
            or door problem.
          </div>
        </div>
      </div>
    </section>
  );
}
