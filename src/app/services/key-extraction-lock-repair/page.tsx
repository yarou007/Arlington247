import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "key-extraction-lock-repair",
  title: "Key Extraction Lock Repair Arlington VA | 24/7 Locksmith Help",
  description:
    "Need key extraction and lock repair in Arlington VA? Call (703) 244-0559 for 24/7 locksmith help, broken key removal and emergency lock service.",
  h1: "Key Extraction and Lock Repair Arlington VA",
  intro:
    "If a key is stuck or broken in your lock, call (703) 244-0559 for fast key extraction and lock repair in Arlington. We provide 24/7 locksmith support for residential, commercial, and vehicle-related lock issues.",
  image: "/images/keys-in-lock.jpg",
  imageAlt: "Key extraction and lock repair in Arlington VA",
  problemTitle: "How Key Extraction Issues Grow Worse",
  problemText:
    "A stuck key fragment can block entry and damage internal lock components if forced deeper. Delayed service or improvised removal attempts can turn a repairable lock into a full replacement case.",
  solutionTitle: "How We Handle Key Extraction and Repair",
  solutionText:
    "We remove key fragments with precision tools, inspect cylinder integrity, and confirm lock function after extraction. If needed, we provide immediate lock repair, rekeying, or replacement options.",
  serviceType: "Key Extraction Lock Repair",
  bullets: [
    "Broken key extraction from residential locks",
    "Commercial lock key extraction and repair",
    "Stuck key removal and cylinder testing",
    "Lock repair after extraction",
    "Rekeying options after key failure",
    "24/7 emergency locksmith dispatch Arlington",
  ],
  relatedLinks: [
    {
      href: "/services/broken-key-removal-arlington-va",
      label: "Broken key removal Arlington",
    },
    { href: "/services/car-lockout-arlington", label: "Car lockout Arlington" },
    {
      href: "/services/residential-locksmith-arlington",
      label: "Residential locksmith Arlington",
    },
    {
      href: "/services/storefront-lock-repair-arlington-va",
      label: "Storefront lock repair Arlington",
    },
  ],
  localParagraphs: [
    "Key extraction lock repair Arlington calls are common in apartments, offices, storefronts, and high-traffic entry points where keys and cylinders experience frequent wear. Areas like Ballston, Clarendon, Rosslyn, and Crystal City see these issues often.",
    "When a key breaks, speed matters. Quick extraction helps protect lock internals and improves the chance of simple repair. Our technicians evaluate the lock immediately after removal to prevent repeat failures.",
    "If your key is currently stuck, call (703) 244-0559 for fast dispatch. Phone-first support is safer and more efficient than DIY extraction methods that may increase damage.",
  ],
  faqItems: [
    {
      question: "Can you remove a key fragment without replacing the lock?",
      answer:
        "In many cases, yes. We extract the key first and test the lock before recommending replacement.",
    },
    {
      question: "Do you provide 24/7 key extraction in Arlington VA?",
      answer:
        "Yes. We provide around-the-clock key extraction and emergency lock repair support in Arlington.",
    },
    {
      question: "Do you repair the lock after key extraction?",
      answer:
        "Yes. We inspect the lock and provide repair or rekeying options when needed after extraction.",
    },
    {
      question: "What should I do if my key breaks in the lock now?",
      answer:
        "Call (703) 244-0559 right away for professional key extraction and lock repair dispatch.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function KeyExtractionLockRepairPage() {
  return <ServiceLandingPage config={config} />;
}
