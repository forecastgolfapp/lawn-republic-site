import { CallButton } from "@/components/CallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { RepeatedQuoteCta } from "@/components/RepeatedQuoteCta";
import {
  BUSINESS_HOURS,
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  SERVICE_AREAS
} from "@/lib/site";

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="kicker">Contact Lawn Republic</p>
            <h1 className="font-display text-4xl text-brand-navy sm:text-5xl">
              Ready for a better lawn? Call us today.
            </h1>
            <p className="text-lg text-brand-slate">
              Speak with our local team, request a quote, or ask about our seasonal lawn
              programs in the Tulsa metro.
            </p>
            <CallButton
              className="btn-primary"
              eventLabel="contact_hero"
              label={`Call ${PHONE_DISPLAY}`}
            />
            <div className="card">
              <p>Hours: {BUSINESS_HOURS}</p>
              <p>Service area: {SERVICE_AREAS.join(", ")}</p>
              <p>
                Email:{" "}
                <a href={EMAIL_HREF} className="font-semibold text-brand-green">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
          <QuoteForm source="contact" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16">
        <RepeatedQuoteCta
          heading="Faster route to a quote: call us."
          subtext="Most quotes go out the same business day."
          variant="navy"
          eventLabel="contact_footer"
        />
      </section>
    </div>
  );
}
