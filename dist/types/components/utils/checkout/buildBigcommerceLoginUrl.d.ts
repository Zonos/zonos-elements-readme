/**
 * The query flag that BigCommerce carries back to `cart.php` after the
 * shopper logs in. When present, Zonos-elements knows to resume the
 * international checkout flow instead of letting BC's native cart UX
 * take over.
 */
export declare const BIGCOMMERCE_INTERNATIONAL_CHECKOUT_FLAG = "isInternationalCheckout";
type Options = {
    /**
     * When set, builds a link to the BC "Create account" action
     * (`login.php?action=create_account`) — same `from` payload, but a
     * different initial tab.
     */
    action?: 'create_account';
};
/**
 * Build an absolute URL to BigCommerce's `/login.php` with the
 * `from=cart.php?isInternationalCheckout=true` round-trip encoded so the
 * shopper resumes Zonos international checkout after authenticating.
 *
 * Preserves `zonosTestMode` / `zonosQaUrl` / `zonosQaUrlApi` from the current
 * URL across the redirect — the login round trip leaves BC's frontend, so
 * without this the returning `cart.php` would drop back to the production
 * build / API host.
 */
export declare const buildBigcommerceLoginUrl: ({ action }?: Options) => string;
export {};
