import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { SERVICE_AREAS } from "@/lib/site";

const steps = [
  {
    title: "Request a Quote",
    description: "Call or submit the short form. We respond fast during business hours."
  },
  {
    title: "Get a Custom Plan",
    description: "We evaluate your lawn type and build a seasonal program that fits."
  },
  {
    title: "Enjoy a Healthier Lawn",
    description: "Consistent visits, proactive communication, and results you can see."
  }
];

const benefits = [
  "Locally owned and focused on the Tulsa metro",
  "Licensed technicians with a proactive approach",
  "Clear scheduling and easy communication",
  "Programs built for Oklahoma turf and weeds"
];

const reviews = [
  {
    quote:
      "Our lawn stayed green all summer and the weeds finally cleared. Great communication.",
    name: "Tulsa homeowner"
  },
  {
    quote: "Professional, on time, and easy to reach. The program just works.",
    name: "Jenks resident"
  },
  {
    quote: "Best lawn we have had since moving in. Highly recommend.",
    name: "Broken Arrow client"
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Tulsa-area lawn care
            </p>
            <h1 className="font-display text-4xl text-slate-900 sm:text-5xl">
              A greener, weed-free lawn without the hassle.
            </h1>
            <p className="text-lg text-slate-600">
              Lawn Republic delivers premium weed control, fertilization, and seasonal
              care built specifically for Tulsa, Bixby, Jenks, and Broken Arrow.
            </p>
            <div className="flex flex-wrap gap-3">
              <CallButton
                className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
                eventLabel="home_hero"
              />
              <Link
                href="#quote-form"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
              >
                Get a Quote
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm">
                Locally owned
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm">
                Trusted by Tulsa homeowners
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm">
                Consistent seasonal visits
              </span>
            </div>
          </div>
          <div id="quote-form">
            <QuoteForm source="home" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-soft"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                How it works
              </p>
              <h3 className="mt-2 font-display text-2xl text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Why Lawn Republic
            </p>
            <h2 className="font-display text-3xl text-slate-900">
              Premium care with a local, reliable team.
            </h2>
            <p className="text-sm text-slate-600">
              We build lawn programs to fit Oklahoma turf, weather, and weed pressure.
              You get consistent timing, clear communication, and results that last.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-white/70 bg-white/80 p-4 text-sm text-slate-700 shadow-soft"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                Service Area
              </p>
              <h3 className="font-display text-2xl text-slate-900">
                Serving {SERVICE_AREAS.join(", ")}
              </h3>
              <p className="text-sm text-slate-600">
                Consistent routes across the Tulsa metro so you get reliable timing.
              </p>
            </div>
            <CallButton
              className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
              eventLabel="home_service_area"
              label="Call for Availability"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft"
            >
              <blockquote className="text-sm text-slate-600">
                "{review.quote}"
              </blockquote>
              <figcaption className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-700">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
