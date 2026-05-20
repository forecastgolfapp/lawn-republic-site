import type { Metadata } from "next";
import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { RepeatedQuoteCta } from "@/components/RepeatedQuoteCta";
import { PHONE_DISPLAY, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ | ${SITE_NAME}`,
  description:
    "Common questions about Lawn Republic weed control, fertilization, billing, pricing, and what to expect as a customer."
};

type Faq = { q: string; a: string };
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
        a: "Enter your ZIP on the home page. If we serve your area we'll say so on the spot; if not, you can still submit and we'll reach out when we expand."
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
        a: "Call us or submit the support form. See our guarantee on the home page — we stand behind our work."
      }
    ]
  },
  {
    title: "Billing",
    faqs: [
      {
        q: "How do I pay my bill?",
        a: "You can pay online through the RealGreen customer portal (cards and ACH) or via Venmo @LawnRepublic. There's a Pay Bill link in the header."
      },
      {
        q: "I have a billing question. Who do I contact?",
        a: `Use the support form on the /support page (Customer # required) or call ${PHONE_DISPLAY} during business hours.`
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
        a: "Six visits across the year, each timed to weed and growth patterns — pre-emergent in early spring, weed control + fertilizer through summer, recovery in fall, and winter prep. See /lawn-treatment for the full breakdown."
      }
    ]
  }
];

export default function FaqPage() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 py-14">
          <div className="space-y-3">
            <p className="kicker">FAQ</p>
            <h1 className="font-display text-4xl text-brand-navy sm:text-5xl">
              Common questions, answered.
            </h1>
            <p className="text-lg text-brand-slate">
              Don't see your question? <Link href="/#quote-form" className="font-semibold text-brand-green underline">Send it through the form</Link>{" "}
              or call us at <CallButton className="font-semibold text-brand-green underline" eventLabel="faq_hero" label={PHONE_DISPLAY} />.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 space-y-12">
          {GROUPS.map((group) => (
            <div key={group.title} className="space-y-4">
              <h2 className="section-title">{group.title}</h2>
              <div className="space-y-3">
                {group.faqs.map((faq) => (
                  <details
                    key={faq.q}
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
                    <p className="mt-3 text-sm text-brand-slate">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <RepeatedQuoteCta
          heading="Still have a question?"
          subtext="Call us or send a quote request — we'll be in touch."
          variant="navy"
          eventLabel="faq_footer"
        />
      </section>
    </div>
  );
}
