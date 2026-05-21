import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for arlington247lockrepair, including service authorization, payments, warranties, and customer responsibilities.",
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function TermsOfServicePage() {
  return (
    <main>
      <Header />
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-6">Last updated: April 26, 2026</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              By requesting our locksmith services, you confirm that you are the property
              owner, authorized occupant, or have legal authority to request entry or
              hardware work at the service location.
            </p>
            <p>
              Pricing is provided before work begins. Final charges may vary only if the
              approved scope changes after on-site inspection and your authorization.
            </p>
            <p>
              Customers must provide reasonable proof of identity or authorization when
              requested. We reserve the right to refuse service where ownership or
              authorization cannot be verified.
            </p>
            <p>
              Except where required by law, service is provided without guarantees beyond
              those expressly stated at the time of service. For support, call{" "}
              <a
                href="tel:+17032440559"
                aria-label="Call Arlington 24/7 Lock Repair at 703-244-0559"
                className="text-red-600 font-semibold hover:underline"
              >
                (703) 244-0559
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
