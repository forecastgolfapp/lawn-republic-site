import { CallButton } from "@/components/CallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { SERVICE_AREAS } from "@/lib/site";

const includedItems = [
  "Pre-emergent protection for seasonal weeds",
  "Targeted weed control for broadleaf & grassy weeds",
  "Seasonal fertilization for deeper green color",
  "Consistent scheduling with proactive updates",
  "Clear communication and expert recommendations"
];

const programSteps = [
  {
    season: "Early Spring",
    title: "Pre-emergent foundation",
    description: "Stops new weeds before they sprout and wakes up the turf."
  },
  {
    season: "Mid Spring",
    title: "Weed control + fertilizer",
    description: "Targets existing weeds and feeds for steady growth."
  },
  {
    season: "Early Summer",
    title: "Heat-stress support",
    description: "Keeps turf strong through Oklahoma heat."
  },
  {
    season: "Mid Summer",
    title: "Spot control",
    description: "Knocks out breakthrough weeds and reinforces coverage."
  },
  {
    season: "Early Fall",
    title: "Recovery + nutrition",
    description: "Builds density and color after summer stress."
  },
  {
    season: "Late Fall",
    title: "Winter prep",
    description: "Stores nutrients for a strong spring green-up."
  }
];

const faqs = [
  {
    question: "Is this safe for kids and pets?",
    answer:
      "Yes. We apply products according to label directions and provide clear re-entry guidance after each visit."
  },
  {
    question: "Should I water after a treatment?",
    answer:
      "We will let you know after each visit. Most treatments need watering within 24 hours for best results."
  },
  {
    question: "How soon will I see results?",
    answer:
      "Weeds typically start to decline within 7-14 days, with steady improvement after each visit."
  },
  {
    question: "Do you treat Bermuda and fescue?",
    answer:
      "Yes. We customize the program for warm-season and cool-season grasses common in Tulsa."
  },
  {
    question: "How does scheduling work?",
    answer:
      "We build a seasonal schedule and notify you ahead of each visit so you always know what to expect."
  }
];

export default function LawnTreatmentPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-brand-gold/30">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="kicker">Tulsa Weed Control + Fertilization</p>
            <h1 className="font-display text-4xl text-brand-navy sm:text-5xl">
              Weed Control + Fertilization + Pre-Emergent
            </h1>
            <p className="text-lg text-brand-slate">
              A single, seasonal program that keeps your lawn green, dense, and weed-free.
              Built specifically for Tulsa-area turf.
            </p>
            <div className="flex flex-wrap gap-3">
              <CallButton
                className="btn-primary"
                eventLabel="lawn_treatment_hero"
              />
              <span className="rounded-full border border-brand-gold/30 bg-white/80 px-4 py-3 text-sm font-semibold text-brand-slate">
                Fast response times
              </span>
            </div>
          </div>
          <QuoteForm
            source="lawn_treatment"
            title="Get a Lawn Treatment Quote"
            subtitle="Short form, quick response from our local team."
            compact
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="kicker">What&apos;s Included</p>
            <h2 className="section-title">Everything your lawn needs to thrive.</h2>
            <p className="text-sm text-brand-slate">
              Our Tulsa program is built around the weeds and weather that hit your lawn each season.
            </p>
          </div>
          <ul className="grid gap-3">
            {includedItems.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-brand-gold/30 bg-white/90 p-4 text-sm text-brand-slate shadow-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="space-y-6">
          <div>
            <p className="kicker">6-Step Program</p>
            <h2 className="section-title">Seasonal treatments timed for Oklahoma lawns.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {programSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-brand-gold/30 bg-white/90 p-5 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-green">
                  {step.season}
                </p>
                <h3 className="mt-2 font-display text-xl text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-slate">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-brand-gold/40 bg-white/90 p-8 shadow-soft">
          <p className="kicker">FAQ</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="space-y-2">
                <h3 className="text-lg font-semibold text-brand-navy">{faq.question}</h3>
                <p className="text-sm text-brand-slate">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-brand-gold/40 bg-brand-navy/95 p-8 text-brand-cream shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
                Service Area
              </p>
              <h2 className="font-display text-3xl text-brand-cream">
                Serving {SERVICE_AREAS.join(", ")}
              </h2>
              <p className="text-sm text-brand-cream/80">
                Ready for better turf? We are booking new clients across Tulsa.
              </p>
            </div>
            <CallButton
              className="btn-gold"
              eventLabel="lawn_treatment_footer"
              label="Call for a Quote"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
