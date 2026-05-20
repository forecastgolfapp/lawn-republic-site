import type { Metadata } from "next";
import Link from "next/link";
import { SupportForm } from "@/components/SupportForm";
import { CallButton } from "@/components/CallButton";
import { PHONE_DISPLAY, REALGREEN_PORTAL_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Customer Support | ${SITE_NAME}`,
  description:
    "Existing Lawn Republic customers — get help with billing, your next application, or any lawn issue."
};

export default function SupportPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="kicker">Existing customer support</p>
            <h1 className="font-display text-4xl text-brand-navy sm:text-5xl">
              We're here to help with billing, scheduling, and lawn issues.
            </h1>
            <p className="text-lg text-brand-slate">
              Already a customer? Use the form to send us details and we'll
              follow up. For urgent issues, the fastest option is to call us.
            </p>
            <div className="flex flex-wrap gap-3">
              <CallButton className="btn-primary" eventLabel="support_hero" label={`Call ${PHONE_DISPLAY}`} />
              <a
                href={REALGREEN_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Customer Portal
              </a>
            </div>
            <div className="rounded-2xl border border-brand-border bg-white/90 p-4 text-sm text-brand-slate shadow-soft">
              <p className="font-semibold text-brand-navy">Not a customer yet?</p>
              <p className="mt-1">
                Head to the <Link href="/#quote-form" className="font-semibold text-brand-green underline">quote form</Link> to get started.
              </p>
            </div>
          </div>

          <SupportForm />
        </div>
      </section>
    </div>
  );
}
