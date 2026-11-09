/** Clears the page-load query result. Tests use this between cases. */
export declare const resetBigCommerceCheckoutBypassCache: () => void;
/**
 * True when this BigCommerce checkout page should skip address detection.
 * That is only when zonos-settings allows the `zBypass` query and this
 * checkout URL has an accepted value. Storefront pages are never bypassed, so
 * the query stays in the URL until checkout. The query is removed once, and
 * later calls on that checkout URL keep the same answer. Nothing is written
 * to storage.
 */
export declare const isBigCommerceCheckoutBypassEnabled: () => boolean;
