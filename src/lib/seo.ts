export const BASE_URL = "https://arlington247lockrepair.com";

export const BUSINESS_NAME = "Arlington 24/7 Lock Repair";
export const BUSINESS_PHONE_RAW = "+17032440559";
export const BUSINESS_PHONE_DISPLAY = "(703) 244-0559";

export const SERVICE_AREAS = [
  "Arlington VA",
  "Ballston",
  "Clarendon",
  "Courthouse",
  "Crystal City",
  "Pentagon City",
  "Rosslyn",
  "Shirlington",
  "Columbia Pike",
  "Cherrydale",
  "Lyon Village",
  "Bluemont",
  "Westover",
  "Arlington Ridge",
  "Penrose",
  "Douglas Park",
  "Fairlington",
  "Aurora Highlands",
];

export const CORE_SERVICES = [
  "Emergency locksmith",
  "Emergency lockout service",
  "Residential locksmith",
  "Commercial locksmith",
  "Car lockout service",
  "Key extraction",
  "Broken key removal",
  "Storefront lock repair",
  "Panic bar repair",
  "Door hardware replacement",
  "Lock rekeying",
  "Deadbolt replacement",
  "Emergency exit door repair",
];

export const PHONE_ARIA_LABEL =
  "Call Arlington 24/7 Lock Repair at 703-244-0559";

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
    name: "Locksmith Services",
    itemListElement: CORE_SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  },
};

export const FAQ_ITEMS = [
  {
    question: "How fast can a locksmith arrive in Arlington VA?",
    answer:
      "Arrival times depend on current demand and traffic, but our dispatch team prioritizes active lockouts and emergency calls across Arlington County.",
  },
  {
    question: "Do you provide 24/7 emergency locksmith service?",
    answer:
      "Yes. We provide 24 hour locksmith Arlington service for homes, vehicles, offices, and storefronts.",
  },
  {
    question: "Can you unlock my house without damaging the lock?",
    answer:
      "When possible, our technicians use non-destructive entry methods first and explain your options before any work starts.",
  },
  {
    question: "Do you help with car lockouts?",
    answer:
      "Yes. We provide car lockout Arlington help for keys locked in the vehicle, trunk lockouts, and related access issues.",
  },
  {
    question: "Can you remove a broken key from a lock?",
    answer:
      "Yes. We handle key extraction Arlington calls and can often restore lock function in the same visit.",
  },
  {
    question: "Do you repair storefront locks and panic bars?",
    answer:
      "Yes. We provide storefront lock repair Arlington support plus panic bar repair for commercial doors and exit hardware.",
  },
  {
    question: "How much does a locksmith service cost?",
    answer:
      "Pricing depends on the lock type, time of day, and job scope. You receive a clear quote before work begins.",
  },
  {
    question: "Do I need to show ID for a lockout?",
    answer:
      "For security, we may request proof of occupancy, ownership, or authorization before entry service is completed.",
  },
  {
    question: "What Arlington neighborhoods do you serve?",
    answer:
      "We serve Arlington VA, including Ballston, Clarendon, Courthouse, Crystal City, Pentagon City, Rosslyn, Shirlington, Columbia Pike, Cherrydale, Lyon Village, Bluemont, Westover, Arlington Ridge, Penrose, Douglas Park, Fairlington, and Aurora Highlands.",
  },
  {
    question: "Should I call or submit a form for emergency locksmith help?",
    answer:
      "For emergencies, calling is the fastest option. Call (703) 244-0559 for immediate help.",
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
