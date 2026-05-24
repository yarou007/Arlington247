import Link from "next/link";
import { AREA_LINKS } from "@/lib/areas";

const serviceLinks = [
  {
    href: "/services/emergency-locksmith-arlington-va",
    label: "Emergency locksmith Arlington VA",
  },
  {
    href: "/services/car-lockout-arlington",
    label: "Car lockout Arlington",
  },
  {
    href: "/services/commercial-storefront-lockout",
    label: "Commercial locksmith Arlington",
  },
  {
    href: "/services/key-extraction-lock-repair",
    label: "Key extraction lock repair Arlington",
  },
  {
    href: "/services/door-hardware-replacement",
    label: "Door hardware replacement Arlington",
  },
  {
    href: "/services/emergency-exit-doors",
    label: "Emergency exit door repair Arlington",
  },
  {
    href: "/services/lock-rekeying-arlington-va",
    label: "Lock rekeying Arlington",
  },
  {
    href: "/services/panic-bar-repair-arlington-va",
    label: "Panic bar repair Arlington",
  },
];

export default function QuickLinks() {
  return (
    <section className="bg-white border-y border-gray-200" aria-label="Service and area navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Services Navigation</h2>
            <div className="flex flex-wrap gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="bg-gray-900 text-white text-sm font-semibold px-3 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Arlington Area Pages</h2>
            <div className="flex flex-wrap gap-2">
              {AREA_LINKS.map((link) => (
                <Link
                  key={link.slug}
                  href={`/areas/${link.slug}`}
                  className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-amber-100 hover:text-red-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
