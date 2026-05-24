import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "residential-locksmith-arlington",
  title: "Residential Locksmith Arlington VA | 24/7 Home Lockout Help",
  description:
    "Need a residential locksmith in Arlington VA? Call (703) 244-0559 for 24/7 home lockout help, rekeying, deadbolt replacement and lock repair.",
  h1: "Residential Locksmith Arlington VA — 24/7 Home Lockout Help",
  intro:
    "Locked out of your home, apartment, or condo in Arlington? Call (703) 244-0559 for fast residential locksmith dispatch. We handle emergency lockouts, lock repair, rekeying, deadbolt service, and key extraction across Arlington neighborhoods.",
  image: "/images/door-knob.jpg",
  imageAlt: "Residential locksmith service in Arlington VA",
  problemTitle: "Common Residential Lock Problems",
  problemText:
    "Home lockouts, sticky deadbolts, broken keys, and worn cylinders can compromise safety and convenience. These issues often happen at inconvenient hours when families need immediate access and clear locksmith support.",
  solutionTitle: "How Residential Locksmith Service Works",
  solutionText:
    "We confirm your Arlington location, evaluate the lock issue, and prioritize non-destructive entry when possible. We then provide lock repair, rekeying, or replacement options with transparent pricing before work begins.",
  serviceType: "Residential Locksmith",
  bullets: [
    "24/7 home lockout service Arlington",
    "Apartment and condo lockout entry",
    "Residential lock repair and cylinder troubleshooting",
    "Lock rekeying after move-in or key loss",
    "Deadbolt replacement and security upgrades",
    "Broken key extraction for house locks",
  ],
  relatedLinks: [
    { href: "/services/lock-rekeying-arlington-va", label: "Lock rekeying Arlington VA" },
    {
      href: "/services/deadbolt-replacement-arlington-va",
      label: "Deadbolt replacement Arlington VA",
    },
    {
      href: "/services/emergency-locksmith-arlington-va",
      label: "Emergency locksmith Arlington VA",
    },
    {
      href: "/services/broken-key-removal-arlington-va",
      label: "Broken key removal Arlington VA",
    },
  ],
  localParagraphs: [
    "Residential locksmith Arlington calls come from single-family homes, apartment communities, and condo buildings across Ballston, Clarendon, Courthouse, Crystal City, and surrounding neighborhoods. Each property type has different lock systems, so quick phone triage helps dispatch the right tools.",
    "Common residential issues include lockouts during move-ins, lost key situations, deadbolts that stop aligning with the strike plate, and worn keys that snap under torque. We focus on restoring safe access first, then helping residents choose repair, rekeying, or replacement options.",
    "If you need urgent home access, calling (703) 244-0559 is faster than waiting or trying forced entry methods that can damage doors, frames, and hardware. Our dispatch process is built around immediate response and clear next steps for Arlington homeowners and renters.",
  ],
  faqItems: [
    {
      question: "Do you provide 24/7 residential locksmith service in Arlington?",
      answer:
        "Yes. We provide 24/7 residential locksmith service in Arlington for emergency lockouts and urgent home lock issues.",
    },
    {
      question: "Can you unlock my home without damaging the lock?",
      answer:
        "When possible, we use non-destructive entry techniques first and explain all options before replacement is considered.",
    },
    {
      question: "Do you rekey locks after move-ins or key loss?",
      answer:
        "Yes. We provide residential lock rekeying to help homeowners and renters control key access without replacing every lock.",
    },
    {
      question: "Should I call right away for a home lockout in Arlington?",
      answer:
        "Yes. Call (703) 244-0559 for the fastest residential locksmith dispatch in Arlington VA.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function ResidentialLocksmithPage() {
  return <ServiceLandingPage config={config} />;
}
