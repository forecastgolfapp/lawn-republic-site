"use client";

import { useMemo, useState } from "react";
import { SERVED_ZIPS, SERVICE_AREAS } from "@/lib/site";

type BadgeState = "idle" | "invalid" | "match" | "no-match";

const BADGE_COPY: Record<BadgeState, { text: string; className: string }> = {
  idle: {
    text: "Enter a 5-digit ZIP",
    className: "border-brand-gold/30 bg-white/80 text-brand-slate"
  },
  invalid: {
    text: "Enter 5 digits",
    className: "border-amber-200 bg-amber-50 text-amber-800"
  },
  match: {
    text: "Yes — we service this ZIP",
    className: "border-brand-green/40 bg-emerald-50 text-brand-pine"
  },
  "no-match": {
    text: "Not yet — outside current service area",
    className: "border-red-200 bg-red-50 text-red-700"
  }
};

const normalizeZip = (value: string) =>
  value.replace(/[^0-9]/g, "").slice(0, 5);

export const ServiceAreaChecker = () => {
  const [zip, setZip] = useState("");

  const state: BadgeState = useMemo(() => {
    if (!zip) return "idle";
    if (zip.length < 5) return "invalid";
    return SERVED_ZIPS.includes(zip) ? "match" : "no-match";
  }, [zip]);

  const badge = BADGE_COPY[state];

  return (
    <div className="rounded-3xl border border-brand-gold/40 bg-brand-navy/95 p-8 text-brand-cream shadow-soft">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
            Service Area
          </p>
          <h3 className="font-display text-2xl text-brand-cream">
            Serving {SERVICE_AREAS.join(", ")} — check your ZIP
          </h3>
          <p className="text-sm text-brand-cream/80">
            Type your ZIP code to see if your home is on our current route. If
            you're nearby, send a quote request anyway — we expand routes often.
          </p>
        </div>
        <form
          className="rounded-2xl bg-white/95 p-5 text-brand-navy shadow-soft"
          onSubmit={(event) => {
            event.preventDefault();
            const target = document.getElementById("quote-form");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <label
            htmlFor="zip-checker-input"
            className="block text-sm font-semibold text-brand-slate"
          >
            Check your ZIP code
          </label>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <input
              id="zip-checker-input"
              inputMode="numeric"
              autoComplete="postal-code"
              value={zip}
              onChange={(event) => setZip(normalizeZip(event.target.value))}
              placeholder="e.g., 74133"
              aria-label="ZIP code"
              className="flex-1 min-w-[10rem] rounded-xl border border-brand-gold/30 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-brand-cream shadow-soft transition hover:bg-brand-navy"
            >
              Continue
            </button>
          </div>
          <p
            role="status"
            aria-live="polite"
            className={`mt-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold ${badge.className}`}
          >
            {badge.text}
          </p>
        </form>
      </div>
    </div>
  );
};
