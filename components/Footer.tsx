import Link from "next/link";
import {
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  EMAIL,
  EMAIL_HREF,
  REFERRAL_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  REALGREEN_PORTAL_URL,
  SERVICE_AREAS,
  SITE_NAME
} from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="border-t border-brand-border bg-brand-navy">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 text-white">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-white">
              <span className="font-display">{SITE_NAME}</span>
            </p>
            <p className="text-sm text-white/80">
              Premium weed control and fertilization for Tulsa-area homes.
              Locally owned, consistent, and easy to work with.
            </p>
            <p className="text-sm text-white/80">{BUSINESS_ADDRESS}</p>
          </div>
          <div className="space-y-2 text-sm text-white/80">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-green">
              Service Area
            </p>
            <p>{SERVICE_AREAS.join(", ")}</p>
            <p>Hours: {BUSINESS_HOURS}</p>
          </div>
          <div className="space-y-3 text-sm">
            <a
              href={PHONE_TEL}
              className="block font-semibold text-brand-green"
              aria-label={`Call ${SITE_NAME} at ${PHONE_DISPLAY}`}
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={EMAIL_HREF}
              className="block text-white/80 hover:text-brand-green"
            >
              {EMAIL}
            </a>
            <Link
              href="/pay"
              className="block text-white/80 hover:text-brand-green"
            >
              Pay Bill
            </Link>
            <a
              href={REALGREEN_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/80 hover:text-brand-green"
            >
              Customer Portal
            </a>
            <Link
              href="/support"
              className="block text-white/80 hover:text-brand-green"
            >
              Existing Customer Support
            </Link>
            {REFERRAL_URL && (
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-brand-green"
              >
                Refer a Friend
              </a>
            )}
            <Link
              href="/privacy"
              className="block text-white/80 hover:text-brand-green"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-brand-border pt-6 text-xs text-white/80 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Licensed &amp; insured</p>
        </div>
      </div>
    </footer>
  );
};
