import { AREA_LINKS, ARLINGTON_NEIGHBORHOODS } from "@/lib/areas";

export const BASE_URL = "https://arlington247lockrepair.com";

export const BUSINESS_NAME = "Arlington 24/7 Lock Repair";
export const BUSINESS_PHONE_RAW = "+17032440559";
export const BUSINESS_PHONE_DISPLAY = "(703) 244-0559";

export const SERVICE_AREAS = ARLINGTON_NEIGHBORHOODS;

export const CORE_SERVICES = [
  "Emergency locksmith",
  "24/7 emergency lockout service",
  "Residential locksmith",
  "Commercial locksmith",
  "Car lockout service",
  "Broken key extraction",
  "Storefront lock repair",
  "Panic bar repair",
  "Door hardware replacement",
  "Lock rekeying",
  "Deadbolt replacement",
  "Emergency exit door repair",
];

export const PHONE_ARIA_LABEL =
  "Call Arlington 24/7 Lock Repair at 703-244-0559";

export const SERVICE_CATALOG = [
  {
    name: "Emergency Locksmith Arlington VA",
    path: "/services/emergency-locksmith-arlington-va",
  },
  { name: "Car Lockout Arlington", path: "/services/car-lockout-arlington" },
  {
    name: "Residential Locksmith Arlington",
    path: "/services/residential-locksmith-arlington",
  },
  {
    name: "Commercial Storefront Lockout Arlington",
    path: "/services/commercial-storefront-lockout",
  },
  {
    name: "Storefront Lock Repair Arlington VA",
    path: "/services/storefront-lock-repair-arlington-va",
  },
  {
    name: "Broken Key Removal Arlington VA",
    path: "/services/broken-key-removal-arlington-va",
  },
  { name: "Lock Rekeying Arlington VA", path: "/services/lock-rekeying-arlington-va" },
  {
    name: "Deadbolt Replacement Arlington VA",
    path: "/services/deadbolt-replacement-arlington-va",
  },
  {
    name: "Panic Bar Repair Arlington VA",
    path: "/services/panic-bar-repair-arlington-va",
  },
  { name: "Emergency Exit Doors", path: "/services/emergency-exit-doors" },
  { name: "Door Hardware Replacement", path: "/services/door-hardware-replacement" },
  {
    name: "Key Extraction Lock Repair",
    path: "/services/key-extraction-lock-repair",
  },
];

export const SOCIAL_PROFILE_URLS: string[] = [
  // Add sameAs social profile URLs when real profiles are available.
];

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "@id": `${BASE_URL}/#business`,
  name: BUSINESS_NAME,
  url: `${BASE_URL}/`,
  telephone: BUSINESS_PHONE_RAW,
  image: `${BASE_URL}/images/keys-in-lock.jpg`,
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: SERVICE_AREAS.map((name) => ({
    "@type": "Place",
    name,
  })),
  serviceType: CORE_SERVICES,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Arlington Locksmith Services",
    itemListElement: SERVICE_CATALOG.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${BASE_URL}${service.path}`,
      },
    })),
  },
  potentialAction: {
    "@type": "CommunicateAction",
    name: "Call for emergency locksmith dispatch",
    target: `tel:${BUSINESS_PHONE_RAW}`,
  },
  ...(SOCIAL_PROFILE_URLS.length > 0 ? { sameAs: SOCIAL_PROFILE_URLS } : {}),
};

export const FAQ_ITEMS = [
  {
    question: "How fast can a locksmith arrive in Arlington VA?",
    answer:
      "Arrival time depends on traffic and active calls, but emergency lockouts are prioritized for the fastest available dispatch across Arlington County.",
  },
  {
    question: "Do you provide 24/7 emergency locksmith service in Arlington?",
    answer:
      "Yes. We provide 24/7 emergency locksmith service in Arlington for residential, commercial, and automotive lockouts.",
  },
  {
    question: "Can you unlock my house, car or office without damage?",
    answer:
      "When possible, we use non-destructive entry methods first. If repair or replacement is needed, we explain options and pricing before work starts.",
  },
  {
    question: "Do you handle broken key extraction in Arlington?",
    answer:
      "Yes. We handle broken key extraction for home locks, office doors, storefront hardware, and many vehicle lock situations.",
  },
  {
    question: "Do you repair storefront locks and panic bars?",
    answer:
      "Yes. We provide storefront lock repair, panic bar repair, and emergency exit door hardware service for Arlington businesses.",
  },
  {
    question: "Should I call for emergency locksmith help instead of waiting?",
    answer:
      `Yes. For urgent lockouts, calling ${BUSINESS_PHONE_DISPLAY} is the fastest way to request dispatch and restore access quickly.`,
  },
  {
    question: "What areas in Arlington do you cover?",
    answer:
      `We cover neighborhoods across Arlington, including ${AREA_LINKS.map((item) => item.label.replace(" locksmith", "")).join(", ")}, and nearby service zones.`,
  },
];

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
