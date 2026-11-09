type Params = {
    createCartId: unknown;
    enabledTestKeys: readonly string[];
    isBigCommerce: boolean;
};
/**
 * BigCommerce checkout depends on storefront callbacks (clear cart, inventory).
 * The hosted variant leaves the storefront, so the test does not apply there.
 */
export declare const isHostedVsNativeTestAllowed: ({ createCartId, enabledTestKeys, isBigCommerce, }: Params) => boolean;
export {};
