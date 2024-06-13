type Params = {
    domesticRedirectedBtnSelector: string;
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
 * Watch for changes in domestic checkout step, this is to redirect user to home page and open checkout if user enters the ship to country that's in the shipping zone
 * @note Only works on default bigcommerce checkout page
 */
export declare const watchBigcommerceDomesticCheckout: ({ domesticRedirectedBtnSelector, onShippingAddressSessionFound, }: Params) => void;
export {};
