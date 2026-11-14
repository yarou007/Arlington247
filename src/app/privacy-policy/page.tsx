import { CALL_NUMBER_DISPLAY } from "@/lib/business";
import { pageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
export const metadata = pageMetadata(
  "/privacy-policy",
  `Privacy Arlington, VA | ${CALL_NUMBER_DISPLAY}`,
  `Contact and website analytics information for this Arlington, VA mobile locksmith site. Call ${CALL_NUMBER_DISPLAY} or WhatsApp with questions.`,
);
export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy", href: "/privacy-policy" }]} />
      <section className="section">
        <div className="wrap narrow article-content legal-content">
          <p className="eyebrow">Website information</p>
          <h1>Privacy information — Arlington, VA</h1>
          <p>Updated November 14, 2026.</p>
          <section>
            <h2>Phone and WhatsApp contact</h2>
            <p>
              This website uses phone and WhatsApp links for service requests.
              It has no web contact form, newsletter or email contact route.
              When you choose to call or send a message, provide the information
              needed to describe your request, such as a service location and
              lock or vehicle details.
            </p>
            <p>
              WhatsApp opens a third-party service governed by its own terms and
              privacy settings. The prefilled text is editable before you send
              it. Avoid including access codes, identity documents or payment
              information in an initial message.
            </p>
          </section>
          <section>
            <h2>Campaign attribution on this website</h2>
            <p>
              The site can keep supported campaign parameters, including UTM
              values and Google advertising click identifiers, in your browser’s
              session storage. These help associate a contact-link click with
              the campaign that brought you here. Contact links continue to work
              if that storage is unavailable.
            </p>
          </section>
          <section>
            <h2>Contact-click measurement</h2>
            <p>
              When analytics is configured, a phone or WhatsApp link click can
              be measured with the page, button location and supported campaign
              parameters. Google Analytics and Google Ads may receive this
              website event data through their tags. A link click is not
              evidence that a call connected or a WhatsApp message was sent.
            </p>
            <p>
              The site’s contact-click code does not collect the content of your
              calls, WhatsApp conversations, photos or documents. Questions
              about information supplied during a service request can be raised
              directly by phone or WhatsApp.
            </p>
          </section>
          <ContactActions path="/privacy-policy" location="privacy-contact" />
        </div>
      </section>
    </>
  );
}
