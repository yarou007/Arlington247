import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://arlington247lockrepair.com",
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://arlington247lockrepair.com/sitemap.xml",
  };
}
