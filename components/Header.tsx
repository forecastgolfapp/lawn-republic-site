import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { REALGREEN_PORTAL_URL, SITE_NAME } from "@/lib/site";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-border bg-white">
      <a
        href="#main-content"
        className="absolute left-2 top-2 -translate-y-16 rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white shadow-soft transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-display text-base font-extrabold uppercase tracking-tight text-brand-navy sm:text-lg">
            {SITE_NAME}
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <CallButton
            className="hidden rounded-full bg-brand-navy px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-[var(--brand-navy-hover)] sm:inline-flex"
            eventLabel="header"
          />
          <Link
            href="/#quote-form"
            className="hidden rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-[var(--brand-green-hover)] sm:inline-flex"
          >
            Get a Quote
          </Link>
          <a
            href={REALGREEN_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs font-semibold text-brand-navy hover:text-brand-green md:inline-flex"
          >
            Customer Login
          </a>
          {/* Mobile: just call (sticky bar handles the rest) */}
          <CallButton
            className="inline-flex rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white shadow-soft transition sm:hidden"
            eventLabel="header_mobile"
            label="Call"
          />
        </div>
      </div>
    </header>
  );
};
