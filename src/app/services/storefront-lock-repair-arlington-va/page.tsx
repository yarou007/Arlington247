import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "storefront-lock-repair-arlington-va",
  title: "Storefront Lock Repair Arlington VA | Commercial Locksmith Service",
  description:
    "Need storefront lock repair in Arlington VA? Call (703) 244-0559 for 24/7 commercial locksmith service, emergency lock repair and door hardware support.",
  h1: "Storefront Lock Repair Arlington VA",
  intro:
    "When storefront locks fail, business operations slow down immediately. Call (703) 244-0559 for fast commercial locksmith dispatch in Arlington for lock repair, hardware troubleshooting, and emergency access support.",
  image: "/images/office-latch.jpg",
  imageAlt: "Storefront lock repair service in Arlington VA",
  problemTitle: "Common Storefront Lock Failures",
  problemText:
    "Storefront doors can fail from misaligned latches, worn cylinders, damaged strikes, and heavy daily use. If not handled quickly, these issues can create lockouts, delayed opening times, and security risks.",
  solutionTitle: "How We Repair Storefront Locks",
  solutionText:
    "We evaluate the lock body, latch, alignment, and connected door hardware to identify the true failure point. Then we repair or replace the affected component with clear pricing before work starts.",
  serviceType: "Storefront Lock Repair",
  bullets: [
    "Glass-door storefront lock troubleshooting",
    "Narrow stile cylinder service and replacement",
    "Latch and strike alignment adjustments",
    "After-hours storefront lockout support",
    "Door closer and lock coordination checks",
    "Emergency repair dispatch across Arlington",
  ],
  relatedLinks: [
    {
      href: "/services/commercial-storefront-lockout",
      label: "Commercial storefront lockout Arlington",
    },
    { href: "/services/panic-bar-repair-arlington-va", label: "Panic bar repair Arlington" },
    {
      href: "/services/door-hardware-replacement",
      label: "Door hardware replacement Arlington",
    },
    { href: "/services/emergency-exit-doors", label: "Emergency exit doors Arlington" },
  ],
  localParagraphs: [
    "Storefront lock repair Arlington VA calls are common in Ballston, Clarendon, Courthouse, Rosslyn, Crystal City, and Pentagon City where retail and office doors operate for long hours. High-cycle use accelerates wear on cylinders, latches, and connected hardware.",
    "When doors are hard to lock or unlock, business owners often try temporary fixes that can make alignment worse. Our repair-first approach identifies the root issue and restores consistent operation before a minor hardware problem becomes a full lockout.",
    "If your storefront is stuck, unsecured, or difficult to open, call (703) 244-0559 for fast dispatch. Prompt service helps reduce downtime, protect your property, and keep customer access reliable.",
  ],
  faqItems: [
    {
      question: "Do you provide emergency storefront lock repair in Arlington?",
      answer:
        "Yes. We provide emergency storefront lock repair and commercial locksmith support throughout Arlington.",
    },
    {
      question: "Can you fix a storefront lock without replacing everything?",
      answer:
        "Often yes. We inspect the lock and hardware first and recommend repair when it is practical and secure.",
    },
    {
      question: "Do you handle panic bar and exit hardware problems too?",
      answer:
        "Yes. We handle panic bar repair and emergency exit hardware service for Arlington businesses.",
    },
    {
      question: "How do I request immediate storefront lock help?",
      answer:
        "Call (703) 244-0559 for direct commercial locksmith dispatch in Arlington VA.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function StorefrontLockRepairPage() {
  return <ServiceLandingPage config={config} />;
}
