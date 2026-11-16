import Link from "next/link";
import { BUSINESS_NAME, CALL_NUMBER_DISPLAY } from "@/lib/business";
import CallLink from "@/components/CallLink";
import CopyPhoneButton from "@/components/CopyPhoneButton";
import Icon from "@/components/Icon";
export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand">
          <span className="brand-icon">
            <Icon name="key" />
          </span>
          <span>
            {BUSINESS_NAME}
            <small>Mobile locksmith · Arlington, VA</small>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link href="/#services">Services</Link>
          <Link href="/areas">Service areas</Link>
          <Link href="/advice">Advice</Link>
        </nav>
        <div className="header-phone">
          <CallLink
            label={CALL_NUMBER_DISPLAY}
            location="header"
            className="header-call"
            icon
          />
          <CopyPhoneButton />
        </div>
      </div>
    </header>
  );
}
