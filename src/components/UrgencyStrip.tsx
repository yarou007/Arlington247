import CallLink from "@/components/CallLink";
import { BUSINESS_PHONE_DISPLAY } from "@/lib/seo";

export default function UrgencyStrip() {
  return (
    <section className="bg-red-600 text-white text-center py-4 px-4" aria-label="Emergency callout">
      <p className="text-base sm:text-lg font-bold tracking-wide">
        Locked Out Right Now? Call
        <span className="mx-2">
          <CallLink
            label={BUSINESS_PHONE_DISPLAY}
            location="urgency-strip"
            className="underline underline-offset-2 hover:text-amber-300 transition-colors"
          />
        </span>
        for 24/7 emergency locksmith help in Arlington VA.
      </p>
    </section>
  );
}
