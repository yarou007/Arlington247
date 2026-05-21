import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "panic-bar-repair-arlington-va",
  title: "Panic Bar Repair Arlington VA | Emergency Exit Hardware",
  description:
    "Panic bar repair Arlington VA for offices and storefronts. Call (703) 244-0559 for emergency locksmith support and exit hardware service.",
  h1: "Panic Bar Repair Arlington VA",
  intro:
    "Faulty panic bars can interrupt business access and create safety risk. We provide emergency panic bar repair across Arlington County.",
  image: "/images/push-bar.jpg",
  imageAlt: "Panic bar repair and emergency exit hardware in Arlington VA",
  problemTitle: "Why Panic Bar Failure Is Serious",
  problemText:
    "When push bars stick or fail to latch, evacuation safety and daily access can be compromised. Commercial properties need immediate correction.",
  solutionTitle: "How We Handle Panic Bar Repairs",
  solutionText:
    "We inspect bar operation, latch response, strike alignment, and door swing, then repair or replace components to restore reliable egress function.",
  serviceType: "Panic Bar Repair",
  bullets: [
    "Push bar not releasing",
    "Latch not retracting",
    "Misaligned strike plates",
    "Storefront emergency egress issues",
    "Exit device hardware replacement",
    "24/7 commercial dispatch",
  ],
  relatedLinks: [
    { href: "/services/emergency-exit-doors", label: "Emergency exit door repair Arlington" },
    {
      href: "/services/storefront-lock-repair-arlington-va",
      label: "Storefront lock repair Arlington",
    },
    {
      href: "/services/commercial-storefront-lockout",
      label: "Commercial locksmith service",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function PanicBarRepairPage() {
  return <ServiceLandingPage config={config} />;
}
