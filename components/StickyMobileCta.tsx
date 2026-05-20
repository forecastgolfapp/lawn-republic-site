"use client";

import Link from "next/link";
import { CallButton } from "@/components/CallButton";

/**
 * Bottom-fixed mobile bar with two big tap targets: Call + Free Quote.
 * Hidden at md+ where the header CTAs cover the same ground.
 */
export const StickyMobileCta = () => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-border bg-white shadow-card md:hidden"
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="mx-auto flex max-w-6xl items-stretch gap-2 px-3 py-2 safe-bottom">
        <CallButton
          className="flex flex-1 items-center justify-center rounded-full bg-brand-navy px-3 py-3 text-sm font-semibold text-white shadow-soft"
          eventLabel="sticky_mobile"
          label="Call"
        />
        <Link
          href="/#quote-form"
          className="flex flex-1 items-center justify-center rounded-full bg-brand-green px-3 py-3 text-sm font-semibold text-white shadow-soft"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
};
