import { type PeruTaxIdType, type TaxIdErrorField, peruTaxIdFormatError } from "../../types/checkout/TaxId";
type TaxIdValidationError = 'Tax id is required' | 'Tax id type is required' | 'Invalid CURP format. Must be 18 uppercase letters and numbers.' | 'Invalid RFC format. Must be 12–13 uppercase letters and numbers.' | 'Invalid CUIT/CUIL format. Must contain 11 digits, with or without dashes (XX-XXXXXXXX-X).' | (typeof peruTaxIdFormatError)[PeruTaxIdType];
type TaxIdValidationResult = {
    error: TaxIdValidationError;
    field: TaxIdErrorField;
    valid: false;
} | {
    error: null;
    field: null;
    valid: true;
};
export declare const taxIdValidationResult: ({ companyName, shippingCountry, shouldRequirePeruTaxId, taxId, taxIdType, }: {
    companyName: string;
    shippingCountry: string;
    shouldRequirePeruTaxId: boolean;
    taxId: string;
    taxIdType: string;
}) => TaxIdValidationResult;
export {};
