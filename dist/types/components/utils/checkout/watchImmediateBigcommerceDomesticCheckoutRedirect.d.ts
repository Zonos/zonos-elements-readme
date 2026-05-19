type Params = {
    domesticRedirectedBtnSelector: string;
    /**
     * Action trigger when country select is selected with international shipping country
     */
    onInternationalCheckoutSelected?: () => Promise<void>;
    /**
     * Called when a logged-in user is detected on the BigCommerce native
     * `/checkout` page with a saved default shipping address that is
     * internationally shippable. The implementer should prompt the user to
     * choose between proceeding to the Zonos international checkout or staying
     * on the BigCommerce native checkout (so they can pick a domestic address
     * instead).
     *
     * When omitted, the redirect is performed automatically (legacy behavior).
     *
     * @returns `'redirect'` to perform the international redirect, or `'stay'`
     * to keep the user on the BigCommerce native checkout. Once `'stay'` is
     * returned the watcher will not prompt again for the rest of the session.
     */
    onLoggedInInternationalAddressDetected?: () => Promise<'redirect' | 'stay'>;
    onShippingAddressSessionFound?: (shippingAddress: {
        address1: string;
        address2: string;
        city: string;
        countryCode: string;
        firstName: string;
        lastName: string;
        phone: string;
        postalCode: string;
        state: string;
    }) => void;
};
/**
 * Watch for changes in domestic checkout step. Redirects user to home page to open international checkout when user selects a country in the international shipping zone.
 * @note Only works on default bigcommerce checkout page
 */
export declare const watchImmediateBigcommerceDomesticCheckoutRedirect: ({ domesticRedirectedBtnSelector, onInternationalCheckoutSelected, onLoggedInInternationalAddressDetected, onShippingAddressSessionFound, }: Params) => void;
export {};
