type CheckoutEvent = 'zonos-checkout-start' | 'zonos-checkout-close' | 'zonos-checkout-success' | 'zonos-checkout-payment-fail' | 'zonos-checkout-customer-info' | 'zonos-checkout-shipping-info' | 'zonos-checkout-payment-info';
declare global {
    interface Window {
        gtag: (event: string, action: string, data: Record<string, unknown>) => void;
    }
}
/**
 * Submit a gtag event if the gtag function is available.
 */
export declare const submitGtag: (event: CheckoutEvent) => void;
export {};
