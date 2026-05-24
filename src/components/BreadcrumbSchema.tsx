"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { BASE_URL } from "@/lib/seo";

const labelOverrides: Record<string, string> = {
  "services": "Services",
  "emergency-locksmith-arlington-va": "Emergency Locksmith Arlington VA",
  "residential-locksmith-arlington": "Residential Locksmith Arlington VA",
  "commercial-storefront-lockout": "Commercial Locksmith Arlington VA",
  "car-lockout-arlington": "Car Lockout Service Arlington VA",
  "key-extraction-lock-repair": "Key Extraction Arlington VA",
  "door-hardware-replacement": "Door Hardware Replacement Arlington VA",
  "emergency-exit-doors": "Emergency Exit Door Repair Arlington VA",
  "broken-key-removal-arlington-va": "Broken Key Removal Arlington VA",
  "storefront-lock-repair-arlington-va": "Storefront Lock Repair Arlington VA",
  "panic-bar-repair-arlington-va": "Panic Bar Repair Arlington VA",
  "lock-rekeying-arlington-va": "Lock Rekeying Arlington VA",
  "deadbolt-replacement-arlington-va": "Deadbolt Replacement Arlington VA",
  "areas": "Arlington Areas",
  "ballston-locksmith": "Ballston Locksmith",
  "clarendon-locksmith": "Clarendon Locksmith",
  "rosslyn-locksmith": "Rosslyn Locksmith",
  "crystal-city-locksmith": "Crystal City Locksmith",
  "pentagon-city-locksmith": "Pentagon City Locksmith",
  "courthouse-locksmith": "Courthouse Locksmith",
  "shirlington-locksmith": "Shirlington Locksmith",
  "columbia-pike-locksmith": "Columbia Pike Locksmith",
  "westover-locksmith": "Westover Locksmith",
  "arlington-ridge-locksmith": "Arlington Ridge Locksmith",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
};

function toTitleCase(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

export default function BreadcrumbSchema() {
  const pathname = usePathname();

  const schema = useMemo(() => {
    const cleanPath = pathname === "/" ? "" : pathname.replace(/\/$/, "");
    const segments = cleanPath ? cleanPath.split("/").filter(Boolean) : [];

    const itemListElement = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/`,
      },
    ];

    segments.forEach((segment, index) => {
      const pathSlice = segments.slice(0, index + 1).join("/");
      itemListElement.push({
        "@type": "ListItem",
        position: index + 2,
        name: labelOverrides[segment] ?? toTitleCase(segment),
        item: `${BASE_URL}/${pathSlice}`,
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    };
  }, [pathname]);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
