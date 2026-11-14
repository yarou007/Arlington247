import { BUSINESS_NAME, CALL_HREF } from "@/lib/business";
import Icon from "@/components/Icon";
export default function CallLink({
  label = "Call Now",
  location = "inline",
  className = "button button-call",
  ariaLabel,
  icon = false,
}: {
  label?: string;
  location?: string;
  className?: string;
  ariaLabel?: string;
  icon?: boolean;
}) {
  return (
    <a
      href={CALL_HREF}
      aria-label={ariaLabel || `${label} — ${BUSINESS_NAME}`}
      data-contact-channel="call"
      data-contact-location={location}
      data-call-location={location}
      className={className}
    >
      {icon && <Icon name="phone" size={20} />}
      {label}
    </a>
  );
}
