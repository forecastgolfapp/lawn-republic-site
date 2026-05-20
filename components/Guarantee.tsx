import { CallButton } from "@/components/CallButton";

/**
 * Plain-language guarantee — should appear high on every key page.
 *
 * The wording below is a PLACEHOLDER. Replace `GUARANTEE_HEADLINE` and
 * `GUARANTEE_BODY` with whatever you actually promise customers. Keep it
 * specific ("we'll re-treat at no charge") rather than vague ("satisfaction
 * guaranteed").
 *
 * If you don't have a guarantee yet, this is one of the highest-leverage
 * things you can add — it directly increases conversion. Lawn Doctor uses
 * "If you're not satisfied, we'll re-treat at no extra cost." TruGreen uses
 * "Healthy Lawn Guarantee." Pick something you can actually stand behind.
 */

const GUARANTEE_HEADLINE = "[PLACEHOLDER] Our Lawn Republic Guarantee";
const GUARANTEE_BODY =
  "[PLACEHOLDER — write your real guarantee here in plain words. Example: 'If you're not happy with your lawn between visits, we'll come back and re-treat at no extra charge. Just call us.']";

export const Guarantee = () => {
  return (
    <div className="card border-2 border-brand-green/30 bg-white">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="kicker">Our promise</p>
          <h2 className="font-display text-2xl text-brand-navy sm:text-3xl">
            {GUARANTEE_HEADLINE}
          </h2>
          <p className="text-sm text-brand-slate sm:text-base">{GUARANTEE_BODY}</p>
        </div>
        <CallButton className="btn-primary-lg whitespace-nowrap" eventLabel="guarantee_block" />
      </div>
    </div>
  );
};
