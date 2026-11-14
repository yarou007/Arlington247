"use client";
import { useEffect, useState } from "react";
import { CALL_NUMBER_DISPLAY } from "@/lib/business";
export default function CopyPhoneButton() {
  const [status, setStatus] = useState("Copy number");
  useEffect(() => {
    if (status === "Copy number") return;
    const id = window.setTimeout(() => setStatus("Copy number"), 2200);
    return () => window.clearTimeout(id);
  }, [status]);
  return (
    <button
      type="button"
      className="copy-phone"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(CALL_NUMBER_DISPLAY);
          setStatus("Copied");
        } catch {
          setStatus("Select phone number to copy");
        }
      }}
    >
      <span aria-live="polite">{status}</span>
    </button>
  );
}
