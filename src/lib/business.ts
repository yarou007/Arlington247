export const CALL_NUMBER_DISPLAY = "(202) 643-4062";
export const CALL_NUMBER_TEL = "+12026434062";
export const WHATSAPP_NUMBER = "17032440559";
export const BUSINESS_NAME = "Arlington 24/7 Lock Repair";
export const DOMAIN = "https://arlington247lockrepair.com";
export const CALL_HREF = `tel:${CALL_NUMBER_TEL}`;
export const PHONE_ARIA_LABEL = `Call ${BUSINESS_NAME} at ${CALL_NUMBER_DISPLAY}`;
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function publicHttpsUrl(value: string | undefined): string {
  try {
    const url = new URL(value || "");
    return url.protocol === "https:" && !url.username && !url.password
      ? url.toString()
      : "";
  } catch {
    return "";
  }
}
// Publish only verified details. Empty values omit the corresponding UI/schema.
export const VERIFIED_OPENING_HOURS: string[] = [];
export const GOOGLE_BUSINESS_PROFILE_URL = publicHttpsUrl(
  process.env.NEXT_PUBLIC_GBP_URL,
);
export const GOOGLE_REVIEW_URL = publicHttpsUrl(
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL,
);
