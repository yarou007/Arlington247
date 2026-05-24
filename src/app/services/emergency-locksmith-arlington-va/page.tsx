import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "emergency-locksmith-arlington-va",
  title: "Emergency Locksmith Arlington VA | 24/7 Lockout Help",
  description:
    "Locked out in Arlington VA? Call (703) 244-0559 for 24/7 emergency locksmith service, lockout help, key extraction, lock repair and fast mobile dispatch.",
  h1: "Emergency Locksmith Arlington VA — 24/7 Lockout Help",
  intro:
    "If you are locked out of your home, office, storefront, or vehicle in Arlington, call (703) 244-0559 right away. We provide 24/7 emergency locksmith dispatch with practical, phone-first support across Arlington neighborhoods.",
  image: "/images/night-lock.jpg",
  imageAlt: "Emergency locksmith service in Arlington VA at night",
  problemTitle: "Why Emergency Lockouts Need Fast Action",
  problemText:
    "Waiting too long can turn a lockout into a larger security and scheduling problem. Residential lockouts can leave families outside at night, business lockouts can delay opening, and car lockouts can disrupt commutes and urgent plans.",
  solutionTitle: "How Our Emergency Locksmith Team Helps",
  solutionText:
    "We verify location, lock type, and urgency by phone, then dispatch the nearest available technician with the right tools for non-destructive entry when possible, key extraction, lock repair, or emergency hardware support.",
  serviceType: "Emergency Locksmith",
  bullets: [
    "24/7 emergency lockout service Arlington",
    "Home, apartment, and condo lockout entry",
    "Office and storefront emergency access",
    "Car lockout assistance and key recovery",
    "Broken key extraction and lock testing",
    "Emergency lock repair and rekey options",
  ],
  relatedLinks: [
    { href: "/services/car-lockout-arlington", label: "Car lockout Arlington" },
    {
      href: "/services/residential-locksmith-arlington",
      label: "Residential locksmith Arlington",
    },
    {
      href: "/services/commercial-storefront-lockout",
      label: "Commercial locksmith Arlington",
    },
    {
      href: "/services/key-extraction-lock-repair",
      label: "Key extraction lock repair Arlington",
    },
  ],
  localParagraphs: [
    "Emergency locksmith Arlington VA calls come from every part of Arlington County, including Ballston, Clarendon, Rosslyn, Crystal City, Pentagon City, and Courthouse. Because each neighborhood has different traffic flow and building access patterns, phone dispatch details matter. Clear location info helps route the fastest available technician.",
    "For residential calls, we often see apartment and condo lockouts, worn deadbolts, and lock cylinders that stop turning after heavy use. For commercial calls, common issues include storefront lock failures, office suite lockouts, panic bar faults, and emergency exit door hardware problems. We focus on secure re-entry first, then practical next steps.",
    "For vehicle access issues, car lockout Arlington requests usually involve keys locked inside, trunk lockouts, or broken key fragments. If a key breaks, we provide key extraction and test lock function before leaving. Calling (703) 244-0559 is the fastest way to request emergency locksmith help instead of waiting and risking more damage.",
  ],
  faqItems: [
    {
      question: "How fast can an emergency locksmith arrive in Arlington VA?",
      answer:
        "Arrival depends on traffic and active call volume, but emergency lockouts are prioritized for the fastest available dispatch across Arlington.",
    },
    {
      question: "Do you provide 24/7 emergency locksmith service in Arlington?",
      answer:
        "Yes. We provide 24/7 emergency locksmith service for residential, commercial, and car lockout calls throughout Arlington.",
    },
    {
      question: "Can you unlock doors without damaging the lock?",
      answer:
        "When possible, we use non-destructive entry methods first and explain repair or replacement options before starting work.",
    },
    {
      question: "Should I call right away for an active lockout?",
      answer:
        "Yes. Calling (703) 244-0559 immediately is the fastest path to emergency locksmith dispatch in Arlington VA.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function EmergencyLocksmithPage() {
  return <ServiceLandingPage config={config} />;
}
