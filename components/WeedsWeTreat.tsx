/**
 * "Weeds invading your lawn?" section — TruGreen-style card grid showing the
 * common Oklahoma weeds we treat.
 *
 * Each card has an image slot. Until you have real weed photos:
 *   1. Drop images at /public/weeds/<slug>.jpg (e.g. /public/weeds/crabgrass.jpg)
 *   2. Replace the WEEDS entries below — the placeholder tile disappears
 *      automatically once `image` is set
 *
 * Stock photos are fine here. Better than placeholders.
 */

type Weed = {
  name: string;
  slug: string;
  image: string | null;
  body: string;
};

const WEEDS: Weed[] = [
  {
    name: "Crabgrass",
    slug: "crabgrass",
    image: null,
    body: "Fast-spreading summer annual. Pre-emergent in early spring is the single most effective tool."
  },
  {
    name: "Dandelion",
    slug: "dandelion",
    image: null,
    body: "Persistent broadleaf weed with deep taproots. We control it with timed 3-way broadleaf treatments."
  },
  {
    name: "Clover",
    slug: "clover",
    image: null,
    body: "Common low-growing broadleaf. Spot-treated through the season and pushed out by a thicker lawn."
  },
  {
    name: "Nutsedge",
    slug: "nutsedge",
    image: null,
    body: "Stubborn sedge that thrives in wet, compacted soil. Requires targeted herbicides and recovery feedings."
  },
  {
    name: "Spurge",
    slug: "spurge",
    image: null,
    body: "Mat-forming summer annual. Pre-emergent + early summer post-emergent stops it before it sets seed."
  },
  {
    name: "Henbit & Chickweed",
    slug: "henbit-chickweed",
    image: null,
    body: "Winter annuals that take over Bermuda lawns in dormancy. Fall pre-emergent is the answer."
  }
];

const WeedTile = ({ name, image }: { name: string; image: string | null }) => {
  if (image) {
    return (
      <div className="overflow-hidden rounded-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
      </div>
    );
  }
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-dashed border-brand-navy/30 bg-brand-offwhite p-4 text-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">{name}</p>
        <p className="mt-1 text-xs text-brand-slate">Drop a photo at /public/weeds/&lt;slug&gt;.jpg</p>
      </div>
    </div>
  );
};

export const WeedsWeTreat = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl space-y-3">
        <p className="kicker">What we treat</p>
        <h2 className="section-title-xl">Weeds invading your lawn?</h2>
        <p className="text-base text-brand-slate sm:text-lg">
          Lawn Republic targets the weeds that hit Oklahoma turf hardest, with
          season-specific timing and the right chemistry for your grass type.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WEEDS.map((weed) => (
          <article key={weed.slug} className="overflow-hidden rounded-3xl border border-brand-border bg-white shadow-card">
            <WeedTile name={weed.name} image={weed.image} />
            <div className="space-y-2 p-5">
              <h3 className="font-display text-2xl text-brand-navy">{weed.name}</h3>
              <p className="text-sm text-brand-slate">{weed.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
