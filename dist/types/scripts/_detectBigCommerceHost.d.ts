/**
 * Storefront signals BigCommerce sets before Zonos copies `isBigCommerce`.
 * Shared by the loader script and the Stripe skip so the two cannot drift.
 */
export declare const detectBigCommerceHost: () => boolean;
