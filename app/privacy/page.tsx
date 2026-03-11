import { CallButton } from "@/components/CallButton";

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="kicker">Privacy Policy</p>
          <h1 className="font-display text-4xl text-brand-navy">Your privacy matters.</h1>
          <p className="text-sm text-brand-slate">
            Lawn Republic collects basic contact details submitted through forms and phone
            calls so we can respond to your requests. We do not sell your personal
            information. This policy is a placeholder and should be updated with your
            final legal language.
          </p>
          <p className="text-sm text-brand-slate">
            If you have any questions, please contact us directly.
          </p>
        </div>
        <CallButton
          className="btn-primary"
          eventLabel="privacy_cta"
          label="Call with Questions"
        />
      </div>
    </div>
  );
}
