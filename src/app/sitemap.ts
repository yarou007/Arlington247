import type { MetadataRoute } from "next";
import { AREA_LINKS } from "@/lib/areas";

const BASE_URL = "https://arlington247lockrepair.com";

const highPriorityServices = [
  { path: "/services/emergency-locksmith-arlington-va", priority: 1.0 },
  { path: "/services/car-lockout-arlington", priority: 0.9 },
  { path: "/services/residential-locksmith-arlington", priority: 0.9 },
  { path: "/services/commercial-storefront-lockout", priority: 0.9 },
  { path: "/services/storefront-lock-repair-arlington-va", priority: 0.9 },
];

const coreServices = [
  { path: "/services/broken-key-removal-arlington-va", priority: 0.8 },
  { path: "/services/key-extraction-lock-repair", priority: 0.8 },
  { path: "/services/lock-rekeying-arlington-va", priority: 0.8 },
  { path: "/services/deadbolt-replacement-arlington-va", priority: 0.8 },
  { path: "/services/panic-bar-repair-arlington-va", priority: 0.8 },
  { path: "/services/door-hardware-replacement", priority: 0.8 },
  { path: "/services/emergency-exit-doors", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const serviceEntries = [...highPriorityServices, ...coreServices].map((item) => ({
    url: `${BASE_URL}${item.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: item.priority,
  }));

  const areaEntries = AREA_LINKS.map((area) => ({
    url: `${BASE_URL}/areas/${area.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...serviceEntries,
    ...areaEntries,
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
