import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "lock-rekeying-arlington-va",
  title: "Lock Rekeying Arlington VA | Residential and Commercial Rekey",
  description:
    "Lock rekeying Arlington VA for homes, condos, offices, and storefronts. Call (703) 244-0559 for fast locksmith dispatch.",
  h1: "Lock Rekeying Arlington VA",
  intro:
    "Need to stop old keys from working without replacing every lock? Our locksmith team provides lock rekeying throughout Arlington VA.",
  image: "/images/door-knob.jpg",
  imageAlt: "Lock rekeying service in Arlington VA",
  problemTitle: "When Rekeying Is the Right Move",
  problemText:
    "After move-ins, lost keys, employee turnover, or tenant changes, existing keys may still grant access. That creates avoidable risk.",
  solutionTitle: "How We Perform Lock Rekeying",
  solutionText:
    "We reset the cylinder pins to match a new key profile, test function, and confirm old keys no longer work. Rekeying is often faster than full lock replacement.",
  serviceType: "Lock Rekeying",
  bullets: [
    "Home rekey after moving",
    "Rental turnover rekey",
    "Office and storefront rekey",
    "Master key planning support",
    "Single-key convenience setup",
    "Emergency rekey dispatch",
  ],
  relatedLinks: [
    { href: "/services/residential-locksmith-arlington", label: "Residential locksmith Arlington" },
    {
      href: "/services/commercial-storefront-lockout",
      label: "Commercial locksmith Arlington",
    },
    {
      href: "/services/deadbolt-replacement-arlington-va",
      label: "Deadbolt replacement Arlington",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function LockRekeyingPage() {
  return <ServiceLandingPage config={config} />;
}
