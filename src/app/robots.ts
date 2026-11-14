import type { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  return {
    host: DOMAIN,
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
