import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    ariaLabel: "Facebook profile coming soon",
    icon: "f",
  },
  {
    name: "Instagram",
    href: "#",
    ariaLabel: "Instagram profile coming soon",
    icon: "ig",
  },
  {
    name: "YouTube",
    href: "#",
    ariaLabel: "YouTube channel coming soon",
    icon: "yt",
  },
  {
    name: "TikTok",
    href: "#",
    ariaLabel: "TikTok profile coming soon",
    icon: "tt",
  },
];

export default function SocialLinks({
  className,
  labelClassName,
}: {
  className?: string;
  labelClassName?: string;
}) {
  return (
    <div className={className} aria-label="Social media links">
      {/* Replace # with real social profile URL when available. */}
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          aria-label={social.ariaLabel}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-400/50 px-3 py-2 text-xs font-semibold text-white hover:border-amber-300 hover:text-amber-300 transition-colors"
        >
          <span
            className="inline-flex h-5 min-w-5 items-center justify-center rounded bg-white/15 px-1 text-[10px] uppercase"
            aria-hidden="true"
          >
            {social.icon}
          </span>
          <span className={labelClassName}>{social.name}</span>
        </Link>
      ))}
    </div>
  );
}
