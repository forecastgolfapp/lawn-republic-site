import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { SERVICE_AREAS } from "@/lib/site";

const values = [
  {
    title: "Locally owned",
    description: "Built in Tulsa and focused on the neighborhoods we serve every week."
  },
  {
    title: "Proactive care",
    description: "We plan ahead for seasonal weeds and communicate clearly before every visit."
  },
  {
    title: "Premium results",
    description: "Programs tailored to Oklahoma turf so you see thicker, greener lawns."
  }
];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="kicker">About Lawn Republic</p>
            <h1 className="font-display text-4xl text-brand-navy sm:text-5xl">
              Local lawn care with premium service.
            </h1>
            <p className="text-lg text-brand-slate">
              We help Tulsa-area homeowners keep their lawns healthy year-round. Lawn
              Republic blends modern treatments, consistent scheduling, and friendly
              communication to make lawn care simple.
            </p>
            <div className="flex flex-wrap gap-3">
              <CallButton
                className="btn-primary"
                eventLabel="about_hero"
              />
              <Link href="/#quote-form" className="btn-outline">
                Get My Free Quote
              </Link>
            </div>
          </div>
          <div className="card">
            <p className="kicker">Serving Tulsa metro</p>
            <p className="mt-3 text-sm text-brand-slate">
              Our routes cover {SERVICE_AREAS.join(", ")}, giving you reliable seasonal
              visits and fast support.
            </p>
            <p className="mt-4 text-xs text-brand-slate">
              Locally owned &middot; Licensed &amp; insured
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="card">
              <h3 className="font-display text-2xl text-brand-navy">{value.title}</h3>
              <p className="mt-2 text-sm text-brand-slate">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
