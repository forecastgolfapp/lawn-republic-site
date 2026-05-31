import Link from "next/link";
import { PHONE_DISPLAY } from "@/lib/site";

type Faq = { q: string; a: React.ReactNode };
type FaqGroup = { title: string; faqs: Faq[] };

const GROUPS: FaqGroup[] = [
  {
    title: "Before service",
    faqs: [
      {
        q: "How does pricing work?",
        a: "Pricing is based on lawn square footage and the program you choose. We send a custom written quote — no obligation — after you submit the form or call us. Most quotes go out the same business day."
      },
      {
        q: "Do you treat Bermuda and fescue?",
        a: "Yes. Our 6-step program is customized for warm-season grasses (Bermuda) and cool-season grasses (fescue), each with timing and products specific to that turf type."
      },
      {
        q: "Do you require a contract?",
        a: "No long-term contract. We bill per visit and you can cancel any time."
      },
      {
        q: "How do I know if I'm in your service area?",
        a: "Use the ZIP form near the top of this page. If we serve your area we'll say so; if not, you can still submit — we'll reach out when we expand."
      }
    ]
  },
  {
    title: "After service",
    faqs: [
      {
        q: "Is the treatment safe for kids and pets?",
        a: "Yes. We apply all products according to label directions and leave clear re-entry guidance after each visit (usually a couple of hours)."
      },
      {
        q: "How soon will I see results?",
        a: "Most weeds start to decline within 7–14 days, with steady improvement after each visit through the season."
      },
      {
        q: "Should I water after a treatment?",
        a: "We'll let you know after each visit. Most treatments benefit from watering within 24 hours."
      },
      {
        q: "What if I have a problem between visits?",
        a: (
          <>
            Call us or submit the{" "}
            <Link href="/support" className="font-semibold text-brand-green underline">
              support form
            </Link>
            . See our guarantee above — we stand behind our work.
          </>
        )
      }
    ]
  },
  {
    title: "Billing",
    faqs: [
      {
        q: "How do I pay my bill?",
        a: (
          <>
            Pay online through the{" "}
            <Link href="/pay" className="font-semibold text-brand-green underline">
              customer portal
            </Link>{" "}
            (cards and ACH) or via Venmo @LawnRepublic.
          </>
        )
      },
      {
        q: "I have a billing question. Who do I contact?",
        a: (
          <>
            Use the{" "}
            <Link href="/support" className="font-semibold text-brand-green underline">
              support form
            </Link>{" "}
            (Customer # required) or call {PHONE_DISPLAY}.
          </>
        )
      },
      {
        q: "Where do I update my card or autopay?",
        a: "Sign in to the RealGreen customer portal — same link as Pay Bill — and update your billing info there."
      }
    ]
  },
  {
    title: "Pricing & programs",
    faqs: [
      {
        q: "Do you offer one-time treatments?",
        a: "Our 6-step program is built around seasonal timing, so the strongest results come from the full program. We can quote individual visits in some cases — ask when you request a quote."
      },
      {
        q: "What does the 6-step program include?",
        a: "Six visits across the year, each timed to weed and growth patterns — pre-emergent in early spring, weed control + fertilizer through summer, recovery in fall, and winter prep. See the program section above for the full breakdown."
      }
    ]
  }
];

export const FaqAccordion = () => {
  return (
    <div className="space-y-10">
      <div className="max-w-2xl space-y-3">
        <p className="kicker">FAQ</p>
        <h2 className="section-title-xl">Common questions, answered.</h2>
      </div>
      <div className="space-y-10">
        {GROUPS.map((group) => (
          <div key={group.title} className="space-y-4">
            <h3 className="font-display text-2xl text-brand-navy">{group.title}</h3>
            <div className="space-y-3">
              {group.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-brand-border bg-white p-5 shadow-card open:border-brand-green/40"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-brand-navy">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="mt-1 text-xl leading-none text-brand-green transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="mt-3 text-sm text-brand-slate">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
