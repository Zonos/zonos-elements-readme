type CheckoutEvent = 'zonos-checkout-start' | 'zonos-checkout-close' | 'zonos-checkout-success' | 'zonos-checkout-payment-fail' | 'zonos-checkout-customer-info' | 'zonos-checkout-shipping-info' | 'zonos-checkout-payment-info';
export type PurchaseMetadata = {
    items: {
        item_id: string;
        item_name: string;
        price: number;
        quantity: number;
    }[];
    transaction_id: string;
} & ({
    currency: string;
    value: number;
} | {
    currency: undefined;
    value: undefined;
});
type GtagEvent = {
    event: CheckoutEvent;
    metadata?: Record<string, unknown>;
} | {
    event: 'purchase';
    metadata: PurchaseMetadata;
};
export type SubmitGtagInput = GtagEvent;
/**
 * Re-export of the shared relay ping helper. Kept here for backward compatibility with
 * existing import paths (e.g. `zonos-controller`).
 */
export declare const ensureAnalyticsRelayPing: () => void;
/**
 * Submit a gtag event if the gtag function is available.
 * When running inside an iframe, only posts to parent after the parent has
 * confirmed (via analyticsRelayOnInit) that gtag is available.
 */
export declare const submitGtag: ({ event, metadata }: GtagEvent) => void;
export {};
