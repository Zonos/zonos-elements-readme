import { type CheckoutTaxIdTypeValue, type MexicoTaxIdType, type PeruTaxIdType, type TaxIdTypeOption } from "../../../types/checkout/TaxId";
export declare const stripTaxIdSeparators: (taxId: string) => string;
export declare const rfcRegex: RegExp;
export declare const curpRegex: RegExp;
export declare const isMexicoTaxIdType: (taxIdType: string) => taxIdType is MexicoTaxIdType;
export declare const isPeruTaxIdType: (taxIdType: string) => taxIdType is PeruTaxIdType;
export declare const isCheckoutTaxIdTypeValue: (taxIdType: string) => taxIdType is CheckoutTaxIdTypeValue;
/** 8 digits are a DNI, 9 a carné, 11 an RUC. Anything else is not a Peru tax id. */
export declare const peruTaxIdTypeFromValue: (taxId: string) => PeruTaxIdType | null;
export declare const isPeruTaxIdActive: ({ countryCode, shouldRequirePeruTaxId, }: {
    countryCode: string;
    shouldRequirePeruTaxId: boolean;
}) => boolean;
/**
 * Peru stays off `countryRequireTaxId`. The API flag decides which stores see it.
 * Mexico and Peru pick the kind from a dropdown instead of a regex.
 */
export declare const taxIdTypeOptionsForCheckout: ({ countryCode, shouldRequirePeruTaxId, }: {
    countryCode: string;
    shouldRequirePeruTaxId: boolean;
}) => readonly TaxIdTypeOption[] | null;
export declare const taxIdLabelForCheckout: (countryCode: string) => {
    readonly friendlyName: "Unique Labor Identification Code";
    readonly placeholder: "00-00000000-0";
} | {
    readonly friendlyName: "EORI number";
    readonly placeholder: "DE123456789";
} | {
    readonly friendlyName: "CPF/CNPJ number";
    readonly placeholder: "000.000.000-00";
} | {
    readonly friendlyName: "Personal Customers Clearance Code";
    readonly placeholder: "000-00-00000";
} | {
    readonly friendlyName: "RFC or CURP number";
    readonly placeholder: "XAXX010101000";
} | null;
