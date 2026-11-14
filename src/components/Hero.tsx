import Image from "next/image";
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
            Mobile help for home, car and business lockouts.
          </p>
          <ContactActions location="home-hero" />
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
