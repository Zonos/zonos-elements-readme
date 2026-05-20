import { type AnalyticProvider, type FbqForwardMode } from "../../../types/analyticsRelay";
declare global {
    interface Window {
        dataLayer: unknown[];
        fbq?: ((...args: unknown[]) => void) & {
            loaded?: boolean;
            queue?: unknown[];
            version?: string;
            callMethod?: (...args: unknown[]) => void;
            push?: (...args: unknown[]) => void;
        };
        gtag: (event: string, action: string | Date, data?: Record<string, unknown>) => void;
    }
}
/**
 * Generic queued analytic event sent through the iframe → parent relay.
 * `fbqMode` is only meaningful when `provider === 'fbq'`:
 *   - `'track'` — parent calls `fbq('track', event, payload)` (FB standard event)
 *   - `'trackCustom'` — parent calls `fbq('trackCustom', event, payload)` (custom event)
 */
type QueuedRelayEvent = {
    event: string;
    fbqMode?: FbqForwardMode;
    payload: Record<string, unknown>;
    provider: AnalyticProvider;
};
/**
 * Send a ping to the parent so it can inject/configure analytics relays for the providers we care about.
 * Picks up `googleAnalyticId` and `facebookPixelId` from `window.Zonos`, both of which may be set by `customHTML`.
 */
export declare const sendRelayPing: () => void;
/**
 * Sends ping to parent so it can inject/configure analytics relays and respond with ready.
 * Call after customHTML or custom script sets `window.Zonos.googleAnalyticId` / `window.Zonos.facebookPixelId`.
 */
export declare const ensureAnalyticsRelayPing: () => void;
/**
 * Queue an analytic event for relay to parent. If the provider's relay is already ready,
 * the event is forwarded immediately; otherwise it waits for the ready signal.
 */
export declare const enqueueRelayEvent: (event: QueuedRelayEvent) => void;
export declare const isAnalyticsRelayInIframe: () => boolean;
export {};
