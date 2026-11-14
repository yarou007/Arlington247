import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { DOMAIN } from "@/lib/business";
export default function Breadcrumbs({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  const all = [{ label: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumbs wrap">
        <ol>
          {all.map((item, i) => (
            <li key={item.href}>
              {i < all.length - 1 ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: `${DOMAIN}${item.href === "/" ? "" : item.href}`,
          })),
        }}
      />
    </>
  );
}
