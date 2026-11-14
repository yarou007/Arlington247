import Link from "next/link";
import ContactActions from "@/components/ContactActions";
export default function NotFound() {
  return (
    <section className="not-found wrap">
      <p className="eyebrow">Page unavailable</p>
      <h1>Looking for locksmith help in Arlington, VA?</h1>
      <p>
        This page could not be found. You can explore the services from the
        homepage, or contact the mobile locksmith directly.
      </p>
      <p>
        <Link href="/" className="text-link">
          Return to the homepage →
        </Link>
      </p>
      <ContactActions location="not-found" />
    </section>
  );
}
