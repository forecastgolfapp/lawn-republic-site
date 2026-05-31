import { CallButton } from "@/components/CallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { ZipHeroCta } from "@/components/ZipHeroCta";
import { HeroImage } from "@/components/HeroImage";
import { TrustStrip } from "@/components/TrustStrip";
import { Guarantee } from "@/components/Guarantee";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { WhatToExpect } from "@/components/WhatToExpect";
import { WeedsWeTreat } from "@/components/WeedsWeTreat";
import { ProgramSchedule } from "@/components/ProgramSchedule";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AboutBlock } from "@/components/AboutBlock";
import { ServiceAreaChecker } from "@/components/ServiceAreaChecker";

// Placeholder testimonials — paste real Google / Facebook reviews here.
const REVIEWS = [
  {
    quote:
      "[PLACEHOLDER — paste a real Google review. Use the customer's full first name, last initial, and city, e.g. 'Sarah M., Bixby'.]",
    name: "[Customer Name, City]"
  },
  {
    quote:
      "[PLACEHOLDER — paste a real Google review. Aim for 1–2 sentences that mention a specific result.]",
    name: "[Customer Name, City]"
  },
  {
    quote:
      "[PLACEHOLDER — paste a real Google review. Variety helps: one about results, one about communication, one about value.]",
    name: "[Customer Name, City]"
  }
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="space-y-6">
            <p className="kicker">Tulsa-area lawn care</p>
            <h1 className="font-display text-5xl text-brand-navy sm:text-6xl lg:text-7xl" style={{ fontWeight: 800, letterSpacing: "-0.03em" }}>
              A greener, weed-free lawn without the hassle.
            </h1>
            <p className="text-lg text-brand-slate sm:text-xl">
              Premium weed control and fertilization built for Tulsa, Bixby, Jenks,
              and Broken Arrow. Locally owned. Same-day quotes.
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

      {/* TRUST STRIP — flush under hero */}
      <TrustStrip />

      {/* GUARANTEE */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 lg:py-16">
          <Guarantee />
        </div>
      </section>

      {/* WEEDS WE TREAT — TruGreen-style photo grid */}
      <section id="weeds" className="section-alt">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 lg:py-20">
          <WeedsWeTreat />
        </div>
      </section>

      {/* 6-STEP PROGRAM (replaces /lawn-treatment) */}
      <section id="program" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 lg:py-20">
          <ProgramSchedule />
        </div>
      </section>

      {/* WHAT TO EXPECT — TruGreen-style numbered list */}
      <section id="what-to-expect" className="section-alt">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 lg:py-20">
          <WhatToExpect />
        </div>
      </section>

      {/* TESTIMONIALS — dark navy block, like TruGreen's "See the difference" */}
      <section id="reviews" className="section-dark">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 lg:py-20">
          <div className="mb-10 max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-green">
              Customer reviews
            </p>
            <h2 className="font-display text-4xl text-white sm:text-5xl" style={{ fontWeight: 800 }}>
              See the Lawn Republic difference.
            </h2>
            <p className="text-xs text-white/70">
              Placeholder cards — paste real Google / Facebook reviews into the <code>REVIEWS</code> array in <code>app/page.tsx</code>.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {REVIEWS.map((review, index) => (
              <figure
                key={index}
                className="rounded-3xl bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-3 text-brand-green">★★★★★</div>
                <blockquote className="text-base text-white/90">&ldquo;{review.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER GALLERY */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 lg:py-20">
          <BeforeAfterGallery />
        </div>
      </section>

      {/* SERVICE AREA CHECKER */}
      <section className="section-alt">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 lg:py-20">
          <ServiceAreaChecker />
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote-form-section" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="space-y-4">
              <p className="kicker">Free quote</p>
              <h2 className="section-title-xl">Tell us about your lawn.</h2>
              <p className="text-base text-brand-slate sm:text-lg">
                Share a few details and we&apos;ll send a custom seasonal quote.
                Most quotes go out the same business day.
              </p>
              <p className="text-sm text-brand-slate">
                Prefer to talk?{" "}
                <CallButton
                  className="font-semibold text-brand-green underline"
                  eventLabel="form_section"
                  label="Call us instead"
                />
                .
              </p>
            </div>
            <div id="quote-form">
              <QuoteForm source="home_main" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-alt">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 lg:py-20">
          <AboutBlock />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 lg:py-20">
          <FaqAccordion />
        </div>
      </section>

      {/* FINAL CTA — TruGreen-style "Give us a call." */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl border-t border-brand-border px-4 py-12">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2 className="font-display text-4xl text-brand-navy sm:text-5xl" style={{ fontWeight: 800 }}>
              Give us a call.
            </h2>
            <CallButton className="btn-primary-lg" eventLabel="final_cta" />
          </div>
        </div>
      </section>
    </div>
  );
}
