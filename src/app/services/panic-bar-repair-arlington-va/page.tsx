import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "panic-bar-repair-arlington-va",
  title: "Panic Bar Repair Arlington VA | Emergency Exit Hardware Service",
  description:
    "Need panic bar repair in Arlington VA? Call (703) 244-0559 for emergency locksmith support, exit device repair, and commercial door hardware service.",
  h1: "Panic Bar Repair Arlington VA",
  intro:
    "If a panic bar sticks, fails to latch, or does not release correctly, call (703) 244-0559 for fast service in Arlington. We provide commercial locksmith support for emergency exit hardware and door access issues.",
  image: "/images/push-bar.jpg",
  imageAlt: "Panic bar repair and emergency exit hardware in Arlington VA",
  problemTitle: "Why Panic Bar Failures Need Immediate Attention",
  problemText:
    "Faulty panic hardware can create safety concerns, disrupt daily operations, and increase liability risk for businesses. Delayed repair can also turn a minor hardware issue into a full door failure.",
  solutionTitle: "How We Repair Panic Bars",
  solutionText:
    "We inspect bar movement, latch action, strike alignment, and connected hardware, then repair or replace failing components. The goal is reliable egress performance and secure daily operation.",
  serviceType: "Panic Bar Repair",
  bullets: [
    "Panic bar not releasing correctly",
    "Latch not retracting or re-latching",
    "Exit device strike alignment repair",
    "Commercial emergency egress troubleshooting",
    "Push bar hardware replacement",
    "24/7 commercial locksmith dispatch Arlington",
  ],
  relatedLinks: [
    { href: "/services/emergency-exit-doors", label: "Emergency exit doors Arlington" },
    {
      href: "/services/storefront-lock-repair-arlington-va",
      label: "Storefront lock repair Arlington",
    },
    {
      href: "/services/commercial-storefront-lockout",
      label: "Commercial locksmith Arlington",
    },
    {
      href: "/services/door-hardware-replacement",
      label: "Door hardware replacement Arlington",
    },
  ],
  localParagraphs: [
    "Panic bar repair Arlington requests are common in offices, retail storefronts, and multi-tenant properties where exit doors cycle heavily. Areas like Ballston, Clarendon, Rosslyn, and Crystal City often need urgent hardware adjustments to maintain safe flow.",
    "We frequently correct latch alignment, worn components, and door-closer interactions that keep bars from operating consistently. Addressing the full door-and-hardware system is often the key to preventing repeat failures.",
    "If your panic device is unreliable now, call (703) 244-0559 for rapid dispatch. Fast service helps restore both emergency egress confidence and daily access control.",
  ],
  faqItems: [
    {
      question: "Do you repair panic bars for Arlington businesses?",
      answer:
        "Yes. We provide panic bar repair and emergency exit hardware service for commercial properties in Arlington.",
    },
    {
      question: "Can a panic bar issue cause a lockout?",
      answer:
        "Yes. Faulty latch behavior can prevent normal access and may require immediate locksmith service.",
    },
    {
      question: "Do you provide after-hours panic bar repair?",
      answer:
        "Yes. We provide 24/7 commercial locksmith response for urgent panic bar and exit hardware issues.",
    },
    {
      question: "How do I request panic bar repair in Arlington VA?",
      answer:
        "Call (703) 244-0559 for immediate dispatch and commercial door hardware support.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function PanicBarRepairPage() {
  return <ServiceLandingPage config={config} />;
}
