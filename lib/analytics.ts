export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

export const trackEvent = (action: string, params?: AnalyticsParams) => {
  if (typeof window === "undefined") {
    return;
  }

  const w = window as typeof window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  };

  if (typeof w.gtag === "function") {
    w.gtag("event", action, params ?? {});
    return;
  }

  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: action, ...(params ?? {}) });
  }
};
