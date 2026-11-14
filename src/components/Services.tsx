import Link from "next/link";
import { SERVICE_LINKS } from "@/lib/navigation";
import Icon from "@/components/Icon";
import ContactActions from "@/components/ContactActions";
const descriptions: Record<string, string> = {
  "emergency-locksmith-arlington-va":
    "Locked out of a house, apartment, office or shop? Start with an entry assessment.",
  "car-lockout-arlington":
    "Keys inside the vehicle or a door that won’t unlock? Share the make, model and location.",
  "commercial-storefront-lockout":
    "Help with office and shop access, with authorization and building access arranged.",
  "storefront-lock-repair-arlington-va":
    "A cylinder, latch or door alignment problem that keeps your storefront from securing.",
  "panic-bar-repair-arlington-va":
    "Sticking push bars and unreliable latching on commercial exit hardware.",
  "emergency-exit-doors":
    "Troubleshooting doors that won’t close, latch or release as intended.",
  "residential-locksmith-arlington":
    "Apartment and home lockouts, worn locks and changes to who has a working key.",
  "lock-rekeying-arlington-va":
    "Change which key operates a compatible existing lock after a move or lost key.",
  "deadbolt-replacement-arlington-va":
    "Discuss a suitable replacement for a damaged, worn or unreliable deadbolt.",
  "broken-key-removal-arlington-va":
    "A snapped key left in the cylinder? Stop turning it and request an assessment.",
  "key-extraction-lock-repair":
    "Check the lock after a stuck or broken key, then decide on repair or replacement.",
  "door-hardware-replacement":
    "Replacement options for worn handles, locksets, closers and other door hardware.",
};
export default function Services() {
  return (
    <section className="section section-soft" id="services">
      <div className="wrap">
        <div className="section-intro">
          <p className="eyebrow">Choose the problem</p>
          <h2>Lockout services in Arlington, VA</h2>
          <p>
            Start with the issue you can see. Each service page explains what to
            check, which details to send and what can affect the work. You do
            not need to know the name of your lock before getting in touch.
          </p>
        </div>
        <div className="service-grid">
          {SERVICE_LINKS.map((service) => (
            <article key={service.slug} className="service-card">
              <span className="card-icon">
                <Icon name={service.icon} />
              </span>
              <h3>
                <Link href={`/services/${service.slug}`}>{service.label}</Link>
              </h3>
              <p>{descriptions[service.slug]}</p>
              <Link href={`/services/${service.slug}`} className="text-link">
                Service details <Icon name="arrow" size={18} />
              </Link>
              <ContactActions
                path={`/services/${service.slug}`}
                location={`home-service-${service.slug}`}
                compact
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
