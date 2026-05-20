import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  REALGREEN_PORTAL_URL,
  SITE_NAME,
  VENMO_URL,
  VENMO_USERNAME
} from "@/lib/site";

export const metadata: Metadata = {
  title: `Pay Your Bill | ${SITE_NAME}`,
  description:
    "Pay your Lawn Republic invoice through the secure RealGreen customer portal or Venmo @LawnRepublic."
};

export default function PayPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="kicker">Pay your bill</p>
            <h1 className="font-display text-4xl text-brand-navy sm:text-5xl">
              Fast, secure payment for Lawn Republic customers.
            </h1>
            <p className="text-lg text-brand-slate">
              Pay online through our RealGreen customer portal, send a Venmo
              payment, or call us with any questions about your invoice.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={REALGREEN_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open Customer Portal
              </a>
              <a href={PHONE_TEL} className="btn-outline">
                Call {PHONE_DISPLAY}
              </a>
            </div>
            <div className="rounded-2xl border border-brand-gold/30 bg-white/90 p-4 text-sm text-brand-slate shadow-soft">
              <p className="font-semibold text-brand-navy">What you can do in the portal</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Pay invoices with card or ACH</li>
                <li>See past statements and upcoming visits</li>
                <li>Update billing info and contact preferences</li>
              </ul>
            </div>
          </div>

          <div className="card space-y-4">
            <div>
              <p className="kicker">Or pay via Venmo</p>
              <p className="mt-2 text-sm text-brand-slate">
                Open Venmo and pay <span className="font-semibold text-brand-navy">@{VENMO_USERNAME}</span>.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-brand-gold/30 bg-brand-cream">
              <Image
                src="/venmo-qr.jpeg"
                alt="Venmo QR code for Lawn Republic"
                width={600}
                height={600}
                className="h-auto w-full"
              />
            </div>
            <a
              href={VENMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Open Venmo
            </a>
            <p className="text-xs text-brand-slate">
              Use the customer portal for cards and ACH. Venmo is available for convenience.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-brand-gold/40 bg-brand-navy/95 p-8 text-brand-cream shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
                Questions about your bill?
              </p>
              <h2 className="font-display text-2xl text-brand-cream">
                Existing customers get fastest help through our support form.
              </h2>
            </div>
            <Link href="/support" className="btn-gold">
              Open Support Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
