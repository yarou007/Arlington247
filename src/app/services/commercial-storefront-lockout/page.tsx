import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "commercial-storefront-lockout",
  title: "Commercial Storefront Lockout Arlington VA | 24/7 Business Entry",
  description:
    "Locked out of your business in Arlington VA? Call (703) 244-0559 for 24/7 commercial locksmith service, storefront lockout help and emergency door access.",
  h1: "Commercial Storefront Lockout Arlington VA — 24/7 Business Entry",
  intro:
    "If your office, storefront, or commercial door is locked out in Arlington, call (703) 244-0559 for immediate dispatch. We provide commercial locksmith support for urgent re-entry, lock repair, and emergency door hardware issues.",
  image: "/images/office-latch.jpg",
  imageAlt: "Commercial storefront lockout service in Arlington VA",
  problemTitle: "Why Commercial Lockouts Are High Priority",
  problemText:
    "Business lockouts can interrupt operations, delay staff, block deliveries, and reduce customer trust. Forced entry attempts can also damage storefront hardware, glass-door systems, and expensive locking components.",
  solutionTitle: "How We Restore Business Access",
  solutionText:
    "We verify authorization, assess the lock system, and use lock-safe entry methods when possible. We then address lock repair or hardware issues so your business can reopen with secure, reliable access.",
  serviceType: "Commercial Locksmith",
  bullets: [
    "24/7 storefront and office lockout response",
    "Commercial door lock troubleshooting",
    "Storefront lock repair and cylinder service",
    "Panic bar and exit hardware access support",
    "Emergency rekeying for staff key control",
    "Fast mobile dispatch for Arlington businesses",
  ],
  relatedLinks: [
    {
      href: "/services/storefront-lock-repair-arlington-va",
      label: "Storefront lock repair Arlington VA",
    },
    {
      href: "/services/panic-bar-repair-arlington-va",
      label: "Panic bar repair Arlington VA",
    },
    { href: "/services/emergency-exit-doors", label: "Emergency exit doors Arlington" },
    {
      href: "/services/door-hardware-replacement",
      label: "Door hardware replacement Arlington",
    },
  ],
  localParagraphs: [
    "Commercial locksmith Arlington calls often come from Ballston, Clarendon, Rosslyn, Crystal City, and Pentagon City where business schedules depend on reliable door access. For storefronts and office suites, every lost hour can impact revenue and operations.",
    "We frequently handle narrow-stile storefront locks, office lockouts, panic bar issues, and emergency exit door hardware faults. Our approach is to restore secure re-entry quickly while preserving lock and door function when possible.",
    "If your business is currently locked out, call (703) 244-0559 now. Immediate phone dispatch is faster than waiting and helps prevent avoidable damage from forced entry attempts or improvised fixes.",
  ],
  faqItems: [
    {
      question: "Do you provide 24/7 commercial locksmith service in Arlington VA?",
      answer:
        "Yes. We provide 24/7 commercial locksmith dispatch for office and storefront lockouts throughout Arlington.",
    },
    {
      question: "Can you unlock a storefront door without damage?",
      answer:
        "When possible, we use lock-safe methods first to reduce avoidable damage to storefront doors and hardware.",
    },
    {
      question: "Do you handle panic bar and emergency exit door issues?",
      answer:
        "Yes. We provide panic bar repair, emergency exit hardware troubleshooting, and related commercial door support.",
    },
    {
      question: "Should I call immediately for a business lockout?",
      answer:
        "Yes. Call (703) 244-0559 for the fastest commercial locksmith dispatch and re-entry support in Arlington.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function CommercialStorefrontLockoutPage() {
  return <ServiceLandingPage config={config} />;
}
