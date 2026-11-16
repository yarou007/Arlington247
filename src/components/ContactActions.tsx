import { CALL_NUMBER_DISPLAY } from "@/lib/business";
import CallLink from "@/components/CallLink";
import WhatsAppLink from "@/components/WhatsAppLink";
import { getContactMessage } from "@/lib/navigation";
export default function ContactActions({
  path = "/",
  location,
  compact = false,
  showNumber = false,
}: {
  path?: string;
  location: string;
  compact?: boolean;
  showNumber?: boolean;
}) {
  return (
    <div
      className={`contact-actions${compact ? " contact-actions-compact" : ""}`}
    >
      <CallLink
        label={
          compact ? "Call" : showNumber ? `Call ${CALL_NUMBER_DISPLAY}` : "Call Now"
        }
        location={`${location}-call`}
        icon
      />
      <WhatsAppLink
        message={getContactMessage(path)}
        location={`${location}-whatsapp`}
        icon
      />
    </div>
  );
}
