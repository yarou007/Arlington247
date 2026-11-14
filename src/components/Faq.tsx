import JsonLd from "@/components/JsonLd";
import type { FaqItem } from "@/lib/seo";
export default function Faq({
  items,
  title = "Your questions, answered",
  id = "faq",
}: {
  items: FaqItem[];
  title?: string;
  id?: string;
}) {
  return (
    <section className="section" id={id}>
      <div className="wrap narrow">
        <p className="eyebrow">Before you get in touch</p>
        <h2>{title}</h2>
        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
    </section>
  );
}
