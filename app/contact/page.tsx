import { CallButton } from "@/components/CallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { PHONE_DISPLAY, SERVICE_AREAS } from "@/lib/site";

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
            <div className="rounded-2xl border border-brand-gold/30 bg-white/90 p-4 text-sm text-brand-slate shadow-soft">
              <p>Hours: Mon-Fri 8am-6pm (placeholder)</p>
              <p>Service area: {SERVICE_AREAS.join(", ")}</p>
            </div>
          </div>
          <QuoteForm source="contact" />
        </div>
      </section>
    </div>
  );
}
