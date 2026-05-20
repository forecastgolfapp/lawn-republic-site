/**
 * Before/after photo gallery.
 *
 * Every entry is a PLACEHOLDER. To add a real one:
 *   1. Drop both photos into /public/before-after/ (e.g. lawn-1-before.jpg
 *      and lawn-1-after.jpg)
 *   2. Replace the placeholder objects below with real paths + a short caption
 *      describing how long between photos and what was treated
 *   3. Remove the placeholder dashed border styling — just delete the
 *      `isPlaceholder` flag
 *
 * National leaders (TruGreen, Lawn Doctor) lean heavily on before/after
 * imagery. Even 2 real pairs convert better than 6 placeholders.
 */

const GALLERY = [
  {
    isPlaceholder: true,
    caption: "[Add caption — e.g. 'Bermuda lawn, 8 weeks between treatments']",
    before: null as string | null,
    after: null as string | null
  },
  {
    isPlaceholder: true,
    caption: "[Add caption — fescue, crabgrass cleanup, etc.]",
    before: null as string | null,
    after: null as string | null
  },
  {
    isPlaceholder: true,
    caption: "[Add caption]",
    before: null as string | null,
    after: null as string | null
  }
];

const PlaceholderTile = ({ label }: { label: string }) => (
  <div className="flex aspect-square w-full flex-col items-center justify-center rounded-2xl border border-dashed border-brand-navy/30 bg-brand-offwhite p-3 text-center">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">{label}</p>
    <p className="mt-1 text-xs text-brand-slate">photo placeholder</p>
  </div>
);

export const BeforeAfterGallery = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="kicker">Real results</p>
        <h2 className="section-title">Before &amp; after on Tulsa lawns.</h2>
        <p className="text-xs text-brand-slate">
          Placeholder gallery — replace each pair in <code>components/BeforeAfterGallery.tsx</code> with
          a real before/after photo set.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {GALLERY.map((item, index) => (
          <figure
            key={index}
            className="rounded-3xl border border-brand-border bg-white p-4 shadow-card"
          >
            <div className="grid grid-cols-2 gap-2">
              {item.isPlaceholder || !item.before ? (
                <PlaceholderTile label="Before" />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={item.before}
                  alt={`Before — ${item.caption}`}
                  className="aspect-square w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              )}
              {item.isPlaceholder || !item.after ? (
                <PlaceholderTile label="After" />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={item.after}
                  alt={`After — ${item.caption}`}
                  className="aspect-square w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              )}
            </div>
            <figcaption className="mt-3 text-xs text-brand-slate">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
