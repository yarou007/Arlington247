import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "deadbolt-replacement-arlington-va",
  title: "Deadbolt Replacement Arlington VA | Emergency Locksmith Help",
  description:
    "Deadbolt replacement Arlington VA for damaged, worn, or outdated locks. Call (703) 244-0559 for fast locksmith dispatch.",
  h1: "Deadbolt Replacement Arlington VA",
  intro:
    "If your deadbolt sticks, slips, or fails to secure the door, our Arlington locksmith team can replace it with a compatible solution quickly.",
  image: "/images/door-knob.jpg",
  imageAlt: "Deadbolt replacement service in Arlington VA",
  problemTitle: "Signs a Deadbolt Needs Replacement",
  problemText:
    "Damaged cylinders, worn keys, forced-entry stress, and alignment drift can make deadbolts unreliable and hard to lock securely.",
  solutionTitle: "How We Replace Deadbolts",
  solutionText:
    "We inspect the door edge and strike alignment, recommend hardware options, and install a new deadbolt with function testing before completion.",
  serviceType: "Deadbolt Replacement",
  bullets: [
    "Single-cylinder deadbolt replacement",
    "Double-cylinder deadbolt replacement",
    "High-security deadbolt upgrades",
    "Post-break-in deadbolt service",
    "Door frame strike alignment",
    "Residential and commercial options",
  ],
  relatedLinks: [
    {
      href: "/services/door-hardware-replacement",
      label: "Door hardware replacement Arlington",
    },
    { href: "/services/lock-rekeying-arlington-va", label: "Lock rekeying Arlington" },
    { href: "/services/residential-locksmith-arlington", label: "Residential locksmith Arlington" },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function DeadboltReplacementPage() {
  return <ServiceLandingPage config={config} />;
}
