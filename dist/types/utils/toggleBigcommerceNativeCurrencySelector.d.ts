/**
 * Hides BigCommerce's native currency selector while Hello is actively
 * converting prices, and restores it otherwise. The selector is hidden
 * only when all of the following hold:
 *
 *   - the host storefront is BigCommerce (`window.Zonos.isBigCommerce`),
 *   - the shopper is in a Zonos shipping zone
 *     (`localizationStore.isShippableCountry`), and
 *   - BC's currently selected native currency
 *     (`document.body.dataset.currencyCode`) equals `zonosStore.sourceCurrency`
 *     — i.e. BC has not pre-converted the prices Hello reads from the DOM.
 *
 * If those conditions don't hold (non-BC platform, non-shippable country,
 * BC currency differs from source, or the selector is not configured), the
 * function removes the class so any previously hidden element re-appears.
 */
export declare const toggleBigcommerceNativeCurrencySelector: () => void;
