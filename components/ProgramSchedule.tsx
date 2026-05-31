/**
 * The detailed 6-step Bermuda/Fescue program — moved from the standalone
 * /lawn-treatment page into the home page.
 *
 * Content matches what was previously on /lawn-treatment.
 */

const STEPS = [
  {
    season: "Early Spring (Feb–Mar)",
    title: "Pre-Emergent + Post Control",
    bermuda: "Specticle FLO (pre-emergent) + RoundUp for existing winter weeds.",
    fescue: "Barricade 4FL + 3-Way Broadleaf Weed Control + High-Nitrogen Fertilizer.",
    details:
      "First barrier against crabgrass, spurge, and annual bluegrass. Wakes fescue up for green-up."
  },
  {
    season: "Late Spring (Apr–May)",
    title: "Pre-Emergent + Weed Control",
    bermuda: "Barricade 4FL + 3-Way Broadleaf Weed Control.",
    fescue: "Barricade 4FL + 3-Way Broadleaf Weed Control + High-Nitrogen Fertilizer.",
    details: "Extends crabgrass prevention and toughens turf before summer stress."
  },
  {
    season: "Early Summer (June)",
    title: "Fertilizer + Weed Control",
    bermuda: "High-Nitrogen Fertilizer + spot treatment of weeds.",
    fescue: "Preventative Fungicide + spot treatment of weeds.",
    details: "Feeds Bermuda at peak growth, protects fescue from brown patch."
  },
  {
    season: "Mid-Summer (Jul–Aug)",
    title: "Turf Maintenance",
    bermuda: "High-Nitrogen Fertilizer + spot treatment of weeds.",
    fescue: "Preventative Fungicide + spot treatment of weeds.",
    details: "Keeps Bermuda dense through heat, continues fescue fungus protection."
  },
  {
    season: "Late Summer (Aug–Sep)",
    title: "Turf Recovery",
    bermuda: "High-Nitrogen Fertilizer + spot treatment of weeds.",
    fescue: "Preventative Fungicide + spot treatment of weeds.",
    details: "Final fertilizer push for Bermuda; disease prevention + cleanup for fescue."
  },
  {
    season: "Fall (Oct–Nov)",
    title: "Pre-Emergent + Winter Weed Control",
    bermuda: "Simazine 4L + 3-Way Broadleaf Weed Control.",
    fescue: "High-Nitrogen Fertilizer + spot treatment of weeds.",
    details: "Builds the fall barrier against henbit and chickweed; improves winter color for fescue."
  }
];

export const ProgramSchedule = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl space-y-3">
        <p className="kicker">6-Step Program</p>
        <h2 className="section-title-xl">Seasonal treatments timed for Oklahoma lawns.</h2>
        <p className="text-base text-brand-slate sm:text-lg">
          One program, six visits, the right chemistry for your turf type. Built
          for Bermuda and fescue lawns across the Tulsa metro.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((step, index) => (
          <article
            key={step.title}
            className="rounded-3xl border border-brand-border bg-white p-6 shadow-card"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green">
                {step.season}
              </p>
            </div>
            <h3 className="mt-3 font-display text-2xl text-brand-navy">{step.title}</h3>
            <dl className="mt-4 space-y-3 text-sm text-brand-slate">
              <div>
                <dt className="font-semibold text-brand-navy">Bermuda</dt>
                <dd>{step.bermuda}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Fescue</dt>
                <dd>{step.fescue}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-brand-slate">{step.details}</p>
          </article>
        ))}
      </div>
    </div>
  );
};
