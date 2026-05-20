/**
 * On BigCommerce's `/login.php`, the default **Create account** button links
 * to `login.php?action=create_account` without the `from=cart.php...`
 * parameter that the shopper had when they arrived. Without this, completing
 * signup would drop them on the account home page instead of resuming Zonos
 * international checkout.
 *
 * This watcher finds any create-account anchor on the page (including ones
 * that the BC theme renders later via Stencil bundle load) and rewrites the
 * `href` so the account-creation round trip preserves the
 * `isInternationalCheckout=true` flag as well as `zonosTestMode` /
 * `zonosQaUrl`.
 *
 * Safe to call more than once — idempotent thanks to the `data-zonos-…`
 * attribute on rewritten anchors.
 */
export declare const fixBigCommerceLoginCreateAccountLink: () => void;
