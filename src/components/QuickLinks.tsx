import Link from "next/link";

const serviceLinks = [
  {
    href: "/services/emergency-locksmith-arlington-va",
    label: "Emergency lockout service in Arlington",
  },
  {
    href: "/services/car-lockout-arlington",
    label: "Car lockout service in Crystal City",
  },
  {
    href: "/services/commercial-storefront-lockout",
    label: "Commercial locksmith in Ballston",
  },
  {
    href: "/services/key-extraction-lock-repair",
    label: "Key extraction service in Arlington",
  },
  {
    href: "/services/door-hardware-replacement",
    label: "Door hardware replacement in Arlington",
  },
  {
    href: "/services/emergency-exit-doors",
    label: "Emergency exit door repair in Arlington",
  },
  {
    href: "/services/lock-rekeying-arlington-va",
    label: "Lock rekeying service in Arlington",
  },
  {
    href: "/services/panic-bar-repair-arlington-va",
    label: "Panic bar repair in Arlington",
  },
];

const areaLinks = [
  { href: "#area-ballston", label: "Ballston" },
  { href: "#area-clarendon", label: "Clarendon" },
  { href: "#area-courthouse", label: "Courthouse" },
  { href: "#area-crystal-city", label: "Crystal City" },
  { href: "#area-pentagon-city", label: "Pentagon City" },
  { href: "#area-rosslyn", label: "Rosslyn" },
  { href: "#area-shirlington", label: "Shirlington" },
  { href: "#area-columbia-pike", label: "Columbia Pike" },
  { href: "#area-cherrydale", label: "Cherrydale" },
  { href: "#area-lyon-village", label: "Lyon Village" },
  { href: "#area-bluemont", label: "Bluemont" },
  { href: "#area-westover", label: "Westover" },
  { href: "#area-arlington-ridge", label: "Arlington Ridge" },
  { href: "#area-penrose", label: "Penrose" },
  { href: "#area-douglas-park", label: "Douglas Park" },
  { href: "#area-fairlington", label: "Fairlington" },
  { href: "#area-aurora-highlands", label: "Aurora Highlands" },
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
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Service Areas Navigation</h2>
            <div className="flex flex-wrap gap-2">
              {areaLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-amber-100 hover:text-red-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
