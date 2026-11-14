import { ARLINGTON_ZIP_CODES } from "@/lib/areas";
import { AREA_LINKS, ARTICLE_LINKS, SERVICE_LINKS } from "@/lib/navigation";
import {
  BUSINESS_NAME,
  CALL_HREF,
  CALL_NUMBER_DISPLAY,
  DOMAIN,
  getWhatsAppUrl,
} from "@/lib/business";
export const dynamic = "force-static";
export function GET() {
  const content = [
    `# ${BUSINESS_NAME}`,
    "",
    "> Mobile locksmith for home, car and business lockouts and lock repair in Arlington County, Virginia.",
    "",
    "## Contact",
    "",
    `- Phone: [${CALL_NUMBER_DISPLAY}](${CALL_HREF})`,
    `- WhatsApp: ${getWhatsAppUrl("Hi, I need locksmith help in Arlington, VA. I can send a location pin and photo.")}`,
    "- Service-area business; no walk-in office.",
    "",
    "## Coverage",
    "",
    `${AREA_LINKS.map((area) => area.name).join(", ")}, Arlington, VA.`,
    `ZIP codes: ${ARLINGTON_ZIP_CODES.join(", ")}.`,
    "",
    "## Services",
    "",
    ...SERVICE_LINKS.map(
      (service) =>
        `- [${service.label}](${DOMAIN}/services/${service.slug}): Service details in Arlington, VA.`,
    ),
    "",
    "## Neighborhoods",
    "",
    ...AREA_LINKS.map(
      (area) =>
        `- [${area.name}, Arlington, VA](${DOMAIN}/areas/${area.slug}): Local access and service information.`,
    ),
    "",
    "## Advice",
    "",
    ...ARTICLE_LINKS.map(
      (article) =>
        `- [${article.label}](${DOMAIN}/advice/${article.slug}): Practical advice for Arlington, VA.`,
    ),
    "",
    "## Website information",
    "",
    `- [Privacy](${DOMAIN}/privacy-policy): Website contact and analytics information.`,
    `- [Terms](${DOMAIN}/terms-of-service): Service-request information.`,
    "",
  ].join("\n");
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
