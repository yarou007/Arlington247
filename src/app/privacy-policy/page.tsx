import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://arlington247lockrepair.com/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for arlington247lockrepair. Learn what information we collect, how we use it, and how to contact us about your privacy rights.",
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-6">Last updated: April 26, 2026</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              We collect limited contact information you provide when you call us,
              including your phone number, service address, and service request details.
              This information is used only to provide locksmith services, support
              dispatch, billing, and customer care.
            </p>
            <p>
              We do not sell your personal information. We may share information with
              trusted service providers only when required to operate our business,
              process payments, or meet legal obligations.
            </p>
            <p>
              We use reasonable administrative and technical safeguards to protect the
              information we store. No method of transmission or storage is guaranteed to
              be fully secure.
            </p>
            <p>
              If you have questions about this policy or would like to request correction
              or deletion of your information, call us at (703) 244-0559.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
