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
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-navy/10 bg-brand-navy text-white">
      <a
        href="#main-content"
        className="absolute left-2 top-2 -translate-y-16 rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white shadow-soft transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-white">
            {SITE_NAME}
          </span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.28em] text-white md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CallButton
            className="hidden rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-[var(--brand-green-hover)] md:inline-flex"
            eventLabel="header"
          />
          <a
            href={REALGREEN_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-brand-navy md:inline-flex"
          >
            Customer Login
          </a>
          {REFERRAL_URL && (
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-brand-navy md:inline-flex"
            >
              Refer a Friend
            </a>
          )}
          <CallButton
            className="inline-flex rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white shadow-soft transition md:hidden"
            eventLabel="header_mobile"
            label="Call"
          />
        </div>
      </div>
      <div
        className="flex items-center justify-center gap-5 border-t border-white/10 bg-brand-navy px-4 py-2 text-[11px] text-white md:hidden"
        aria-label="Mobile primary"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-semibold uppercase tracking-[0.2em] text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 border-t border-white/10 bg-brand-navy px-4 py-2 text-[11px] text-white md:hidden">
        <Link href="/pay" className="font-semibold uppercase tracking-[0.2em] text-brand-green">
          Pay Bill
        </Link>
        <Link href="/support" className="font-semibold uppercase tracking-[0.2em] text-brand-green">
          Support
        </Link>
        <a
          href={REALGREEN_PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold uppercase tracking-[0.2em] text-brand-green"
        >
          Customer Login
        </a>
      </div>
    </header>
  );
};
