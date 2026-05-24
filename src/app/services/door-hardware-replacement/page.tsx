import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "door-hardware-replacement",
  title: "Door Hardware Replacement Arlington VA | Emergency Locksmith Help",
  description:
    "Need door hardware replacement in Arlington VA? Call (703) 244-0559 for locksets, closers, handles, panic hardware and emergency locksmith service.",
  h1: "Door Hardware Replacement Arlington VA",
  intro:
    "If your door hardware is worn, broken, or unreliable, call (703) 244-0559 for fast service in Arlington. We replace locksets, closers, handles, and related components for residential and commercial properties.",
  image: "/images/commercial-bar.jpg",
  imageAlt: "Door hardware replacement service in Arlington VA",
  problemTitle: "Why Worn Door Hardware Causes Repeated Lock Issues",
  problemText:
    "Failing handles, loose closers, and misaligned lock hardware can lead to recurring lockouts, poor door closure, and security concerns. Temporary fixes usually fail quickly under daily use.",
  solutionTitle: "How We Replace Door Hardware",
  solutionText:
    "We inspect existing hardware and door alignment, then install compatible replacement components and test full operation. We focus on smooth daily use, secure locking, and long-term reliability.",
  serviceType: "Door Hardware Replacement",
  bullets: [
    "Residential and commercial door hardware replacement",
    "Lockset, handle, and deadbolt component replacement",
    "Door closer and latch alignment correction",
    "Emergency storefront and office hardware service",
    "Panic hardware and exit component replacement",
    "Fast Arlington mobile locksmith dispatch",
  ],
  relatedLinks: [
    {
      href: "/services/storefront-lock-repair-arlington-va",
      label: "Storefront lock repair Arlington",
    },
    {
      href: "/services/panic-bar-repair-arlington-va",
      label: "Panic bar repair Arlington",
    },
    {
      href: "/services/deadbolt-replacement-arlington-va",
      label: "Deadbolt replacement Arlington",
    },
    {
      href: "/services/emergency-exit-doors",
      label: "Emergency exit doors Arlington",
    },
  ],
  localParagraphs: [
    "Door hardware replacement Arlington service is frequently requested for aging residential doors, high-use office entries, and storefront systems in neighborhoods like Ballston, Clarendon, Crystal City, and Rosslyn.",
    "Many lockout and access problems originate in hardware alignment, not just the key or cylinder. Replacing worn components and correcting alignment together often prevents repeat service calls and improves day-to-day security.",
    "If your door is hard to secure or open, call (703) 244-0559 for same-day locksmith support in Arlington. Fast hardware service can prevent urgent lockouts and reduce longer-term repair costs.",
  ],
  faqItems: [
    {
      question: "Do you replace door hardware for homes and businesses in Arlington?",
      answer:
        "Yes. We provide door hardware replacement for residential and commercial properties across Arlington.",
    },
    {
      question: "Can hardware replacement fix repeated lockouts?",
      answer:
        "Often yes. Worn or misaligned hardware is a common cause of recurring access problems.",
    },
    {
      question: "Do you handle emergency door hardware calls?",
      answer:
        "Yes. We provide emergency locksmith dispatch for urgent door hardware and lock issues.",
    },
    {
      question: "How do I request door hardware replacement in Arlington VA?",
      answer:
        "Call (703) 244-0559 for fast dispatch and an on-site evaluation.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function DoorHardwareReplacementPage() {
  return <ServiceLandingPage config={config} />;
}
