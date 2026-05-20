"use client";

import { useState } from "react";
import { SERVED_ZIPS } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

const normalizeZip = (value: string) => value.replace(/[^0-9]/g, "").slice(0, 5);

type Status = "idle" | "match" | "no-match";

export const ZipHeroCta = ({ formAnchor = "quote-form" }: { formAnchor?: string }) => {
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleaned = normalizeZip(zip);
    if (cleaned.length < 5) {
      return;
    }
    const matched = SERVED_ZIPS.includes(cleaned);
    setStatus(matched ? "match" : "no-match");
    trackEvent("zip_check", { zip: cleaned, served: matched });
    // Regardless of result, scroll to the full form — out-of-area folks are invited too.
    const target = document.getElementById(formAnchor);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-brand-border bg-white p-4 shadow-card sm:p-5"
      aria-label="Check your ZIP code to get a quote"
    >
      <label htmlFor="zip-hero" className="block text-sm font-semibold text-brand-navy">
        Enter your ZIP to start your free quote
      </label>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          id="zip-hero"
          name="zip"
          inputMode="numeric"
          autoComplete="postal-code"
          aria-label="ZIP code"
          placeholder="e.g., 74133"
          value={zip}
          onChange={(event) => {
            setZip(normalizeZip(event.target.value));
            setStatus("idle");
          }}
          className="flex-1 rounded-full border border-brand-border bg-brand-offwhite px-5 py-3 text-base text-brand-navy focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
        />
        <button type="submit" className="btn-primary-lg whitespace-nowrap">
          Get My Free Quote
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`mt-3 text-sm ${
          status === "match"
            ? "text-brand-green"
            : status === "no-match"
            ? "text-brand-navy"
            : "text-brand-slate"
        }`}
      >
        {status === "match" && "You're in our service area — fill out the form below and we'll send a quote."}
        {status === "no-match" && "We're not in your ZIP yet — submit anyway and we'll reach out when we expand."}
        {status === "idle" && "Free, no obligation. We typically respond same day."}
      </p>
    </form>
  );
};
