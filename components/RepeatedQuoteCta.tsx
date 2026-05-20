import Link from "next/link";
import { CallButton } from "@/components/CallButton";

type RepeatedQuoteCtaProps = {
  heading?: string;
  subtext?: string;
  variant?: "navy" | "white";
  eventLabel?: string;
  formAnchor?: string;
};

/**
 * Drop-in CTA pair: green "Get My Free Quote" + navy call button.
 * Place this after major sections so no page dead-ends.
 */
export const RepeatedQuoteCta = ({
  heading = "Ready for a greener lawn?",
  subtext = "Get a free quote today — most customers hear back the same day.",
  variant = "navy",
  eventLabel = "repeated_cta",
  formAnchor = "quote-form"
}: RepeatedQuoteCtaProps) => {
  const isNavy = variant === "navy";
  return (
    <div
      className={`rounded-3xl p-8 shadow-card ${
        isNavy
          ? "border border-brand-navy/10 bg-brand-navy text-white"
          : "border border-brand-border bg-white text-brand-navy"
      }`}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h3 className={`font-display text-2xl sm:text-3xl ${isNavy ? "text-white" : "text-brand-navy"}`}>
            {heading}
          </h3>
          <p className={`text-sm sm:text-base ${isNavy ? "text-white/85" : "text-brand-slate"}`}>
            {subtext}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href={`#${formAnchor}`} className="btn-primary-lg">
            Get My Free Quote
          </Link>
          <CallButton
            className={
              isNavy
                ? "inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy"
                : "btn-navy"
            }
            eventLabel={eventLabel}
          />
        </div>
      </div>
    </div>
  );
};
