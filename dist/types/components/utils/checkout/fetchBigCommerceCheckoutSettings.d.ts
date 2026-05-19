import type { BcGuestCheckoutType } from "../../../types/checkout/api/BigCommerceCheckoutSettings";
export type BigCommerceCheckoutSettingsResult = {
    /**
     * Live value of BigCommerce's `guest_checkout_type` store setting.
     * `null` when the store hash is unknown or the proxy call failed.
     */
    guestCheckoutType: BcGuestCheckoutType | null;
};
/**
 * Fetch the merchant's BigCommerce `/checkouts/settings` (via the demo-app
 * proxy) so we can inspect `guest_checkout_type` from the storefront. The
 * Store API is auth-gated, which is why we don't call it directly.
 *
 * Results are cached in `localStorage` for `CACHE_TTL_MS` so navigations
 * inside the same store don't all pay the proxy round trip — the setting
 * is merchant-level and rarely changes.
 */
export declare const fetchBigCommerceCheckoutSettings: () => Promise<BigCommerceCheckoutSettingsResult>;
