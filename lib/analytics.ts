export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const send = () => {
    window.gtag?.("event", eventName, params);
  };

  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(() => send(), { timeout: 1200 });
    return;
  }

  window.setTimeout(send, 0);
}
