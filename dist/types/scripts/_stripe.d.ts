/** Loading stripe script extracted from stripe.js repository  */
import type { Stripe, StripeConstructor } from '@stripe/stripe-js';
export interface LoadParams {
    advancedFraudSignals: boolean;
}
export type LoadStripe = (...args: Parameters<StripeConstructor>) => Promise<Stripe | null>;
export declare const zonosStripeFindScript: () => HTMLScriptElement | null;
export declare const injectScript: (params: null | LoadParams) => HTMLScriptElement | null;
export declare const zonosStripeLoadScript: (params: null | LoadParams) => Promise<StripeConstructor | null>;
export declare const initStripe: (maybeStripe: StripeConstructor | null, args: Parameters<StripeConstructor>, startTime: number) => Stripe | null;
export declare const validateLoadParams: (params: {
    advancedFraudSignals: boolean;
}) => LoadParams | void;
