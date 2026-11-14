import { BUSINESS_NAME, getWhatsAppUrl } from "@/lib/business";
import Icon from "@/components/Icon";
export default function WhatsAppLink({
  message,
  location,
  label = "WhatsApp",
  className = "button button-whatsapp",
  icon = false,
}: {
  message: string;
  location: string;
  label?: string;
  className?: string;
  icon?: boolean;
}) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      aria-label={`${label} — ${BUSINESS_NAME}`}
      data-contact-channel="whatsapp"
      data-contact-location={location}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon && <Icon name="whatsapp" size={20} />}
      {label}
    </a>
  );
}
