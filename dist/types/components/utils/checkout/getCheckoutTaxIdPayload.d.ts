import type { CheckoutTaxIdTypeValue } from "../../../types/checkout/TaxId";
/** Tax id to send for the destination, or null while the field is hidden. */
export declare const getCheckoutTaxIdPayload: (countryCode: string) => {
    taxId: string;
    taxIdType?: CheckoutTaxIdTypeValue;
} | null;
