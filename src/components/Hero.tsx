import Image from "next/image";
import CallLink from "@/components/CallLink";
import { BUSINESS_PHONE_DISPLAY } from "@/lib/seo";

const trustBadges = [
  "24/7 Emergency Locksmith",
  "Arlington VA Local Service",
  "Upfront Pricing",
  "Licensed & Insured",
  "Non-Destructive Entry When Possible",
];

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[86vh] flex flex-col items-center justify-center overflow-hidden">
      <Image
        src="/images/keys-in-lock.jpg"
        alt="Emergency locksmith Arlington VA responding to a lockout call"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-green-600/90 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" aria-hidden="true" />
          Dispatch Team Available 24/7 in Arlington County
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-shadow mb-4 sm:mb-6">
          Emergency Locksmith Arlington VA — Locked Out Now?
        </h1>

        <p className="text-base sm:text-xl text-gray-200 max-w-4xl mx-auto mb-6 sm:mb-8 text-shadow">
          Call (703) 244-0559 for 24/7 lockout help, key extraction, lock repair and emergency
          door service across Arlington County.
        </p>

        <CallLink
          label={`Call Now — ${BUSINESS_PHONE_DISPLAY}`}
          location="homepage-hero"
          className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold text-lg sm:text-2xl px-6 sm:px-12 py-3.5 sm:py-5 rounded-xl phone-pulse transition-colors duration-200 mb-3"
        />

        <p className="text-sm sm:text-base text-amber-100 max-w-4xl mx-auto mb-8 sm:mb-10">
          Fast mobile locksmith help in Ballston, Clarendon, Rosslyn, Crystal City, Pentagon City
          and nearby Arlington neighborhoods.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 justify-center gap-2 sm:gap-3 text-white text-xs sm:text-sm">
          {trustBadges.map((text) => (
            <div
              key={text}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg"
            >
              <span aria-hidden="true">✓</span>
              <span className="font-semibold">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
