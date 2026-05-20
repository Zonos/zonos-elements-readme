/** Message type for zonos-analytic events sent from iframe to parent. */
export declare const ZONOS_ANALYTIC_TYPE: "zonos-analytic";
/** Ping sent by iframe to configure parent's analytics relay (e.g. GA, FB Pixel) and get ready signal. */
export declare const RELAY_PING_TYPE: "zonos-analytics-relay-ping";
/** Response from parent when an analytics relay (e.g. gtag, fbq) is ready. */
export declare const RELAY_READY_TYPE: "zonos-analytics-relay-ready";
/** Provider this analytic event/ready signal is intended for. */
export type AnalyticProvider = 'gtag' | 'fbq';
/** Forwarding mode used when relaying an analytic event to fbq on the parent. */
export type FbqForwardMode = 'track' | 'trackCustom';
/** Payload for relay ping. Iframe sends this to parent with provider IDs when available. */
export type RelayPingPayload = {
    /**
     * Facebook Pixel ID (numeric string). Parent will inject and configure the FB Pixel script if not present.
     */
    facebookPixelId?: string | null;
    /** Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). Parent will inject and configure GA script if not present. */
    googleAnalyticId?: string | null;
    type: typeof RELAY_PING_TYPE;
};
/** Payload sent from parent to iframe when an analytics relay is ready. */
export type RelayReadyPayload = {
    /**
     * Provider that just became ready. Older parent scripts may omit this — treat as 'gtag' for backward compatibility.
     */
    provider?: AnalyticProvider;
    type: typeof RELAY_READY_TYPE;
};
