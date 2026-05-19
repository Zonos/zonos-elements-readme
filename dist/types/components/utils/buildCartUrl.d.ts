import type { PrefillAddress } from "../../types/checkout/CheckoutConfig";
type Params = PrefillAddress & {
    cartId: string;
    checkoutSessionId?: string;
    hostedCheckoutUrl: string;
    isTestMode: boolean;
    isVariantTest?: boolean;
};
export declare const buildCartUrl: ({ cartId, checkoutSessionId, customerAddress1, customerAddress2, customerCity, customerCountry, customerEmail, customerFirstName, customerLastName, customerPhone, customerState, customerZip, hostedCheckoutUrl, isTestMode, isVariantTest, }: Params) => string;
export {};
