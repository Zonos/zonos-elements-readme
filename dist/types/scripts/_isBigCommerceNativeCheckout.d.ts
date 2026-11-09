/**
 * Call after `isBigCommerce` has been copied from host detection. Writes the
 * settled boolean onto `window.Zonos` for this pathname.
 */
export declare const markBigCommerceHostChecked: () => void;
/** Test helper. Production pages keep the answer for the document. */
export declare const resetBigCommerceNativeCheckoutCache: () => void;
/**
 * True when this document is BigCommerce native checkout.
 * Stripe.js injection is owned by `loadStripeScript` in `_loadStripe.ts`.
 * Other callers use this for a different job: skip `attachCheckout`, leave
 * the store's buttons enabled, or hand a leftover domestic session to `/`.
 * An undecided checkout path returns false and is not stored.
 */
export declare const isBigCommerceNativeCheckout: () => boolean;
/**
 * True when Stripe.js must not be injected. An undecided checkout path
 * holds the script until host detection finishes, instead of storing "not
 * native checkout" and injecting v3 early.
 */
export declare const holdStripeForNativeCheckout: () => boolean;
