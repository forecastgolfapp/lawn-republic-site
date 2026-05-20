import { CallButton } from "@/components/CallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { RepeatedQuoteCta } from "@/components/RepeatedQuoteCta";
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
    season: "Early Spring (Feb–Mar)",
    title: "Pre-Emergent + Post Control",
    bermuda: "Specticle FLO (pre-emergent) + RoundUp for existing winter weeds.",
    fescue: "Barricade 4FL + 3-Way Broadleaf Weed Control + High-Nitrogen Fertilizer.",
    details:
      "Builds the first barrier against crabgrass, spurge, and annual bluegrass. Encourages early fescue green-up."
  },
  {
    season: "Late Spring (Apr–May)",
    title: "Pre-Emergent + Weed Control",
    bermuda: "Barricade 4FL + 3-Way Broadleaf Weed Control.",
    fescue: "Barricade 4FL + 3-Way Broadleaf Weed Control + High-Nitrogen Fertilizer.",
    details:
      "Extends crabgrass prevention and strengthens turf for summer stress."
  },
  {
    season: "Early Summer (June)",
    title: "Fertilizer + Weed Control",
    bermuda: "High-Nitrogen Fertilizer + spot treatment of weeds.",
    fescue: "Preventative Fungicide + spot treatment of weeds.",
    details:
      "Feeds Bermuda during peak growth while cleaning up emerging weeds. Protects fescue from brown patch."
  },
  {
    season: "Mid-Summer (Jul–Aug)",
    title: "Turf Maintenance",
    bermuda: "High-Nitrogen Fertilizer + spot treatment of weeds.",
    fescue: "Preventative Fungicide + spot treatment of weeds.",
    details:
      "Keeps Bermuda dense and green through heat. Continues fungus protection for fescue."
  },
  {
    season: "Late Summer (Aug–Sep)",
    title: "Turf Recovery",
    bermuda: "High-Nitrogen Fertilizer + spot treatment of weeds.",
    fescue: "Preventative Fungicide + spot treatment of weeds.",
    details:
      "Final fertilizer push for Bermuda before dormancy. Fescue receives disease prevention and last pre-seeding cleanup."
  },
  {
    season: "Fall (Oct–Nov)",
    title: "Pre-Emergent + Winter Weed Control",
    bermuda: "Simazine 4L + 3-Way Broadleaf Weed Control.",
    fescue: "High-Nitrogen Fertilizer + spot treatment of weeds.",
    details:
      "Builds fall barrier against henbit and chickweed for Bermuda; improves winter color for fescue."
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
      <section className="relative overflow-hidden border-b border-brand-border">
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
              <span className="rounded-full border border-brand-border bg-white/80 px-4 py-3 text-sm font-semibold text-brand-slate">
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
                className="rounded-2xl border border-brand-border bg-white/90 p-4 text-sm text-brand-slate shadow-soft"
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
                className="rounded-3xl border border-brand-border bg-white/90 p-5 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-green">
                  {step.season}
                </p>
                <h3 className="mt-2 font-display text-xl text-brand-navy">{step.title}</h3>
                <dl className="mt-3 space-y-2 text-sm text-brand-slate">
                  <div>
                    <dt className="font-semibold text-brand-navy">Bermuda</dt>
                    <dd>{step.bermuda}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-navy">Fescue</dt>
                    <dd>{step.fescue}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-sm text-brand-slate">{step.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-brand-border bg-white/90 p-8 shadow-soft">
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

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <RepeatedQuoteCta
          heading={`Serving ${SERVICE_AREAS.join(", ")}`}
          subtext="Ready for better turf? We're booking new clients across the Tulsa metro."
          variant="navy"
          eventLabel="lawn_treatment_footer"
        />
      </section>
    </div>
  );
}
