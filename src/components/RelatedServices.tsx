import Link from "next/link";

const relatedServices = [
  {
    href: "/services/emergency-locksmith-arlington-va",
    label: "Emergency Locksmith Arlington VA",
  },
  { href: "/services/car-lockout-arlington", label: "Car Lockout Arlington" },
  {
    href: "/services/residential-locksmith-arlington",
    label: "Residential Locksmith Arlington",
  },
  {
    href: "/services/commercial-storefront-lockout",
    label: "Commercial Locksmith Arlington",
  },
  {
    href: "/services/storefront-lock-repair-arlington-va",
    label: "Storefront Lock Repair Arlington",
  },
  {
    href: "/services/broken-key-removal-arlington-va",
    label: "Broken Key Removal Arlington",
  },
  {
    href: "/services/lock-rekeying-arlington-va",
    label: "Lock Rekeying Arlington",
  },
  {
    href: "/services/deadbolt-replacement-arlington-va",
    label: "Deadbolt Replacement Arlington",
  },
  {
    href: "/services/panic-bar-repair-arlington-va",
    label: "Panic Bar Repair Arlington",
  },
];

export default function RelatedServices({
  title = "Related Locksmith Services in Arlington",
}: {
  title?: string;
}) {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" aria-label="Related services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
          {title}
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Compare related services or call now if you need immediate locksmith dispatch anywhere in
          Arlington VA.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {relatedServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bg-white border border-gray-300 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:border-red-400 hover:text-red-700 transition-colors"
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
