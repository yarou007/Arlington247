export const ATTRIBUTION_KEY = "arlington_attribution_v1";
export const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
] as const;
export type Attribution = Partial<
  Record<(typeof CAMPAIGN_KEYS)[number], string>
>;
export function readCampaign(search: string): Attribution {
  const params = new URLSearchParams(search);
  const result: Attribution = {};
  for (const key of CAMPAIGN_KEYS) {
    const value = params.get(key)?.trim();
    if (value)
      result[key] = value.replace(/[\u0000-\u001f\u007f]/g, "").slice(0, 256);
  }
  return result;
}
export function captureAttribution(
  search: string,
  storage?: Pick<Storage, "getItem" | "setItem">,
): Attribution {
  let existing: Attribution = {};
  try {
    const parsed: unknown = JSON.parse(
      storage?.getItem(ATTRIBUTION_KEY) || "{}",
    );
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      for (const key of CAMPAIGN_KEYS) {
        const value = (parsed as Record<string, unknown>)[key];
        if (typeof value === "string" && value.trim())
          existing[key] = value.slice(0, 256);
      }
    }
  } catch {
    /* Storage can be denied or an old value may be invalid. */
  }
  const result = Object.keys(existing).length ? existing : readCampaign(search);
  try {
    if (Object.keys(result).length)
      storage?.setItem(ATTRIBUTION_KEY, JSON.stringify(result));
  } catch {
    /* Contact links work without storage. */
  }
  return result;
}
export function contactChannel(
  href: string,
): "tel_click" | "whatsapp_click" | null {
  if (/^tel:\+?[\d() .-]+$/.test(href)) return "tel_click";
  try {
    const url = new URL(href);
    if (
      url.protocol === "https:" &&
      url.hostname === "wa.me" &&
      /^\/\d+$/.test(url.pathname)
    )
      return "whatsapp_click";
  } catch {
    /* Non-contact and relative links are ignored. */
  }
  return null;
}

// Match the gtag bootstrap contract while its external script is loading.
export function googleCommandQueue(
  layer: unknown[],
): (...args: unknown[]) => void {
  return function (..._args: unknown[]) {
    layer.push(arguments);
  };
}
