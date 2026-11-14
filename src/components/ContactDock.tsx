"use client";
import { usePathname } from "next/navigation";
import ContactActions from "@/components/ContactActions";
export default function ContactDock() {
  const pathname = usePathname();
  return (
    <nav className="contact-dock" aria-label="Contact the mobile locksmith">
      <ContactActions path={pathname} location="contact-dock" />
    </nav>
  );
}
