/**
 * Short "about us" block — replaces the old standalone /about page.
 * Three value pillars + a brief intro paragraph.
 */

const VALUES = [
  {
    title: "Locally owned",
    body: "Built in Tulsa, focused on the neighborhoods we serve every week. You always know who's coming."
  },
  {
    title: "Proactive care",
    body: "We plan ahead for seasonal weeds and communicate clearly before every visit. No surprises."
  },
  {
    title: "Premium results",
    body: "Programs tailored to Oklahoma turf so you see thicker, greener lawns — not just paperwork."
  }
];

export const AboutBlock = () => {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
      <div className="space-y-4">
        <p className="kicker">About Lawn Republic</p>
        <h2 className="section-title-xl">Local lawn care with premium service.</h2>
        <p className="text-base text-brand-slate sm:text-lg">
          We help Tulsa-area homeowners keep their lawns healthy year-round. Modern
          treatments, consistent scheduling, and friendly communication — that's it.
        </p>
        <p className="text-xs text-brand-slate">Locally owned &middot; Licensed &amp; insured</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {VALUES.map((value) => (
          <div key={value.title} className="rounded-3xl border border-brand-border bg-white p-5 shadow-card">
            <h3 className="font-display text-xl text-brand-navy">{value.title}</h3>
            <p className="mt-2 text-sm text-brand-slate">{value.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
