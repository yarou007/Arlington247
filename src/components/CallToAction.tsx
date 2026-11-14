import ContactActions from "@/components/ContactActions";
export default function CallToAction({
  path = "/",
  title = "Tell us what’s keeping you out.",
}: {
  path?: string;
  title?: string;
}) {
  return (
    <section className="section section-dark closing-cta" id="call-now">
      <div className="wrap">
        <p className="eyebrow">Mobile service · Arlington, VA</p>
        <h2>{title}</h2>
        <p>
          Call for an active lockout, or use WhatsApp to share your location and
          a photo. Confirm availability, the proposed work and next steps
          directly.
        </p>
        <ContactActions path={path} location="page-closing" />
      </div>
    </section>
  );
}
