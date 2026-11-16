import Link from "next/link";
import { AREA_LINKS, SERVICE_LINKS } from "@/lib/navigation";
import {
  BUSINESS_NAME,
  CALL_NUMBER_DISPLAY,
  GOOGLE_BUSINESS_PROFILE_URL,
  GOOGLE_REVIEW_URL,
} from "@/lib/business";
import CallLink from "@/components/CallLink";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">{BUSINESS_NAME}</p>
            <p>
              Mobile locksmith service
              <br />
              Arlington County, Virginia
            </p>
            <p>Service-area business. No walk-in office.</p>
            <CallLink
              label={CALL_NUMBER_DISPLAY}
              location="footer-nap"
              className="footer-phone"
            />
            {GOOGLE_BUSINESS_PROFILE_URL && (
              <p>
                <a
                  href={GOOGLE_BUSINESS_PROFILE_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google Business Profile
                </a>
              </p>
            )}
            {GOOGLE_REVIEW_URL && (
              <p>
                <a
                  href={GOOGLE_REVIEW_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Leave us a review
                </a>
              </p>
            )}
          </div>
          <details className="footer-links">
            <summary>Locksmith services</summary>
            <ul>
              {SERVICE_LINKS.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </details>
          <details className="footer-links">
            <summary>Arlington, VA areas</summary>
            <ul>
              <li><Link href="/areas">All neighborhoods and streets</Link></li>
              {AREA_LINKS.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`}>{a.name}</Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {BUSINESS_NAME}
          </p>
          <nav aria-label="Legal and advice">
            <Link href="/advice">Lock & door advice</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
