import Link from "next/link";
import { SERVICE_LINKS } from "@/lib/navigation";
export default function RelatedServices({
  slugs,
}: {
  slugs: readonly string[];
}) {
  return (
    <>
      <h2>Related services</h2>
      <ul>
        {slugs.map((slug) => {
          const service = SERVICE_LINKS.find((item) => item.slug === slug);
          return service ? (
            <li key={slug}>
              <Link href={`/services/${slug}`}>{service.label}</Link>
            </li>
          ) : null;
        })}
      </ul>
    </>
  );
}
