import { CallButton } from "@/components/CallButton";

/**
 * Plain-language guarantee — TruGreen-style: big logo lockup on tinted bg
 * with the guarantee text alongside.
 *
 * Replace `GUARANTEE_HEADLINE` and `GUARANTEE_BODY` with your real promise.
 * Make it specific — "we'll re-treat at no charge" beats "satisfaction
 * guaranteed."
 */

const GUARANTEE_HEADLINE = "[PLACEHOLDER] The Lawn Republic Guarantee";
const GUARANTEE_BODY =
  "[PLACEHOLDER — write your real guarantee in plain words. Example: 'If you're not happy with your lawn between visits, we'll come back and re-treat at no extra charge. Just call us.']";

export const Guarantee = () => {
  return (
    <div className="rounded-3xl bg-[#E8F5EC] p-8 sm:p-12">
      <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
        <div className="flex h-full items-center justify-center">
          <div className="flex aspect-square w-40 max-w-full items-center justify-center rounded-2xl border-2 border-brand-green bg-white">
            <div className="text-center">
              <p className="font-display text-2xl font-extrabold uppercase tracking-tight text-brand-green">
                Lawn Republic
              </p>
              <p className="font-display text-2xl font-extrabold uppercase tracking-tight text-brand-green">
                Guarantee
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="kicker">Our promise</p>
          <h2 className="font-display text-3xl text-brand-navy sm:text-4xl" style={{ fontWeight: 800 }}>
            {GUARANTEE_HEADLINE}
          </h2>
          <p className="text-base text-brand-slate sm:text-lg">{GUARANTEE_BODY}</p>
          <div className="pt-2">
            <CallButton className="btn-primary-lg" eventLabel="guarantee_block" />
          </div>
        </div>
      </div>
    </div>
  );
};
