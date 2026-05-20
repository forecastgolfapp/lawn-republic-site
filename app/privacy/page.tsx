import type { Metadata } from "next";
import { CallButton } from "@/components/CallButton";
import { EMAIL, EMAIL_HREF, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description:
    "How Lawn Republic collects, uses, and protects information from our customers and website visitors."
};

export default function PrivacyPage() {
  const lastUpdated = "May 2026";
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16">
      <div className="space-y-8">
        <header className="space-y-3">
          <p className="kicker">Privacy Policy</p>
          <h1 className="font-display text-4xl text-brand-navy">Your privacy matters.</h1>
          <p className="text-xs text-brand-slate">Last updated: {lastUpdated}</p>
        </header>

        <section className="space-y-2">
          <h2 className="font-display text-2xl text-brand-navy">What we collect</h2>
          <p className="text-sm text-brand-slate">
            When you submit a form on this site or call us, we collect the
            information you provide — typically your name, phone number, email
            address, service address, and any details you share about your lawn.
            We may also receive basic analytics from your visit (pages viewed,
            device type, referrer) so we can improve the site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-2xl text-brand-navy">How we use it</h2>
          <p className="text-sm text-brand-slate">
            We use this information to respond to your inquiry, provide service
            estimates, schedule lawn treatments, send invoices, and communicate
            with you about your account. We do not sell your personal
            information to anyone.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-2xl text-brand-navy">Who we share it with</h2>
          <p className="text-sm text-brand-slate">
            We share information only with service providers we use to operate
            the business — for example, our form-delivery service, payment
            processor, and customer-management software (RealGreen). These
            partners are contractually limited to using your information to
            provide their services to us.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-2xl text-brand-navy">Your choices</h2>
          <p className="text-sm text-brand-slate">
            You can ask us to stop contacting you at any time. To request a
            copy of the information we have on file, or to request deletion,
            contact us at the email below.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-2xl text-brand-navy">Contact us</h2>
          <p className="text-sm text-brand-slate">
            Questions? Email{" "}
            <a className="font-semibold text-brand-green" href={EMAIL_HREF}>
              {EMAIL}
            </a>{" "}
            or call us directly.
          </p>
        </section>

        <CallButton
          className="btn-primary"
          eventLabel="privacy_cta"
          label="Call with Questions"
        />
      </div>
    </div>
  );
}
