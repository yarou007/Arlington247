"use client";

import { useEffect, useState } from "react";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW } from "@/lib/seo";

export default function CopyPhoneButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCopied(false);
    }, 1800);

    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(BUSINESS_PHONE_DISPLAY);
      setCopied(true);
    } catch {
      await navigator.clipboard.writeText(BUSINESS_PHONE_RAW);
      setCopied(true);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={className}
      aria-label="Copy locksmith phone number"
    >
      {copied ? "Copied" : "Copy Number"}
    </button>
  );
}
