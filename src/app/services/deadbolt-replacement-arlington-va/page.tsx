import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "deadbolt-replacement-arlington-va",
  title: "Deadbolt Replacement Arlington VA | 24/7 Locksmith Service",
  description:
    "Need deadbolt replacement in Arlington VA? Call (703) 244-0559 for emergency locksmith support, lock upgrades, and fast residential or commercial dispatch.",
  h1: "Deadbolt Replacement Arlington VA",
  intro:
    "If your deadbolt sticks, slips, or fails to lock reliably, call (703) 244-0559 for deadbolt replacement service in Arlington. We provide fast mobile locksmith support for homes, condos, and business entries.",
  image: "/images/door-knob.jpg",
  imageAlt: "Deadbolt replacement service in Arlington VA",
  problemTitle: "When Deadbolts Need Replacement",
  problemText:
    "Worn cylinders, forced-entry stress, misaligned strikes, and outdated hardware can make deadbolts unreliable. Ignoring these signs can lead to repeated lockouts and weaker door security.",
  solutionTitle: "How We Replace Deadbolts Safely",
  solutionText:
    "We inspect lock compatibility, door condition, and strike alignment, then install and test replacement hardware for consistent operation. If repair is possible, we explain options before replacement.",
  serviceType: "Deadbolt Replacement",
  bullets: [
    "Single-cylinder deadbolt replacement",
    "Double-cylinder deadbolt replacement",
    "Deadbolt upgrades after key loss",
    "Post-lockout deadbolt repair or replacement",
    "Strike plate and alignment correction",
    "Residential and light-commercial deadbolt service",
  ],
  relatedLinks: [
    {
      href: "/services/door-hardware-replacement",
      label: "Door hardware replacement Arlington",
    },
    { href: "/services/lock-rekeying-arlington-va", label: "Lock rekeying Arlington" },
    {
      href: "/services/residential-locksmith-arlington",
      label: "Residential locksmith Arlington",
    },
    {
      href: "/services/emergency-locksmith-arlington-va",
      label: "Emergency locksmith Arlington VA",
    },
  ],
  localParagraphs: [
    "Deadbolt replacement Arlington calls are common in both older homes and newer apartment units where alignment shifts or heavy use create locking issues. A deadbolt that no longer seats correctly can increase security risk and daily frustration.",
    "Our technicians review door edge fit, frame alignment, strike condition, and cylinder performance before replacing hardware. This prevents repeat issues caused by underlying alignment problems that simple lock swaps do not fix.",
    "If your lock is failing now, call (703) 244-0559 for fast locksmith dispatch in Arlington VA. Prompt deadbolt service helps restore reliable security before a full lockout happens.",
  ],
  faqItems: [
    {
      question: "Can you replace deadbolts the same day in Arlington?",
      answer:
        "In many cases, yes. We provide fast mobile deadbolt replacement dispatch across Arlington neighborhoods.",
    },
    {
      question: "Should I replace a deadbolt that is hard to turn?",
      answer:
        "Yes. Hard-turning deadbolts often signal wear or misalignment that can lead to lockout or failure.",
    },
    {
      question: "Do you also offer lock rekeying after deadbolt work?",
      answer:
        "Yes. We can discuss rekeying options to improve key control after replacement.",
    },
    {
      question: "How do I request deadbolt replacement in Arlington VA?",
      answer:
        "Call (703) 244-0559 for emergency or scheduled deadbolt service in Arlington.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function DeadboltReplacementPage() {
  return <ServiceLandingPage config={config} />;
}
