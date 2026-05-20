/**
 * Trust strip — near the hero.
 *
 * Every value below is a PLACEHOLDER. Swap each one for a real number,
 * then remove the comment markers so it stops looking like a placeholder.
 *
 * If you don't have a number for one, delete that <li> entirely — better
 * to show 3 strong stats than 5 with "TBD".
 */

const STATS = [
  {
    value: "4.9★",
    label: "[PLACEHOLDER] Google rating"
    // ^ Once you have a real Google rating, paste it here (e.g. "4.9★")
    //   and the count of reviews in the next item.
  },
  {
    value: "[##]+",
    label: "[PLACEHOLDER] Google reviews"
  },
  {
    value: "[Year]",
    label: "[PLACEHOLDER] Year founded"
  },
  {
    value: "[###]+",
    label: "[PLACEHOLDER] Tulsa lawns treated"
  },
  {
    value: "Licensed",
    label: "[PLACEHOLDER] OK pesticide applicator license #"
  }
];

export const TrustStrip = () => {
  return (
    <div className="border-y border-brand-border bg-brand-offwhite">
      <div className="mx-auto w-full max-w-6xl px-4 py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center sm:justify-between">
          {STATS.map((stat) => (
            <li key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-2xl text-brand-navy">{stat.value}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-slate">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
