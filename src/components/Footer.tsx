import Link from "next/link";
import { BUSINESS_NAME, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW } from "@/lib/seo";

const serviceLinks = [
  {
    href: "/services/emergency-locksmith-arlington-va",
    label: "Emergency lockout service in Arlington",
  },
  {
    href: "/services/residential-locksmith-arlington",
    label: "Residential locksmith Arlington",
  },
  { href: "/services/car-lockout-arlington", label: "Car lockout service in Crystal City" },
  {
    href: "/services/commercial-storefront-lockout",
    label: "Commercial locksmith in Ballston",
  },
  { href: "/services/key-extraction-lock-repair", label: "Key extraction Arlington" },
  {
    href: "/services/door-hardware-replacement",
    label: "Door hardware replacement Arlington",
  },
  { href: "/services/emergency-exit-doors", label: "Emergency exit door repair Arlington" },
  { href: "/services/lock-rekeying-arlington-va", label: "Lock rekeying Arlington" },
  { href: "/services/deadbolt-replacement-arlington-va", label: "Deadbolt replacement Arlington" },
];

const areaLinks = [
  { href: "/#area-ballston", label: "Ballston" },
  { href: "/#area-clarendon", label: "Clarendon" },
  { href: "/#area-courthouse", label: "Courthouse" },
  { href: "/#area-crystal-city", label: "Crystal City" },
  { href: "/#area-pentagon-city", label: "Pentagon City" },
  { href: "/#area-rosslyn", label: "Rosslyn" },
  { href: "/#area-shirlington", label: "Shirlington" },
  { href: "/#area-columbia-pike", label: "Columbia Pike" },
  { href: "/#area-fairlington", label: "Fairlington" },
  { href: "/#area-aurora-highlands", label: "Aurora Highlands" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12" itemScope itemType="https://schema.org/Locksmith">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" aria-hidden="true">
                🔑
              </span>
              <span className="text-white font-bold text-xl">arlington247lockrepair</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" itemProp="description">
              24/7 emergency locksmith Arlington VA service for lockouts, key extraction, lock
              repair, and door hardware problems.
            </p>
            <a
              href={`tel:${BUSINESS_PHONE_RAW}`}
              aria-label="Call Arlington 24/7 Lock Repair at 703-244-0559"
              className="inline-flex items-center bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-4 py-2 rounded-lg transition-colors"
              itemProp="telephone"
            >
              Call {BUSINESS_PHONE_DISPLAY}
            </a>
            <meta itemProp="name" content={BUSINESS_NAME} />
            <meta itemProp="openingHours" content="Mo-Su 00:00-23:59" />
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {areaLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-amber-400 transition-colors">
                  Locksmith Services
                </Link>
              </li>
              <li>
                <Link href="/#service-area" className="hover:text-amber-400 transition-colors">
                  Arlington Service Areas
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            &copy; {year} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-gray-500">Service-area business: Arlington County, Virginia</p>
        </div>
      </div>
    </footer>
  );
}
