"use client";

import { useId, useState } from "react";
import { FORMSPREE_SUPPORT_URL } from "@/lib/site";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  customerId: "",
  notes: "",
  _gotcha: ""
};

const TOPIC_OPTIONS = ["Billing", "Next Application", "Lawn Issue"] as const;

type Status = "idle" | "loading" | "success" | "error";

export const SupportForm = () => {
  const formId = useId();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [topics, setTopics] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleTopic = (topic: string) => {
    setTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    if (formData._gotcha.trim().length > 0) {
      // Silently accept bots.
      setStatus("success");
      return;
    }

    if (topics.length === 0) {
      setErrorMessage("Please select at least one topic.");
      return;
    }

    setStatus("loading");

    const payload = {
      form: "Existing Customer Support",
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      customerId: formData.customerId.trim(),
      topics,
      notes: formData.notes.trim(),
      _subject: `Support: ${topics.join(", ")} • Customer #${formData.customerId.trim()}`
    };

    try {
      const res = await fetch(FORMSPREE_SUPPORT_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setFormData(INITIAL_FORM);
      setTopics([]);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "We couldn't send your request. Please try again or call us."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="card">
        <div className="rounded-2xl border border-brand-border bg-brand-offwhite p-5 text-sm text-brand-navy">
          <p className="font-semibold">Support request sent.</p>
          <p className="mt-1">
            We'll pull up your account in RealGreen and follow up shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="card grid gap-4" onSubmit={handleSubmit} aria-describedby={`${formId}-status`}>
      <div className="space-y-1">
        <p className="kicker">Existing customers</p>
        <h2 className="font-display text-2xl text-brand-navy">How can we help?</h2>
        <p className="text-sm text-brand-slate">
          Enter your Customer # (from your invoice) and tell us what you need.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="grid gap-1">
          <label className="text-sm font-medium text-brand-slate" htmlFor={`${formId}-name`}>
            Your name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
            placeholder="Full name"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium text-brand-slate" htmlFor={`${formId}-email`}>
            Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="grid gap-1">
          <label className="text-sm font-medium text-brand-slate" htmlFor={`${formId}-phone`}>
            Phone (optional)
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
            placeholder="(918) 555-1234"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium text-brand-slate" htmlFor={`${formId}-customer`}>
            Customer # (required)
          </label>
          <input
            id={`${formId}-customer`}
            name="customerId"
            type="text"
            required
            value={formData.customerId}
            onChange={handleChange}
            className="w-full rounded-xl border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
            placeholder="From your invoice"
          />
        </div>
      </div>

      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium text-brand-slate">What do you need help with?</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {TOPIC_OPTIONS.map((topic) => (
            <label
              key={topic}
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy shadow-sm"
            >
              <input
                type="checkbox"
                checked={topics.includes(topic)}
                onChange={() => toggleTopic(topic)}
                className="accent-brand-green"
              />
              {topic}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-1">
        <label className="text-sm font-medium text-brand-slate" htmlFor={`${formId}-notes`}>
          Notes (optional)
        </label>
        <textarea
          id={`${formId}-notes`}
          name="notes"
          rows={4}
          maxLength={300}
          value={formData.notes}
          onChange={handleChange}
          className="w-full rounded-xl border border-brand-border bg-white px-3 py-2 text-sm text-brand-navy shadow-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
          placeholder="A few sentences about your issue (300 characters max)"
        />
      </div>

      {/* Honeypot */}
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
        {status === "loading" ? "Sending…" : "Send Request"}
      </button>

      <p id={`${formId}-status`} className="text-xs text-brand-slate" role="status" aria-live="polite">
        {errorMessage ?? "We'll respond during business hours."}
      </p>
    </form>
  );
};
