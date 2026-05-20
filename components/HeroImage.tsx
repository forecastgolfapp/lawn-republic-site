/**
 * Hero image slot.
 *
 * When you have a high-res lawn/crew photo:
 *   1. Drop it at /public/hero-lawn.jpg
 *   2. Change SHOW_PLACEHOLDER to false below
 *   3. (Optional) tweak the alt text
 *
 * Until then, this renders a clearly-labeled placeholder so the layout is
 * preserved and you can see exactly where the image will go.
 */

const SHOW_PLACEHOLDER = true;

export const HeroImage = () => {
  if (SHOW_PLACEHOLDER) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-dashed border-brand-navy/30 bg-brand-offwhite">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-green">
            Hero image goes here
          </p>
          <p className="text-sm text-brand-slate">
            Drop a high-res lawn/crew photo at <code className="rounded bg-white px-2 py-1">/public/hero-lawn.jpg</code>
          </p>
          <p className="text-xs text-brand-slate">
            Then flip <code className="rounded bg-white px-1.5">SHOW_PLACEHOLDER</code> to <code className="rounded bg-white px-1.5">false</code> in <code>components/HeroImage.tsx</code>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-brand-border bg-brand-offwhite shadow-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-lawn.jpg"
        alt="A healthy, manicured Tulsa-area lawn"
        className="h-full w-full object-cover"
        loading="eager"
      />
    </div>
  );
};
