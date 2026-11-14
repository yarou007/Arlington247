"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {
  captureAttribution,
  contactChannel,
  googleCommandQueue,
} from "@/lib/attribution";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
const gaId = /^G-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GA4_ID || "")
  ? process.env.NEXT_PUBLIC_GA4_ID!
  : "";
const adsId = /^AW-\d+$/.test(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "")
  ? process.env.NEXT_PUBLIC_GOOGLE_ADS_ID!
  : "";
const adsCall = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION || "";
const adsWhatsApp =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION || "";

export default function ContactTracking() {
  const pathname = usePathname();
  useEffect(() => {
    if (!gaId && !adsId) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || googleCommandQueue(window.dataLayer);
    window.gtag("js", new Date());
    if (gaId) window.gtag("config", gaId, { send_page_view: false });
    if (adsId) window.gtag("config", adsId);
  }, []);
  useEffect(() => {
    let storage: Storage | undefined;
    try {
      storage = window.sessionStorage;
    } catch {
      /* Private browsing may disable storage. */
    }
    captureAttribution(window.location.search, storage);
    if (gaId)
      window.gtag?.("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    function onClick(event: MouseEvent) {
      if (event.type === "auxclick" && event.button !== 1) return;
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[href]")
          : null;
      if (!target) return;
      const name = contactChannel(target.getAttribute("href") || "");
      if (!name) return;
      const params = {
        page_path: window.location.pathname,
        button_location:
          target.dataset.contactLocation ||
          target.dataset.callLocation ||
          "inline",
        ...captureAttribution(window.location.search, storage),
      };
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: name, ...params });
      if (gaId)
        window.gtag?.("event", name, { ...params, transport_type: "beacon" });
      const destination = name === "tel_click" ? adsCall : adsWhatsApp;
      if (
        adsId &&
        /^AW-\d+\/[A-Za-z0-9_-]+$/.test(destination) &&
        destination.startsWith(`${adsId}/`)
      )
        window.gtag?.("event", "conversion", {
          send_to: destination,
          ...params,
          transport_type: "beacon",
        });
    }
    document.addEventListener("click", onClick, true);
    document.addEventListener("auxclick", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("auxclick", onClick, true);
    };
  }, [pathname]);
  const tagId = gaId || adsId;
  return tagId ? (
    <Script
      id="google-contact-tracking"
      src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(tagId)}`}
      strategy="afterInteractive"
    />
  ) : null;
}
