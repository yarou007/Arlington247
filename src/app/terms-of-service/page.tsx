import { CALL_NUMBER_DISPLAY } from "@/lib/business";
import { pageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
export const metadata = pageMetadata(
  "/terms-of-service",
  `Service Terms Arlington, VA | ${CALL_NUMBER_DISPLAY}`,
  `Service-request and authorization information for Arlington, VA. Confirm work, availability and scope by calling ${CALL_NUMBER_DISPLAY} or WhatsApp.`,
);
export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Service terms", href: "/terms-of-service" }]}
      />
      <section className="section">
        <div className="wrap narrow article-content legal-content">
          <p className="eyebrow">Before arranging work</p>
          <h1>Service information — Arlington, VA</h1>
          <p>Updated November 14, 2026.</p>
          <section>
            <h2>Requesting a visit</h2>
            <p>
              This site describes mobile locksmith services in Arlington County,
              Virginia. A website visit or contact-link click does not create a
              confirmed booking. Discuss current availability, an arrival
              estimate and the proposed work directly by phone or WhatsApp.
            </p>
          </section>
          <section>
            <h2>Authorization to enter or change hardware</h2>
            <p>
              Request work only where you are entitled to authorize access or
              repair. Arrange permission from the owner, landlord or managing
              agent where needed, particularly for shared entrances, managed key
              systems and exit hardware. Discuss any verification arrangements
              before a visit if your documents are locked inside.
            </p>
          </section>
          <section>
            <h2>Scope, price and hardware</h2>
            <p>
              Confirm what a quote includes before approving work: the visit,
              assessment, labour, parts and any other applicable charges. A
              remote description cannot establish every hidden fault. Review any
              change to the recommended work and price before authorizing it.
              Ask directly about any warranty or other terms that would apply to
              the actual service; no general warranty is promised by this page.
            </p>
          </section>
          <section>
            <h2>Urgent safety situations</h2>
            <p>
              If a person is in immediate danger, contact emergency services
              first. Do not block, chain or disable an emergency exit while
              arranging hardware help. The advice on this site is general
              information, not a building compliance inspection or approval of a
              specific door modification.
            </p>
          </section>
          <ContactActions path="/terms-of-service" location="terms-contact" />
        </div>
      </section>
    </>
  );
}
