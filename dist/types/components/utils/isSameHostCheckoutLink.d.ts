/**
 * Whether a link points at the same-origin native `/checkout` page.
 *
 * Merchant custom messages in the international checkout can contain a link
 * like "click here to complete checkout" that targets the store's native
 * BigCommerce checkout. When that link is same-host `/checkout`, we want it to
 * navigate the current tab instead of opening a new one — so the Zonos checkout
 * unloads and the native checkout opens in its place rather than leaving two
 * checkouts open at once (05CHECK-887).
 *
 * Returns `false` for cross-origin links, non-`/checkout` paths, or unparsable
 * hrefs (which should keep their default new-tab behavior).
 */
export declare const isSameHostCheckoutLink: (href: string) => boolean;
