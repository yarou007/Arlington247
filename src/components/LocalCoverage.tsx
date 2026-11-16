import Link from "next/link";
import { AREA_LINKS } from "@/lib/navigation";
import { LOCAL_COVERAGE } from "@/lib/local-coverage";

export default function LocalCoverage() {
  return (
    <div className="coverage-grid">
      {LOCAL_COVERAGE.map((area) => {
        const name = AREA_LINKS.find((item) => item.slug === area.slug)!.name;
        return (
          <article className="coverage-card" key={area.slug}>
            <h3><Link href={`/areas/${area.slug}`}>Locksmith in {name}</Link></h3>
            <p>{area.detail}</p>
            <p className="coverage-streets"><strong>Street references:</strong> {area.streets.join(" · ")}</p>
            <Link href={`/areas/${area.slug}`} className="text-link">{name} service details →</Link>
          </article>
        );
      })}
    </div>
  );
}
