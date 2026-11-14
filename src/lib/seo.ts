import {
  BUSINESS_NAME,
  CALL_NUMBER_DISPLAY,
  CALL_NUMBER_TEL,
  DOMAIN,
  GOOGLE_BUSINESS_PROFILE_URL,
  VERIFIED_OPENING_HOURS,
} from "@/lib/business";
import { AREA_LINKS, SERVICE_LINKS } from "@/lib/navigation";
export {
  BUSINESS_NAME,
  CALL_NUMBER_DISPLAY as BUSINESS_PHONE_DISPLAY,
  CALL_NUMBER_TEL as BUSINESS_PHONE_RAW,
  DOMAIN as BASE_URL,
  PHONE_ARIA_LABEL,
} from "@/lib/business";
export const BUSINESS_ID = `${DOMAIN}/#business`;
export const SERVICE_CATALOG = SERVICE_LINKS.map((service) => ({
  name: service.label,
  path: `/services/${service.slug}`,
}));
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "@id": BUSINESS_ID,
  name: BUSINESS_NAME,
  url: DOMAIN,
  telephone: CALL_NUMBER_TEL,
  description:
    "Mobile locksmith for home, car and business lockouts and lock repairs in Arlington County, Virginia. Service-area business with no walk-in office.",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Arlington County, Virginia" },
    ...AREA_LINKS.map((area) => ({
      "@type": "Place",
      name: `${area.name}, Arlington, VA`,
    })),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Locksmith services in Arlington, VA",
    itemListElement: SERVICE_CATALOG.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${DOMAIN}${service.path}`,
      },
    })),
  },
  ...(VERIFIED_OPENING_HOURS.length
    ? { openingHours: VERIFIED_OPENING_HOURS }
    : {}),
  ...(GOOGLE_BUSINESS_PROFILE_URL
    ? { sameAs: [GOOGLE_BUSINESS_PROFILE_URL] }
    : {}),
};
export type FaqItem = { question: string; answer: string };
export const HOME_FAQ: FaqItem[] = [
  {
    question: "How do I request lockout services in Arlington, VA?",
    answer: `Call ${CALL_NUMBER_DISPLAY} for an active lockout, or send your neighborhood, a location pin and a photo on WhatsApp. Say whether the problem involves a home, vehicle or business so the request can be assessed.`,
  },
  {
    question: "What if I need a 24 hour locksmith in Arlington?",
    answer:
      "Call to check current availability, the service needed and an arrival estimate for your location. Timing depends on the job and conditions; a website visit does not confirm a booking or an arrival time.",
  },
  {
    question: "Can you help with car and commercial lockouts?",
    answer:
      "Car lockouts, office and storefront lockouts, broken keys, storefront lock repair and panic bar repair are among the services offered. Share the vehicle model or door hardware details so the scope can be confirmed.",
  },
  {
    question: "Will my lock need to be replaced?",
    answer:
      "A lockout alone does not establish that a lock needs replacement. Ask about an entry assessment and whether repair, extraction or rekeying would address the problem. Door condition and the type of lock affect the options.",
  },
  {
    question: "What affects the price of a locksmith visit?",
    answer:
      "The service location, time of day, lock type, vehicle model, access arrangements and replacement hardware can affect the quote. Ask what the proposed work includes and which changes would require your approval.",
  },
  {
    question: "Is there an office I can visit?",
    answer:
      "This is a mobile, service-area business serving Arlington County, Virginia, with no walk-in office. Arrange service at the location of the door, lock or vehicle by phone or WhatsApp.",
  },
];
