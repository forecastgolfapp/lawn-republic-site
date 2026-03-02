import { CallButton } from "@/components/CallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { PHONE_DISPLAY, SERVICE_AREAS } from "@/lib/site";

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Contact Lawn Republic
            </p>
            <h1 className="font-display text-4xl text-slate-900 sm:text-5xl">
              Ready for a better lawn? Call us today.
            </h1>
            <p className="text-lg text-slate-600">
              Speak with our local team, request a quote, or ask about our seasonal lawn
              programs in the Tulsa metro.
            </p>
            <CallButton
              className="inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
              eventLabel="contact_hero"
              label={`Call ${PHONE_DISPLAY}`}
            />
            <div className="rounded-2xl border border-white/70 bg-white/80 p-4 text-sm text-slate-600 shadow-soft">
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
