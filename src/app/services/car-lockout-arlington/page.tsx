import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "car-lockout-arlington",
  title: "Car Lockout Arlington VA | 24/7 Auto Locksmith Help",
  description:
    "Locked keys in your car in Arlington VA? Call (703) 244-0559 for 24/7 car lockout service, key extraction, lock repair and fast mobile response.",
  h1: "Car Lockout Arlington VA — Fast 24/7 Vehicle Entry",
  intro:
    "Locked out of your vehicle in Arlington? Call (703) 244-0559 for 24/7 car lockout support. We provide fast mobile entry for drivers across Ballston, Clarendon, Rosslyn, Crystal City, Pentagon City, and nearby neighborhoods.",
  image: "/images/car-lock.jpg",
  imageAlt: "Car lockout service in Arlington VA",
  problemTitle: "Why Car Lockouts Escalate Quickly",
  problemText:
    "Car lockouts can derail work schedules, family pickups, and late-night safety plans. DIY methods can damage weatherstripping, paint, lock cylinders, or electronic systems, which often costs more than professional entry.",
  solutionTitle: "How We Handle Car Lockout Calls",
  solutionText:
    "We dispatch mobile automotive locksmith support, verify vehicle access authorization, and use professional entry tools whenever possible. If a key breaks or a lock is damaged, we can handle key extraction and next-step lock repair.",
  serviceType: "Car Lockout Service",
  bullets: [
    "24/7 car lockout service in Arlington",
    "Keys locked in vehicle or trunk",
    "Vehicle door unlocking with lock-safe methods",
    "Broken key extraction from vehicle locks",
    "Ignition and lock function check after entry",
    "Fast mobile response across Arlington neighborhoods",
  ],
  relatedLinks: [
    { href: "/services/key-extraction-lock-repair", label: "Key extraction lock repair Arlington" },
    {
      href: "/services/broken-key-removal-arlington-va",
      label: "Broken key removal Arlington VA",
    },
    {
      href: "/services/emergency-locksmith-arlington-va",
      label: "Emergency locksmith Arlington VA",
    },
    {
      href: "/services/residential-locksmith-arlington",
      label: "Residential locksmith Arlington",
    },
  ],
  localParagraphs: [
    "Car lockout Arlington service is frequently needed in parking garages, apartment lots, office buildings, and curbside loading zones. Location details like garage level or nearest landmark help us route dispatch quickly and avoid delays.",
    "In Arlington neighborhoods with dense residential parking, drivers often call after locking keys in the vehicle while unloading or making quick stops. In business districts, lockouts can happen during meetings and delivery windows where time pressure is high. Phone-first dispatch keeps the process direct and fast.",
    "If a key snaps in the vehicle lock, we can provide key extraction and evaluate whether immediate lock repair is needed. Calling (703) 244-0559 is faster than waiting or attempting forced entry that could damage trim, seals, or lock hardware.",
  ],
  faqItems: [
    {
      question: "Can you unlock my car without damage in Arlington?",
      answer:
        "When possible, we use professional lock-safe entry methods designed to reduce avoidable damage to the vehicle and lock components.",
    },
    {
      question: "Do you provide 24/7 car lockout service in Arlington VA?",
      answer:
        "Yes. We provide 24/7 car lockout service throughout Arlington, including nights, weekends, and holidays.",
    },
    {
      question: "Can you help if my key broke in the car lock?",
      answer:
        "Yes. We provide broken key extraction and can review lock condition to recommend repair or replacement if needed.",
    },
    {
      question: "Should I call instead of trying DIY car entry?",
      answer:
        "Yes. Call (703) 244-0559 for professional car lockout help and avoid damage risks from improvised entry attempts.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function CarLockoutPage() {
  return <ServiceLandingPage config={config} />;
}
