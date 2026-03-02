"use client";

import { trackEvent } from "@/lib/analytics";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

type CallButtonProps = {
  className?: string;
  label?: string;
  eventLabel?: string;
};

export const CallButton = ({
  className,
  label = `Call Now ${PHONE_DISPLAY}`,
  eventLabel = "call_button"
}: CallButtonProps) => {
  return (
    <a
      href={PHONE_TEL}
      onClick={() =>
        trackEvent("call_click", {
          location: eventLabel,
          phone: PHONE_DISPLAY
        })
      }
      className={className}
      aria-label={`Call Lawn Republic at ${PHONE_DISPLAY}`}
    >
      {label}
    </a>
  );
};
