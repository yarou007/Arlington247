import type { CopySection } from "@/lib/content-types";
export default function CopySections({
  sections,
}: {
  sections: CopySection[];
}) {
  return (
    <>
      {sections.map((section, index) => (
        <section id={`section-${index + 1}`} key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
    </>
  );
}
