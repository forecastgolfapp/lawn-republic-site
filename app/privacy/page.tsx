import { CallButton } from "@/components/CallButton";

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            Privacy Policy
          </p>
          <h1 className="font-display text-4xl text-slate-900">Your privacy matters.</h1>
          <p className="text-sm text-slate-600">
            Lawn Republic collects basic contact details submitted through forms and phone
            calls so we can respond to your requests. We do not sell your personal
            information. This policy is a placeholder and should be updated with your
            final legal language.
          </p>
          <p className="text-sm text-slate-600">
            If you have any questions, please contact us directly.
          </p>
        </div>
        <CallButton
          className="inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
          eventLabel="privacy_cta"
          label="Call with Questions"
        />
      </div>
    </div>
  );
}
