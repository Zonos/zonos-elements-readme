import { type SubmitGtagInput } from "./submitGtag";
/**
 * Fan out an analytics event to every enabled provider.
 *
 * - Calls `submitGtag` (Google Analytics) — always sends the original event name.
 * - Calls `submitFbq` (Facebook Pixel) — sends the original event name as a custom event,
 *   and additionally fires the matching FB standard event when one exists
 *   (e.g. `purchase` → `Purchase`, `zonos-checkout-start` → `InitiateCheckout`).
 *
 * Each submitter no-ops when its provider is disabled in `analyticsProviders` settings.
 */
export declare const submitAnalytics: (input: SubmitGtagInput) => void;
