import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, PHONE_ARIA_LABEL } from "@/lib/seo";

export default function UrgencyStrip() {
  return (
    <section className="bg-red-600 text-white text-center py-4 px-4" aria-label="Emergency callout">
      <p className="text-base sm:text-lg font-bold tracking-wide">
        Locked Out Right Now? Call {" "}
        <a
          href={`tel:${BUSINESS_PHONE_RAW}`}
          aria-label={PHONE_ARIA_LABEL}
          className="underline underline-offset-2 hover:text-amber-300 transition-colors"
        >
          {BUSINESS_PHONE_DISPLAY}
        </a>{" "}
        for 24/7 emergency locksmith help in Arlington VA.
      </p>
    </section>
  );
}
