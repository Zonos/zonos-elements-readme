import type { SubmitGtagInput } from "./submitGtag";
/**
 * Submit a Facebook Pixel event matching the gtag event payload shape.
 *
 * Behavior:
 * - Always fires `fbq('trackCustom', event, params)` so merchants see `zonos-xxx` events.
 * - If the event has a Facebook standard equivalent (e.g. `purchase` → `Purchase`,
 *   `zonos-checkout-start` → `InitiateCheckout`, `zonos-checkout-payment-info` →
 *   `AddPaymentInfo`), additionally fires `fbq('track', standardEvent, params)` with
 *   FB-formatted parameters.
 *
 * @see https://developers.facebook.com/docs/meta-pixel/reference
 */
export declare const submitFbq: ({ event, metadata }: SubmitGtagInput) => void;
