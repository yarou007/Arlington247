import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "broken-key-removal-arlington-va",
  title: "Broken Key Removal Arlington VA | 24/7 Locksmith Help",
  description:
    "Need broken key removal Arlington VA service? Call (703) 244-0559 for fast key extraction and lock-safe emergency locksmith support.",
  h1: "Broken Key Removal Arlington VA",
  intro:
    "A snapped key can block entry fast. Our locksmith team provides broken key removal in Arlington for homes, cars, offices, and storefront locks.",
  image: "/images/keys-in-lock.jpg",
  imageAlt: "Broken key removal and key extraction in Arlington VA",
  problemTitle: "Why Broken Keys Become Urgent",
  problemText:
    "Broken key fragments can jam the lock, prevent re-entry, and increase cylinder damage if pushed deeper. Many emergency calls start with forced turning or worn keys.",
  solutionTitle: "How We Solve Broken Key Removal",
  solutionText:
    "We use precision extraction tools, inspect lock condition, and explain whether rekeying or lock repair is needed after removal. You get clear pricing before work starts.",
  serviceType: "Broken Key Removal",
  bullets: [
    "Broken key in house lock",
    "Broken key in office door",
    "Car door key removal",
    "Post-extraction lock testing",
    "Rekeying option if key is lost",
    "24/7 emergency dispatch",
  ],
  relatedLinks: [
    { href: "/services/key-extraction-lock-repair", label: "Key extraction Arlington" },
    { href: "/services/residential-locksmith-arlington", label: "Residential locksmith Arlington" },
    { href: "/services/car-lockout-arlington", label: "Car lockout Arlington" },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function BrokenKeyRemovalPage() {
  return <ServiceLandingPage config={config} />;
}
