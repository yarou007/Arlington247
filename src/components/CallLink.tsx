import { BUSINESS_PHONE_RAW, PHONE_ARIA_LABEL } from "@/lib/seo";

type CallLinkProps = {
  label: string;
  location?: string;
  className?: string;
  ariaLabel?: string;
};

export default function CallLink({
  label,
  location = "unknown",
  className,
  ariaLabel = PHONE_ARIA_LABEL,
}: CallLinkProps) {
  return (
    <a
      href={`tel:${BUSINESS_PHONE_RAW}`}
      aria-label={ariaLabel}
      data-call-location={location}
      className={className}
    >
      {label}
    </a>
  );
}
