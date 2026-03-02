import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import {
  CLICKI_REFERRAL_URL,
  REALGREEN_PORTAL_URL,
  SITE_NAME
} from "@/lib/site";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          <span className="font-display">{SITE_NAME}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/" className="transition hover:text-brand-700">
            Home
          </Link>
          <Link href="/lawn-treatment" className="transition hover:text-brand-700">
            Lawn Treatment
          </Link>
          <Link href="/about" className="transition hover:text-brand-700">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-brand-700">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <CallButton
            className="hidden rounded-full bg-brand-700 px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-brand-800 md:inline-flex"
            eventLabel="header"
          />
          <a
            href={REALGREEN_PORTAL_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700 md:inline-flex"
          >
            Pay Bill / Customer Login
          </a>
          <a
            href={CLICKI_REFERRAL_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700 md:inline-flex"
          >
            Refer a Friend
          </a>
          <CallButton
            className="inline-flex rounded-full bg-brand-700 px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-brand-800 md:hidden"
            eventLabel="header_mobile"
            label="Call Now"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 border-t border-white/50 bg-white/70 px-4 py-2 text-xs text-slate-600 md:hidden">
        <Link href="/" className="font-medium text-slate-700">
          Home
        </Link>
        <Link href="/lawn-treatment" className="font-medium text-slate-700">
          Lawn Treatment
        </Link>
        <Link href="/about" className="font-medium text-slate-700">
          About
        </Link>
        <Link href="/contact" className="font-medium text-slate-700">
          Contact
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 border-t border-white/50 bg-white/70 px-4 py-2 text-[11px] text-slate-600 md:hidden">
        <a
          href={REALGREEN_PORTAL_URL}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-slate-700"
        >
          Pay Bill / Login
        </a>
        <a
          href={CLICKI_REFERRAL_URL}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-slate-700"
        >
          Refer a Friend
        </a>
      </div>
    </header>
  );
};
