import type { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/business";
import { AREA_LINKS, ARTICLE_LINKS, SERVICE_LINKS } from "@/lib/navigation";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/areas",
    ...SERVICE_LINKS.map((service) => `/services/${service.slug}`),
    ...AREA_LINKS.map((area) => `/areas/${area.slug}`),
    "/advice",
    ...ARTICLE_LINKS.map((article) => `/advice/${article.slug}`),
    "/privacy-policy",
    "/terms-of-service",
  ];
  return paths.map((path) => ({
    url: `${DOMAIN}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
