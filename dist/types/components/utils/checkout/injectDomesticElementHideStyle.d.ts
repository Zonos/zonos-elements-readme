/**
 * Build the fully-scoped selector that will land in the injected `<style>`
 * tag. Exported so tests can exercise both branches of the `:is()`-support
 * fallback without having to mock the module-level probe.
 */
export declare const buildDomesticHideSelector: ({ merchantSelector, supportsIs, }: {
    merchantSelector: string;
    supportsIs: boolean;
}) => string;
/**
 * Inject a `<style>` tag that hides storefront elements matching the
 * merchant-configured `checkoutSettings.domesticElementSelector`, scoped to
 * `body.z-intl` so the rule only takes effect when the shopper is in a
 * shipping zone (Hello sets the body class). The exact selector we emit is
 * also the selector we validate — see [[buildDomesticHideSelector]] for the
 * `:is()`-support branching.
 */
export declare const injectDomesticElementHideStyle: (domesticElementSelector: string | null | undefined) => void;
