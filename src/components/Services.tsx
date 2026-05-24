import Image from "next/image";
import Link from "next/link";
import CallLink from "@/components/CallLink";
import { BUSINESS_PHONE_DISPLAY } from "@/lib/seo";

const services = [
  {
    title: "Emergency Lockout Service Arlington VA",
    href: "/services/emergency-locksmith-arlington-va",
    image: "/images/night-lock.jpg",
    alt: "Emergency lockout service in Arlington VA at night",
    description:
      "Locked out in Arlington? We dispatch a mobile locksmith for house, office, storefront, and lockout emergencies 24/7.",
    related: [
      { href: "/services/car-lockout-arlington", label: "Car lockout service in Arlington" },
      {
        href: "/services/residential-locksmith-arlington",
        label: "Residential locksmith Arlington",
      },
    ],
  },
  {
    title: "Residential Locksmith Arlington VA",
    href: "/services/residential-locksmith-arlington",
    image: "/images/door-knob.jpg",
    alt: "Residential locksmith service in Arlington VA for house lockouts",
    description:
      "Home, apartment, and condo locksmith help with lockouts, rekeying, deadbolt replacement, and damaged lock repair.",
    related: [
      { href: "/services/lock-rekeying-arlington-va", label: "Lock rekeying Arlington" },
      {
        href: "/services/deadbolt-replacement-arlington-va",
        label: "Deadbolt replacement Arlington",
      },
    ],
  },
  {
    title: "Commercial Locksmith Arlington VA",
    href: "/services/commercial-storefront-lockout",
    image: "/images/office-latch.jpg",
    alt: "Commercial locksmith Arlington VA storefront and office locks",
    description:
      "Fast response for office and storefront lockouts, panic bars, access doors, and business lock repairs.",
    related: [
      {
        href: "/services/storefront-lock-repair-arlington-va",
        label: "Storefront lock repair Arlington",
      },
      { href: "/services/panic-bar-repair-arlington-va", label: "Panic bar repair Arlington" },
    ],
  },
  {
    title: "Car Lockout Service Arlington VA",
    href: "/services/car-lockout-arlington",
    image: "/images/car-lock.jpg",
    alt: "Car lockout Arlington VA emergency vehicle entry",
    description:
      "Locked keys in your car? We unlock most makes and models across Arlington County without forcing entry.",
    related: [
      { href: "/services/key-extraction-lock-repair", label: "Key extraction Arlington" },
      {
        href: "/services/broken-key-removal-arlington-va",
        label: "Broken key removal Arlington",
      },
    ],
  },
  {
    title: "Key Extraction Arlington VA",
    href: "/services/key-extraction-lock-repair",
    image: "/images/keys-in-lock.jpg",
    alt: "Key extraction and broken key removal in Arlington VA",
    description:
      "Broken key in a lock or ignition? We remove the fragment, check the lock condition, and restore access quickly.",
    related: [
      {
        href: "/services/door-hardware-replacement",
        label: "Door hardware replacement Arlington",
      },
      {
        href: "/services/broken-key-removal-arlington-va",
        label: "Broken key removal service",
      },
    ],
  },
  {
    title: "Emergency Exit Door Repair Arlington VA",
    href: "/services/emergency-exit-doors",
    image: "/images/push-bar.jpg",
    alt: "Emergency exit door and panic bar repair in Arlington VA",
    description:
      "Commercial emergency exit door repair, panic hardware service, and urgent door hardware fixes for local businesses.",
    related: [
      {
        href: "/services/door-hardware-replacement",
        label: "Door hardware replacement Arlington",
      },
      { href: "/services/panic-bar-repair-arlington-va", label: "Panic bar repair Arlington" },
    ],
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Arlington Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            24/7 Emergency Locksmith Arlington VA Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Need fast help in Arlington? Tap to call now. A mobile locksmith can be dispatched
            to your location for lockouts, key extraction, lock repair, and hardware issues.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-44 sm:h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.related.map((relatedLink) => (
                    <Link
                      key={relatedLink.label}
                      href={relatedLink.href}
                      className="text-xs bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-md hover:bg-amber-100 transition-colors"
                    >
                      {relatedLink.label}
                    </Link>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-2 mt-auto">
                  <Link
                    href={service.href}
                    className="block text-center border border-gray-300 hover:border-red-500 text-gray-800 hover:text-red-600 text-sm font-bold py-2.5 rounded-lg transition-colors duration-200"
                  >
                    View service details
                  </Link>
                  <CallLink
                    label={`Call for Fast Help — ${BUSINESS_PHONE_DISPLAY}`}
                    location={`homepage-services-${service.href}`}
                    className="block text-center bg-gray-900 hover:bg-red-600 text-white text-sm font-bold py-2.5 rounded-lg transition-colors duration-200"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
