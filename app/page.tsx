import { CallButton } from "@/components/CallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceAreaChecker } from "@/components/ServiceAreaChecker";
import { ZipHeroCta } from "@/components/ZipHeroCta";
import { HeroImage } from "@/components/HeroImage";
import { RepeatedQuoteCta } from "@/components/RepeatedQuoteCta";
import { TrustStrip } from "@/components/TrustStrip";
import { Guarantee } from "@/components/Guarantee";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { WhatToExpect } from "@/components/WhatToExpect";

const steps = [
  {
    title: "Request a Quote",
    description: "Call or enter your ZIP. We respond fast — usually the same day."
  },
  {
    title: "Get a Custom Plan",
    description: "We evaluate your lawn and build a seasonal program that fits."
  },
  {
    title: "Enjoy a Healthier Lawn",
    description: "Consistent visits, proactive communication, and visible results."
  }
];

const benefits = [
  "Locally owned and focused on the Tulsa metro",
  "Licensed technicians with a proactive approach",
  "Clear scheduling and easy communication",
  "Programs built for Oklahoma turf and weeds"
];

// PLACEHOLDER testimonials — replace each card with a real Google / Facebook
// review (full first name + last initial + city). See S4 trust-layer notes.
const reviews = [
  {
    quote:
      "[PLACEHOLDER — paste a real Google review here. Use the customer's full first name, last initial, and city, e.g., 'Sarah M., Bixby'.]",
    name: "[Customer Name, City]"
  },
  {
    quote:
      "[PLACEHOLDER — paste a real Google review here. Aim for 1–2 sentences that mention a specific result.]",
    name: "[Customer Name, City]"
  },
  {
    quote:
      "[PLACEHOLDER — paste a real Google review here. Variety helps: pick one about results, one about communication, one about value.]",
    name: "[Customer Name, City]"
  }
];

export default function HomePage() {
  return (
    <div>
      {/* HERO — ZIP-first quote tool */}
      <section className="relative overflow-hidden border-b border-brand-border bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="space-y-6">
            <p className="kicker">Tulsa-area lawn care</p>
            <h1 className="font-display text-4xl text-brand-navy sm:text-5xl lg:text-6xl">
              A greener, weed-free lawn without the hassle.
            </h1>
            <p className="text-lg text-brand-slate">
              Lawn Republic delivers premium weed control, fertilization, and
              seasonal care built for Tulsa, Bixby, Jenks, and Broken Arrow homes.
            </p>
            <ZipHeroCta />
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <CallButton className="btn-navy" eventLabel="home_hero_call" />
              <span className="text-sm text-brand-slate">or call us directly</span>
            </div>
          </div>
          <HeroImage />
        </div>
      </section>

      {/* Trust strip — sits flush under the hero */}
      <TrustStrip />

      {/* Guarantee — high on the page, immediately under trust strip */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <Guarantee />
        </div>
      </section>

      {/* How it works */}
      <section className="section-alt">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="mb-8 space-y-2">
            <p className="kicker">How it works</p>
            <h2 className="section-title">Simple from quote to green lawn.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="card">
                <p className="kicker">Step</p>
                <h3 className="mt-2 font-display text-2xl text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-slate">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lawn Republic */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-4">
              <p className="kicker">Why Lawn Republic</p>
              <h2 className="section-title">Premium care with a local, reliable team.</h2>
              <p className="text-sm text-brand-slate">
                We build lawn programs to fit Oklahoma turf, weather, and weed
                pressure. You get consistent timing, clear communication, and
                results that last.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-brand-border bg-brand-offwhite p-4 text-sm text-brand-slate">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Repeated CTA #1 — after services */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-14">
          <RepeatedQuoteCta
            heading="See if your ZIP is on our route."
            subtext="Most Tulsa-metro homes are covered. Get a free quote in under 60 seconds."
            variant="navy"
            eventLabel="home_after_services"
          />
        </div>
      </section>

      {/* Service Area checker */}
      <section className="section-alt">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <ServiceAreaChecker />
        </div>
      </section>

      {/* Quote form — the destination of the hero ZIP CTA */}
      <section className="bg-white" id="quote-form-section">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="space-y-4">
              <p className="kicker">Free quote</p>
              <h2 className="section-title">Tell us about your lawn.</h2>
              <p className="text-sm text-brand-slate">
                Share a few details and we'll send a custom seasonal quote.
                We typically respond same day during business hours.
              </p>
              <p className="text-sm text-brand-slate">
                Prefer to talk? <CallButton className="font-semibold text-brand-green underline" eventLabel="form_section" label="Call us instead" />.
              </p>
            </div>
            <div id="quote-form">
              <QuoteForm source="home_main" />
            </div>
          </div>
        </div>
      </section>

      {/* Before / After gallery */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <BeforeAfterGallery />
        </div>
      </section>

      {/* What to expect — short post-signup explainer */}
      <section className="section-alt">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <WhatToExpect />
        </div>
      </section>

      {/* Testimonials — labeled placeholders */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="mb-8 space-y-2">
            <p className="kicker">Customer reviews</p>
            <h2 className="section-title">What Tulsa homeowners say.</h2>
            <p className="text-xs text-brand-slate">
              These are placeholder cards — paste real Google / Facebook reviews
              into the <code>reviews</code> array in <code>app/page.tsx</code>.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <figure key={index} className="card">
                <blockquote className="text-sm text-brand-slate">&ldquo;{review.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-green">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Repeated CTA #2 — final */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <RepeatedQuoteCta
            heading="Ready for a better lawn?"
            subtext="Get a free quote today. No pressure, no obligation."
            variant="navy"
            eventLabel="home_final"
          />
        </div>
      </section>
    </div>
  );
}
