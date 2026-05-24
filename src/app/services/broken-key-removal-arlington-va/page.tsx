import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "broken-key-removal-arlington-va",
  title: "Broken Key Removal Arlington VA | 24/7 Key Extraction Help",
  description:
    "Need broken key removal in Arlington VA? Call (703) 244-0559 for 24/7 key extraction service, lock repair, and fast emergency locksmith dispatch.",
  h1: "Broken Key Removal Arlington VA",
  intro:
    "A broken key can block entry instantly. Call (703) 244-0559 for fast broken key removal in Arlington. We provide 24/7 key extraction support for homes, offices, storefronts, and many vehicle lock situations.",
  image: "/images/keys-in-lock.jpg",
  imageAlt: "Broken key removal and key extraction in Arlington VA",
  problemTitle: "Why Broken Keys Become Urgent",
  problemText:
    "A key fragment left in the lock can prevent entry, damage internal pins, and increase replacement costs if pushed deeper. Many emergency calls happen after worn keys or forced turning causes sudden breakage.",
  solutionTitle: "How We Remove Broken Keys",
  solutionText:
    "We use precision extraction tools, inspect cylinder condition, and verify lock function after removal. If the lock needs repair, rekeying, or replacement, we explain options before starting additional work.",
  serviceType: "Broken Key Removal",
  bullets: [
    "Broken key extraction from house locks",
    "Office and storefront key fragment removal",
    "Vehicle lock broken key support",
    "Post-extraction lock function testing",
    "Lock repair recommendations when needed",
    "24/7 emergency locksmith dispatch in Arlington",
  ],
  relatedLinks: [
    { href: "/services/key-extraction-lock-repair", label: "Key extraction lock repair Arlington" },
    {
      href: "/services/residential-locksmith-arlington",
      label: "Residential locksmith Arlington",
    },
    { href: "/services/car-lockout-arlington", label: "Car lockout Arlington" },
    {
      href: "/services/storefront-lock-repair-arlington-va",
      label: "Storefront lock repair Arlington",
    },
  ],
  localParagraphs: [
    "Broken key removal Arlington calls often come from apartment doors, office suites, storefront entries, and vehicle locks in high-traffic neighborhoods such as Ballston, Clarendon, Rosslyn, and Crystal City. Fast extraction helps prevent deeper lock damage.",
    "When keys break in the cylinder face, people often try tweezers, glue, or force, which can push fragments further inside. Our process is designed to remove the fragment cleanly and preserve lock function whenever possible.",
    "After extraction, we test the lock and explain whether immediate repair, rekeying, or replacement is needed. Calling (703) 244-0559 is the safest path for urgent key extraction in Arlington VA.",
  ],
  faqItems: [
    {
      question: "Can you remove a broken key without replacing the lock?",
      answer:
        "Often yes. We remove the fragment first and test lock function before recommending any replacement.",
    },
    {
      question: "Do you provide 24/7 broken key removal in Arlington?",
      answer:
        "Yes. We provide 24/7 broken key removal and emergency locksmith response throughout Arlington.",
    },
    {
      question: "Do you handle broken keys in office or storefront locks?",
      answer:
        "Yes. We handle key extraction for residential, commercial, and many vehicle lock situations.",
    },
    {
      question: "Should I call before trying to remove the key myself?",
      answer:
        "Yes. Call (703) 244-0559 to avoid pushing the key deeper and increasing repair costs.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function BrokenKeyRemovalPage() {
  return <ServiceLandingPage config={config} />;
}
