import type { BigCommerceCheckoutResponse } from "./bigcommerceStorefrontApi";
type BypassResult = {
    customerGroupId: number | null;
    shouldBypass: boolean;
};
/**
 * Optional pre-fetched Storefront API data that callers can pass through to
 * avoid duplicating `/api/storefront/cart` + `/api/storefront/checkouts/{id}`
 * round trips. Used by the domestic-checkout redirect watcher where the same
 * checkout data feeds bypass + force-login decisions on each poll tick.
 */
type BypassPreFetched = {
    checkout: BigCommerceCheckoutResponse | null;
    checkoutId: string | null;
};
/**
 * Start fetching the BigCommerce customer group on page load.
 * Call this once during initialization (e.g. in `zonos-checkout.init()`).
 * The fetch runs in the background; `checkBigCommerceBypassCustomerGroup`
 * will await the result when needed.
 */
export declare const initBigCommerceBypassCheck: () => void;
/**
 * Check if the current BigCommerce customer belongs to a customer group
 * that should bypass Zonos Checkout.
 *
 * If `initBigCommerceBypassCheck` was called on page load and the resulting
 * outcome was conclusive, this returns the already-resolved (or in-flight)
 * result without making additional API calls. If the previous outcome was
 * inconclusive (no cart, settings not loaded), the cache was invalidated
 * automatically and this triggers a fresh fetch.
 *
 * @param options.forceRefresh - When true, bypasses any cached result and
 * always fetches fresh BigCommerce checkout data. Use this on the
 * BigCommerce domestic checkout page when the shipping country changes,
 * to ensure the customer group reflects the current checkout state.
 */
export declare const checkBigCommerceBypassCustomerGroup: (options?: {
    forceRefresh?: boolean;
    preFetched?: BypassPreFetched;
}) => Promise<BypassResult>;
export {};
