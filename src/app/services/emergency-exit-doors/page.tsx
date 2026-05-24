import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
  type ServicePageConfig,
} from "@/components/ServiceLandingPage";

const config: ServicePageConfig = {
  slug: "emergency-exit-doors",
  title: "Emergency Exit Door Repair Arlington VA | 24/7 Locksmith Service",
  description:
    "Need emergency exit door repair in Arlington VA? Call (703) 244-0559 for panic hardware service, door repairs and commercial locksmith dispatch.",
  h1: "Emergency Exit Door Repair Arlington VA",
  intro:
    "If your emergency exit door is not latching, releasing, or closing properly, call (703) 244-0559 for fast service in Arlington. We provide 24/7 commercial locksmith support for emergency exit doors and related hardware.",
  image: "/images/push-bar.jpg",
  imageAlt: "Emergency exit door repair service in Arlington VA",
  problemTitle: "Why Exit Door Problems Cannot Wait",
  problemText:
    "Emergency exit door failures can create safety, compliance, and operational concerns for businesses. When exit doors malfunction, they can interrupt customer flow, staff movement, and secure building control.",
  solutionTitle: "How We Repair Emergency Exit Doors",
  solutionText:
    "We inspect panic hardware, latch operation, door alignment, and related components, then repair or replace the failing parts. The focus is restoring reliable egress and secure daily operation.",
  serviceType: "Emergency Exit Door Repair",
  bullets: [
    "Emergency exit door latch troubleshooting",
    "Panic bar and push-bar function repair",
    "Door alignment and strike correction",
    "Emergency egress hardware replacement",
    "Commercial exit door lock repair",
    "24/7 Arlington emergency locksmith response",
  ],
  relatedLinks: [
    {
      href: "/services/panic-bar-repair-arlington-va",
      label: "Panic bar repair Arlington VA",
    },
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
    "Emergency exit door repair Arlington requests are common in office buildings, retail spaces, and mixed-use properties in Ballston, Clarendon, Courthouse, Rosslyn, Crystal City, and Pentagon City.",
    "When push bars stick or exit doors fail to close correctly, businesses may face immediate access and safety concerns. Fast, skilled repair helps restore normal operations and reduces the risk of repeated hardware failures.",
    "If your exit hardware is currently unreliable, call (703) 244-0559 for immediate locksmith dispatch in Arlington VA. Phone-first response is the fastest way to stabilize the door and restore safe function.",
  ],
  faqItems: [
    {
      question: "Do you provide emergency exit door repair in Arlington VA?",
      answer:
        "Yes. We provide 24/7 emergency exit door repair and hardware support for Arlington commercial properties.",
    },
    {
      question: "Can you repair panic bars and push bars too?",
      answer:
        "Yes. We handle panic bar and push-bar troubleshooting, repair, and replacement.",
    },
    {
      question: "Do you service storefront and office exit hardware?",
      answer:
        "Yes. We provide emergency door hardware support for offices, storefronts, and other business facilities.",
    },
    {
      question: "How do I get urgent exit door service in Arlington?",
      answer:
        "Call (703) 244-0559 for immediate commercial locksmith dispatch.",
    },
  ],
};

export const metadata: Metadata = buildServiceMetadata(config);

export default function EmergencyExitDoorsPage() {
  return <ServiceLandingPage config={config} />;
}
