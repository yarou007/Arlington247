import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "storefront-lock-repair-arlington-va",
  title: "Storefront Lock Repair Arlington VA | Commercial Locksmith",
  description:
    "Storefront lock repair Arlington VA for glass doors, latch issues, and urgent commercial lock problems. Call (703) 244-0559 for fast help.",
  h1: "Storefront Lock Repair Arlington VA",
  intro:
    "When your storefront lock fails, business slows down fast. We provide call-first commercial locksmith dispatch for Arlington retail and office entries.",
  image: "/images/office-latch.jpg",
  imageAlt: "Storefront lock repair service in Arlington VA",
  problemTitle: "Common Storefront Lock Problems",
  problemText:
    "Glass door cylinders, latch alignment, and worn closers can leave doors hard to secure or impossible to open at critical business hours.",
  solutionTitle: "How We Repair Storefront Locks",
  solutionText:
    "Our technicians diagnose the lock body, latch, and hardware interaction, then repair or replace failing parts with minimal downtime for your business.",
  serviceType: "Storefront Lock Repair",
  bullets: [
    "Storefront deadbolt issues",
    "Narrow stile cylinder replacement",
    "Latch and strike alignment",
    "After-hours business lockout response",
    "Door closer and handle coordination",
    "Upfront commercial pricing",
  ],
  relatedLinks: [
    {
      href: "/services/commercial-storefront-lockout",
      label: "Commercial locksmith Arlington",
    },
    { href: "/services/panic-bar-repair-arlington-va", label: "Panic bar repair Arlington" },
    {
      href: "/services/door-hardware-replacement",
      label: "Door hardware replacement Arlington",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function StorefrontLockRepairPage() {
  return <ServiceLandingPage config={config} />;
}
