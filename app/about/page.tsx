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
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              About Lawn Republic
            </p>
            <h1 className="font-display text-4xl text-slate-900 sm:text-5xl">
              Local lawn care with premium service.
            </h1>
            <p className="text-lg text-slate-600">
              We help Tulsa-area homeowners keep their lawns healthy year-round. Lawn
              Republic blends modern treatments, consistent scheduling, and friendly
              communication to make lawn care simple.
            </p>
            <div className="flex flex-wrap gap-3">
              <CallButton
                className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
                eventLabel="about_hero"
              />
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Serving Tulsa metro
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Our routes cover {SERVICE_AREAS.join(", ")}, giving you reliable seasonal
              visits and fast support.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Locally owned - Licensed & insured (placeholder)
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft"
            >
              <h3 className="font-display text-2xl text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
