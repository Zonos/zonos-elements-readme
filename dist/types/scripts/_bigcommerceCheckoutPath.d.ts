/**
 * Two checkout-path rules, kept together so they cannot drift in separate files.
 *
 * `pathContainsCheckout` is the broad rule for zBypass and address detection.
 * It still matches paths such as `checkout-page`.
 *
 * `hasExactCheckoutSegment` is the strict rule for the Stripe.js skip. Only a
 * segment exactly equal to `checkout` counts, so a slug does not drop the
 * payment script.
 */
export declare const pathContainsCheckout: (pathname: string) => boolean;
export declare const hasExactCheckoutSegment: (pathname: string) => boolean;
