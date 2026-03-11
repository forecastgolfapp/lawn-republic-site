import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import {
  CLICKI_REFERRAL_URL,
  REALGREEN_PORTAL_URL,
  SITE_NAME
} from "@/lib/site";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-gold/40 bg-brand-navy/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-brand-cream">
            {SITE_NAME}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold md:flex">
          <Link href="/" className="transition hover:text-brand-cream">
            Home
          </Link>
          <Link href="/lawn-treatment" className="transition hover:text-brand-cream">
            Lawn Treatment
          </Link>
          <Link href="/about" className="transition hover:text-brand-cream">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-brand-cream">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <CallButton
            className="hidden rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold text-brand-navy shadow-soft transition hover:bg-brand-cream md:inline-flex"
            eventLabel="header"
          />
          <a
            href={REALGREEN_PORTAL_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-brand-gold/60 px-4 py-2 text-xs font-semibold text-brand-cream transition hover:bg-brand-gold hover:text-brand-navy md:inline-flex"
          >
            Pay Bill / Customer Login
          </a>
          <a
            href={CLICKI_REFERRAL_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-brand-gold/60 px-4 py-2 text-xs font-semibold text-brand-cream transition hover:bg-brand-gold hover:text-brand-navy md:inline-flex"
          >
            Refer a Friend
          </a>
          <CallButton
            className="inline-flex rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold text-brand-navy shadow-soft transition hover:bg-brand-cream md:hidden"
            eventLabel="header_mobile"
            label="Call Now"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 border-t border-brand-gold/40 bg-brand-navy/90 px-4 py-2 text-[11px] text-brand-cream md:hidden">
        <Link href="/" className="font-semibold uppercase tracking-[0.2em] text-brand-cream">
          Home
        </Link>
        <Link href="/lawn-treatment" className="font-semibold uppercase tracking-[0.2em] text-brand-cream">
          Lawn Treatment
        </Link>
        <Link href="/about" className="font-semibold uppercase tracking-[0.2em] text-brand-cream">
          About
        </Link>
        <Link href="/contact" className="font-semibold uppercase tracking-[0.2em] text-brand-cream">
          Contact
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 border-t border-brand-gold/40 bg-brand-navy/90 px-4 py-2 text-[11px] text-brand-cream md:hidden">
        <a
          href={REALGREEN_PORTAL_URL}
          target="_blank"
          rel="noreferrer"
          className="font-semibold uppercase tracking-[0.2em] text-brand-gold"
        >
          Pay Bill / Login
        </a>
        <a
          href={CLICKI_REFERRAL_URL}
          target="_blank"
          rel="noreferrer"
          className="font-semibold uppercase tracking-[0.2em] text-brand-gold"
        >
          Refer a Friend
        </a>
      </div>
    </header>
  );
};
