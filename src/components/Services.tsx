import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Emergency Exit Doors",
    href: "/services/emergency-exit-doors",
    image: "/images/door-knob.jpg",
    alt: "Residential locksmith Arlington door lock and emergency exit door repair Arlington",
    description:
      "Need emergency exit door installation, repair, or compliance inspection in Arlington? We handle panic bars, fire-rated doors, and ADA-compliant exits.",
    detail: "Panic bars · Fire-rated doors · ADA compliance · Inspections",
  },
  {
    title: "Door Hardware Replacements",
    href: "/services/door-hardware-replacement",
    image: "/images/car-lock.jpg",
    alt: "Door hardware repair Arlington deadbolt and handle service",
    description:
      "Worn-out or broken door hardware? We replace knobs, levers, hinges, closers, deadbolts, and commercial-grade handles — fast and affordable.",
    detail: "Knobs · Levers · Hinges · Closers · Deadbolts",
  },
  {
    title: "Office / Commercial / Storefront Lockout",
    href: "/services/commercial-storefront-lockout",
    image: "/images/office-latch.jpg",
    alt: "Commercial lockout Arlington office and storefront door latch",
    description:
      "Locked out of your Arlington office, storefront, or business? We service commercial deadbolts, panic bars, glass storefront locks, and access control doors.",
    detail: "Offices, retail, storefronts, warehouses",
  },
  {
    title: "Key Stuck in Lock",
    href: "/services/key-extraction-lock-repair",
    image: "/images/night-lock.jpg",
    alt: "Key extraction Arlington for broken or stuck keys",
    description:
      "Broken or stuck key in your lock? We extract it safely and get you back in — often without replacing the lock.",
    detail: "Key extraction · Lock repair · On-the-spot re-key",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            24/7 Lockout Service Arlington for Homes, Cars and Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whatever type of lockout you&apos;re facing, our emergency locksmith Arlington
            VA team is ready to respond any time, day or night.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-1">
                  {service.description}
                </p>
                <p className="text-xs text-red-600 font-semibold mb-4">{service.detail}</p>

                <div className="grid grid-cols-1 gap-2 mt-auto">
                  <Link
                    href={service.href}
                    className="block text-center border border-gray-300 hover:border-red-500 text-gray-800 hover:text-red-600 text-sm font-bold py-2.5 rounded-lg transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                  <a
                    href="tel:+17032440559"
                    className="block text-center bg-gray-900 hover:bg-red-600 text-white text-sm font-bold py-2.5 rounded-lg transition-colors duration-200"
                  >
                    Call for Help Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Also serve note */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Also serving:{" "}
            <span className="font-medium text-gray-700">
              emergency door unlocking, broken key extraction, storefront lock repair,
              door hardware installation, and more.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
