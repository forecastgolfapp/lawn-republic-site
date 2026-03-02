import Link from "next/link";
import {
  CLICKI_REFERRAL_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  REALGREEN_PORTAL_URL,
  SERVICE_AREAS,
  SITE_NAME
} from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="border-t border-white/60 bg-white/80">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-slate-900">
              <span className="font-display">{SITE_NAME}</span>
            </p>
            <p className="text-sm text-slate-600">
              Premium weed control and fertilization for Tulsa-area homes. Locally
              owned, consistent, and easy to work with.
            </p>
            <p className="text-sm text-slate-600">Address: Tulsa, OK (placeholder)</p>
          </div>
          <div className="space-y-2 text-sm text-slate-600">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Service Area
            </p>
            <p>{SERVICE_AREAS.join(", ")}</p>
            <p>Hours: Mon-Fri 8am-6pm (placeholder)</p>
          </div>
          <div className="space-y-3 text-sm">
            <a
              href={PHONE_TEL}
              className="block font-semibold text-brand-700"
              aria-label={`Call ${SITE_NAME} at ${PHONE_DISPLAY}`}
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={REALGREEN_PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="block text-slate-600 hover:text-brand-700"
            >
              Pay Bill / Customer Login
            </a>
            <a
              href={CLICKI_REFERRAL_URL}
              target="_blank"
              rel="noreferrer"
              className="block text-slate-600 hover:text-brand-700"
            >
              Refer a Friend
            </a>
            <Link href="/privacy" className="block text-slate-600 hover:text-brand-700">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200/60 pt-6 text-xs text-slate-500 md:flex-row">
          <p>(c) {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Licensed & insured (placeholder)</p>
        </div>
      </div>
    </footer>
  );
};
