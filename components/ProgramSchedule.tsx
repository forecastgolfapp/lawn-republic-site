/**
 * The detailed 6-step Bermuda/Fescue program — moved from the standalone
 * /lawn-treatment page into the home page.
 *
 * Content matches what was previously on /lawn-treatment.
 */

const STEPS = [
  {
    season: "Early Spring (Feb–Mar)",
    title: "Winter Weed Pre-Emergent + Fertilizer",
    bermuda:
      "Winter annual pre-emergent + post-emergent weed control for anything already up.",
    fescue: "Nitrogen fertilizer with potassium and iron — no weed control this round.",
    details:
      "Bermuda gets its first barrier against winter weeds while we knock out anything already breaking through. Fescue gets a strong feeding to drive early green-up."
  },
  {
    season: "Late Spring (Apr–May)",
    title: "Crabgrass Pre-Emergent + Weed Control",
    bermuda: "Crabgrass pre-emergent + broadleaf weed control.",
    fescue: "Crabgrass pre-emergent + broadleaf weed control.",
    details:
      "Same prescription for both turf types: build the season's crabgrass barrier and clean up broadleaf weeds before summer stress sets in."
  },
  {
    season: "Early Summer (June)",
    title: "Summer Fertilizer + Weed Control",
    bermuda: "Nitrogen fertilizer with iron + post-emergent weed control as needed.",
    fescue: "Post-emergent weed control + fungicide when conditions call for it.",
    details:
      "Bermuda hits peak growth with iron-boosted color and stays ahead of new weed flushes. Fescue gets brown-patch protection during humid stretches."
  },
  {
    season: "Mid-Summer (Jul–Aug)",
    title: "Mid-Summer Turf Care",
    bermuda: "Nitrogen fertilizer with iron + post-emergent weed control as needed.",
    fescue: "Post-emergent weed control + fungicide when conditions call for it.",
    details:
      "Same approach through Oklahoma heat — keeps Bermuda dense and dark green, keeps fescue free of summer disease."
  },
  {
    season: "Late Summer (Aug–Sep)",
    title: "Late Summer Recovery",
    bermuda: "Nitrogen fertilizer with iron + post-emergent weed control as needed.",
    fescue: "Post-emergent weed control + fungicide when conditions call for it.",
    details:
      "Final push before Bermuda starts shifting toward dormancy. Fescue is prepped for fall overseeding if needed."
  },
  {
    season: "Fall (Oct–Nov)",
    title: "Winter Pre-Emergent + Fertilizer",
    bermuda: "Winter annual pre-emergent + broadleaf weed control.",
    fescue: "Nitrogen fertilizer — no weed control this round.",
    details:
      "Bermuda's fall barrier against henbit and chickweed. Fescue gets a winter feeding for color into the cold months."
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
