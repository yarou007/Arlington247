import type { Metadata } from "next";
import { BUSINESS_NAME, DOMAIN } from "@/lib/business";

export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const canonical = `${DOMAIN}${path === "/" ? "" : path.replace(/\/$/, "")}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: BUSINESS_NAME,
      title,
      description,
      url: canonical,
      images: [
        {
          url: "/images/night-lock.jpg",
          alt: "Close-up of a door lock cylinder",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/night-lock.jpg"],
    },
  };
}
