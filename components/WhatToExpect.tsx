/**
 * "What to expect" — TruGreen-style numbered list, two rows of three.
 *
 * Edit the EXPECTATIONS array freely.
 */

const EXPECTATIONS = [
  "Your Lawn Republic specialist will perform a lawn assessment.",
  "We'll visit your property every 4-6 weeks during the season.",
  "Your specialist will leave a service summary at the door.",
  "Brown or bare spots are a sign that weeds are dying out, leaving your grass more room to grow.",
  "Your specialist will offer tips and suggestions for care between visits.",
  "We'll come out as often as needed between scheduled visits to ensure your satisfaction."
];

export const WhatToExpect = () => {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-3">
        <p className="kicker">What to expect</p>
        <h2 className="section-title-xl">What to expect.</h2>
      </div>
      <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {EXPECTATIONS.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-base font-bold text-white">
              {index + 1}
            </span>
            <p className="pt-1.5 text-base text-brand-navy">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
