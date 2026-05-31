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

const ANCHOR_LINKS = [
  { href: "/#program", label: "Lawn Treatment" },
  { href: "/#weeds", label: "What We Treat" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#quote-form", label: "Get a Quote" }
] as const;

const UTILITY_LINKS = [
  { href: "/pay", label: "Pay Bill", external: false },
  { href: REALGREEN_PORTAL_URL, label: "Customer Portal", external: true },
  { href: "/support", label: "Existing Customer Support", external: false },
  { href: "/privacy", label: "Privacy Policy", external: false }
] as const;

export const Footer = () => {
  return (
    <footer className="border-t border-brand-border bg-brand-navy">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 text-white">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <p className="font-display text-lg font-extrabold uppercase tracking-tight text-white">
              {SITE_NAME}
            </p>
            <p className="text-sm text-white/80">
              Premium weed control and fertilization for Tulsa-area homes.
              Locally owned, consistent, and easy to work with.
            </p>
            <p className="text-sm text-white/80">{BUSINESS_ADDRESS}</p>
            <a
              href={PHONE_TEL}
              className="block text-base font-semibold text-brand-green"
              aria-label={`Call ${SITE_NAME} at ${PHONE_DISPLAY}`}
            >
              {PHONE_DISPLAY}
            </a>
            <a href={EMAIL_HREF} className="block text-sm text-white/80 hover:text-brand-green">
              {EMAIL}
            </a>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-green">Site</p>
            {ANCHOR_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="block text-white/80 hover:text-brand-green">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-green">Customers</p>
            {UTILITY_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/80 hover:text-brand-green"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className="block text-white/80 hover:text-brand-green">
                  {link.label}
                </Link>
              )
            )}
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
          </div>
        </div>

        <div className="mt-8 grid gap-2 border-t border-white/10 pt-6 text-xs text-white/70 sm:grid-cols-3">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Service area: {SERVICE_AREAS.join(", ")}</p>
          <p className="sm:text-right">Hours: {BUSINESS_HOURS} &middot; Licensed &amp; insured</p>
        </div>
      </div>
    </footer>
  );
};
