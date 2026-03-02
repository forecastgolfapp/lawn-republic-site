"use client";

import { useId, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const INITIAL_FORM = {
  name: "",
  phone: "",
  address: "",
  message: ""
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
    setStatus("loading");
    setErrorMessage(null);

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
    <div
      className={`rounded-3xl border border-white/70 bg-white/90 p-6 shadow-card backdrop-blur ${
        className ?? ""
      }`}
    >
      <div className="mb-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
          Free estimate
        </p>
        <h3 className="font-display text-2xl text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>
      {status === "success" ? (
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800">
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
              <label className="text-sm font-medium text-slate-700" htmlFor={`${formId}-name`}>
                Name
              </label>
              <input
                id={`${formId}-name`}
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                placeholder="Your full name"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium text-slate-700" htmlFor={`${formId}-phone`}>
                Phone
              </label>
              <input
                id={`${formId}-phone`}
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                placeholder="(918) 555-1234"
              />
            </div>
          </div>
          <div className="grid gap-1">
            <label className="text-sm font-medium text-slate-700" htmlFor={`${formId}-address`}>
              Service Address
            </label>
            <input
              id={`${formId}-address`}
              name="address"
              type="text"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              placeholder="Street address, city"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm font-medium text-slate-700" htmlFor={`${formId}-message`}>
              Message
            </label>
            <textarea
              id={`${formId}-message`}
              name="message"
              rows={compact ? 3 : 4}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              placeholder="Tell us about your lawn goals"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Submitting..." : "Request My Quote"}
          </button>
          <p id={`${formId}-status`} className="text-xs text-slate-500">
            {status === "error" && errorMessage
              ? errorMessage
              : "We respond quickly during business hours."}
          </p>
        </form>
      )}
    </div>
  );
};
