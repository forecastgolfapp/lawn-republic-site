/**
 * "What to expect as a customer" — short explainer that walks new customers
 * through the post-quote, post-signup experience. Reduces friction and
 * lowers the support load on common newcomer questions.
 *
 * Content is editable; lawnrepublic-specific wording lives right here.
 */

const EXPECTATIONS = [
  {
    title: "1. We confirm and schedule",
    body: "After your quote is accepted, we set you up in our scheduling system and tell you when your first visit will be."
  },
  {
    title: "2. We notify before each visit",
    body: "You'll get a heads-up before each treatment so you can move toys, unlock the gate, and plan around it."
  },
  {
    title: "3. We treat and leave clear notes",
    body: "After every visit we leave service notes — what we applied, what we noticed, and any care instructions (like watering)."
  },
  {
    title: "4. We follow up between visits",
    body: "Have a question or see something off between treatments? Call us or submit the support form — we'll come back out if needed."
  }
];

export const WhatToExpect = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="kicker">What to expect</p>
        <h2 className="section-title">Your first 30 days as a customer.</h2>
        <p className="text-sm text-brand-slate">
          We try to make lawn care simple. Here's what working with us looks like.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {EXPECTATIONS.map((item) => (
          <div key={item.title} className="card">
            <h3 className="font-display text-xl text-brand-navy">{item.title}</h3>
            <p className="mt-2 text-sm text-brand-slate">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
