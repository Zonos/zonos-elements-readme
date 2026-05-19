import type { BigCommerceCheckoutResponse } from "./bigcommerceStorefrontApi";
export type BigCommerceForceLoginDecision = {
    /**
     * When `shouldForceLogin` is true, the caller should redirect the browser
     * to this URL (BigCommerce `/login.php` with the round-trip `from` query
     * already encoded). `null` otherwise.
     */
    redirectUrl: string | null;
    shouldForceLogin: boolean;
};
/**
 * Optional pre-fetched Storefront API data that callers can pass in to avoid
 * a duplicate `/api/storefront/cart` + `/api/storefront/checkouts/{id}` round
 * trip when they've already fetched it (e.g. the domestic-checkout-redirect
 * watcher). When omitted, `checkBigCommerceForceLogin` fetches them itself.
 */
export type BigCommerceForceLoginPreFetched = {
    checkout: BigCommerceCheckoutResponse | null;
    checkoutId: string | null;
};
/**
 * Kick off the `/checkouts/settings` fetch in the background on page load
 * so the result is warm by the time the shopper opens checkout. Safe to
 * call more than once — re-invocations reuse the in-flight/resolved
 * promise.
 */
export declare const initBigCommerceForceLoginCheck: () => void;
/**
 * Decide whether the current BigCommerce shopper must sign in before the
 * Zonos international checkout is allowed to open.
 *
 * Required conditions (all must hold):
 *  1. Running on a BigCommerce storefront.
 *  2. BC merchant has `guest_checkout_type === 'no_guest_checkout'` in their
 *     live `/v3/checkouts/settings` response.
 *  3. Shopper has an active cart.
 *  4. Shopper is not already logged in to BigCommerce.
 *
 * Returning a `redirectUrl` is an instruction, not an action: callers drive
 * the navigation themselves so they can short-circuit any UI state (loading
 * overlays, dialog open flags) before `window.location.href` flips.
 */
export declare const checkBigCommerceForceLogin: ({ preFetched, }?: {
    preFetched?: BigCommerceForceLoginPreFetched;
}) => Promise<BigCommerceForceLoginDecision>;
/**
 * Test-only — resets the module-level cache so each test case starts
 * against a clean state.
 */
export declare const _resetBigCommerceForceLoginCacheForTesting: () => void;
