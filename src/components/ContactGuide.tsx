import ContactActions from "@/components/ContactActions";
export default function ContactGuide({
  path = "/",
  showActions = false,
}: {
  path?: string;
  showActions?: boolean;
}) {
  return (
    <section className="section" id="contact-guide">
      <div className="wrap split">
        <div>
          <p className="eyebrow">One conversation, useful details</p>
          <h2>Call or WhatsApp?</h2>
          <p>
            <strong>Locked out right now: call.</strong> Explain whether you are
            outside a home, car or business, give your neighborhood and ask
            about availability. If anyone is in immediate danger, contact
            emergency services first.
          </p>
          <p>
            <strong>
              Want a quote or have a photo of the lock or door: WhatsApp.
            </strong>{" "}
            A picture can help explain a broken handle, an unfamiliar cylinder
            or a panic bar. A photo alone cannot confirm every part needed or a
            final scope of work.
          </p>
          <p>
            Keep your phone nearby after you get in touch. For a garage,
            apartment building or managed property, arrange access with the
            person who is authorized to let a technician in.
          </p>
          {showActions && (
            <ContactActions path={path} location="contact-guide" />
          )}
        </div>
        <div className="help-card">
          <h3>What to send on WhatsApp</h3>
          <ul>
            <li>Your location pin and neighborhood in Arlington, VA.</li>
            <li>A clear photo of the door, lock or vehicle.</li>
            <li>
              The lock type, if you know it, and what happens when you try to
              use it.
            </li>
            <li>
              Whether it is a home, business or car. For a car, include make,
              model and year.
            </li>
          </ul>
          <p>
            For apartments, add the building entrance and unit access
            arrangements. For businesses, say whether the problem affects entry,
            security or an emergency exit. Keep access codes, identity documents
            and payment details out of the first message.
          </p>
        </div>
      </div>
    </section>
  );
}
