import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import {
  REFERRAL_URL,
  REALGREEN_PORTAL_URL,
  SITE_NAME
} from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/lawn-treatment", label: "Lawn Treatment" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-gold/40 bg-brand-navy/95 backdrop-blur">
      <a
        href="#main-content"
        className="absolute left-2 top-2 -translate-y-16 rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold text-brand-navy shadow-soft transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-brand-cream">
            {SITE_NAME}
          </span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-brand-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CallButton
            className="hidden rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold text-brand-navy shadow-soft transition hover:bg-brand-cream md:inline-flex"
            eventLabel="header"
          />
          <Link
            href="/pay"
            className="hidden rounded-full border border-brand-gold/60 px-4 py-2 text-xs font-semibold text-brand-cream transition hover:bg-brand-gold hover:text-brand-navy md:inline-flex"
          >
            Pay Bill
          </Link>
          {REFERRAL_URL && (
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-brand-gold/60 px-4 py-2 text-xs font-semibold text-brand-cream transition hover:bg-brand-gold hover:text-brand-navy md:inline-flex"
            >
              Refer a Friend
            </a>
          )}
          <CallButton
            className="inline-flex rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold text-brand-navy shadow-soft transition hover:bg-brand-cream md:hidden"
            eventLabel="header_mobile"
            label="Call Now"
          />
        </div>
      </div>
      <div
        className="flex items-center justify-center gap-6 border-t border-brand-gold/40 bg-brand-navy/90 px-4 py-2 text-[11px] text-brand-cream md:hidden"
        aria-label="Mobile primary"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-semibold uppercase tracking-[0.2em] text-brand-cream"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 border-t border-brand-gold/40 bg-brand-navy/90 px-4 py-2 text-[11px] text-brand-cream md:hidden">
        <Link href="/pay" className="font-semibold uppercase tracking-[0.2em] text-brand-gold">
          Pay Bill
        </Link>
        <Link href="/support" className="font-semibold uppercase tracking-[0.2em] text-brand-gold">
          Customer Support
        </Link>
        <a
          href={REALGREEN_PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold uppercase tracking-[0.2em] text-brand-gold"
        >
          Portal
        </a>
      </div>
    </header>
  );
};
