import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "lock-rekeying-arlington-va",
  title: "Lock Rekeying Arlington VA | Residential & Commercial Rekey",
  description:
    "Need lock rekeying in Arlington VA? Call (703) 244-0559 for residential and commercial rekey service, key control updates and fast locksmith dispatch.",
  h1: "Lock Rekeying Arlington VA",
  intro:
    "Need to stop old keys from working without replacing every lock? Call (703) 244-0559 for lock rekeying in Arlington. We provide residential and commercial rekey service with fast mobile dispatch.",
  image: "/images/door-knob.jpg",
  imageAlt: "Lock rekeying service in Arlington VA",
  problemTitle: "When Rekeying Is the Right Option",
  problemText:
    "After move-ins, tenant turnover, key loss, or staff changes, old keys may still work. That creates avoidable security risk and uncertainty about who can access the property.",
  solutionTitle: "How We Perform Lock Rekeying",
  solutionText:
    "We reset internal pin combinations to match new keys, confirm old keys no longer work, and test each lock for smooth operation. Rekeying is often faster and more cost-effective than full lock replacement.",
  serviceType: "Lock Rekeying",
  bullets: [
    "Home and apartment lock rekeying",
    "Condo and townhome key control updates",
    "Office and storefront rekey service",
    "Rekeying after lost or unreturned keys",
    "Master-key planning support",
    "Emergency rekey dispatch across Arlington",
  ],
  relatedLinks: [
    {
      href: "/services/residential-locksmith-arlington",
      label: "Residential locksmith Arlington",
    },
    {
      href: "/services/commercial-storefront-lockout",
      label: "Commercial locksmith Arlington",
    },
    {
      href: "/services/deadbolt-replacement-arlington-va",
      label: "Deadbolt replacement Arlington",
    },
    {
      href: "/services/broken-key-removal-arlington-va",
      label: "Broken key removal Arlington",
    },
  ],
  localParagraphs: [
    "Lock rekeying Arlington VA requests are common after lease transitions, move-ins, roommate changes, and employee turnover. Neighborhoods with dense apartment and mixed-use properties often need quick rekey updates to restore key control.",
    "For residential clients, rekeying can improve security without replacing every lock body. For commercial clients, rekeying helps maintain authorization control while minimizing downtime and hardware replacement costs.",
    "If you need same-day key control changes, call (703) 244-0559. We provide fast locksmith dispatch across Arlington for urgent rekeying and related lock repair support.",
  ],
  faqItems: [
    {
      question: "Can rekeying be done instead of replacing locks?",
      answer:
        "In many cases, yes. Rekeying updates key access while keeping existing compatible lock hardware.",
    },
    {
      question: "Do you provide emergency rekey service in Arlington?",
      answer:
        "Yes. We provide emergency lock rekeying dispatch throughout Arlington for urgent key-control needs.",
    },
    {
      question: "Can you rekey office and storefront locks?",
      answer:
        "Yes. We provide commercial rekeying for offices, storefronts, and other business properties.",
    },
    {
      question: "What number should I call for lock rekeying in Arlington VA?",
      answer:
        "Call (703) 244-0559 for residential and commercial lock rekeying service in Arlington.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function LockRekeyingPage() {
  return <ServiceLandingPage config={config} />;
}
