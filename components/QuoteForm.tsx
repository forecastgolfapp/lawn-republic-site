"use client";

import { useId, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const INITIAL_FORM = {
  name: "",
  phone: "",
  address: "",
  message: "",
  _gotcha: ""
};

// Common US road-type abbreviations we'll accept (case-insensitive).
const ROAD_TYPES = [
  "st", "street", "ave", "avenue", "rd", "road", "blvd", "boulevard",
  "dr", "drive", "ln", "lane", "ct", "court", "cir", "circle", "pl", "place",
  "pkwy", "parkway", "way", "ter", "terrace", "trl", "trail", "hwy", "highway"
];

const ROAD_TYPE_REGEX = new RegExp(
  `\\b(${ROAD_TYPES.join("|")})\\b\\.?`,
  "i"
);

const validateAddress = (raw: string): string | null => {
  const trimmed = raw.trim();
  if (trimmed.length < 8) {
    return "Please enter your full street address (e.g. 1234 Main St, Tulsa).";
  }
  if (!/^\d/.test(trimmed)) {
    return "Address should start with a house number (e.g. 1234 Main St).";
  }
  // Must have letters somewhere — not just digits.
  if (!/[a-zA-Z]{3,}/.test(trimmed)) {
    return "Address looks incomplete — include the street name and city.";
  }
  // Must contain either a comma (separating street and city) or a recognized
  // road-type word like "St", "Ave", "Blvd", etc.
  if (!trimmed.includes(",") && !ROAD_TYPE_REGEX.test(trimmed)) {
    return "Add the street type and city (e.g. 1234 Main St, Tulsa).";
  }
  return null;
};

const validatePhone = (raw: string): string | null => {
  const digits = raw.replace(/\D/g, "");
  // Accept 10-digit US numbers, or 11 digits starting with 1.
  if (digits.length === 10) return null;
  if (digits.length === 11 && digits.startsWith("1")) return null;
  return "Please enter a 10-digit phone number (e.g. (918) 555-1234).";
};

type QuoteFormProps = {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  source?: string;
  className?: string;
};

export const QuoteForm = ({
  title = "Get a Fast Quote",
  subtitle = "Tell us about your lawn and we will call you back shortly.",
  compact = false,
  source = "website",
  className
}: QuoteFormProps) => {
  const formId = useId();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    // Basic format validation — catches obvious junk before we hit the API.
    // For a real "is this address a real place" check, swap for Mapbox or
    // Google Places (would need an API key).
    const addressProblem = validateAddress(formData.address);
    if (addressProblem) {
      setStatus("error");
      setErrorMessage(addressProblem);
      const target = document.getElementById(`${formId}-address`);
      if (target) target.focus();
      return;
    }
    const phoneProblem = validatePhone(formData.phone);
    if (phoneProblem) {
      setStatus("error");
      setErrorMessage(phoneProblem);
      const target = document.getElementById(`${formId}-phone`);
      if (target) target.focus();
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source })
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormData(INITIAL_FORM);
      trackEvent("lead_submit", { source, method: "form" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className={`card ${className ?? ""}`}>
      <div className="mb-4">
        <p className="kicker">
          Free estimate
        </p>
        <h3 className="font-display text-2xl text-brand-navy">{title}</h3>
        <p className="text-sm text-brand-slate">{subtitle}</p>
      </div>
      {status === "success" ? (
        <div className="rounded-2xl border border-brand-border bg-brand-offwhite p-4 text-sm text-brand-navy">
          Thanks! We received your request and will reach out shortly.
        </div>
      ) : (
        <form
          className={compact ? "grid gap-3" : "grid gap-4"}
          onSubmit={handleSubmit}
          aria-describedby={`${formId}-status`}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <div className="grid gap-1">
              <label className="text-sm font-medium text-brand-slate" htmlFor={`${formId}-name`}>
                Name
              </label>
              <input
                id={`${formId}-name`}
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                placeholder="Your full name"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium text-brand-slate" htmlFor={`${formId}-phone`}>
                Phone
              </label>
              <input
                id={`${formId}-phone`}
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                placeholder="(918) 555-1234"
              />
            </div>
          </div>
          <div className="grid gap-1">
            <label className="text-sm font-medium text-brand-slate" htmlFor={`${formId}-address`}>
              Service Address
            </label>
            <input
              id={`${formId}-address`}
              name="address"
              type="text"
              required
              autoComplete="street-address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-xl border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              placeholder="1234 Main St, Tulsa, OK"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm font-medium text-brand-slate" htmlFor={`${formId}-message`}>
              Message
            </label>
            <textarea
              id={`${formId}-message`}
              name="message"
              rows={compact ? 3 : 4}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              placeholder="Tell us about your lawn goals"
            />
          </div>
          {/* Honeypot — humans leave blank; bots fill it */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            value={formData._gotcha}
            onChange={handleChange}
            className="hidden"
            aria-hidden="true"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Submitting..." : "Request My Quote"}
          </button>
          <p id={`${formId}-status`} className="text-xs text-brand-slate">
            {status === "error" && errorMessage
              ? errorMessage
              : "We respond quickly during business hours."}
          </p>
        </form>
      )}
    </div>
  );
};
