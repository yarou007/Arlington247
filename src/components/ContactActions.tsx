import CallLink from "@/components/CallLink";
import WhatsAppLink from "@/components/WhatsAppLink";
import { getContactMessage } from "@/lib/navigation";
export default function ContactActions({
  path = "/",
  location,
  compact = false,
}: {
  path?: string;
  location: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`contact-actions${compact ? " contact-actions-compact" : ""}`}
    >
      <CallLink
        label={compact ? "Call" : "Call Now"}
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
