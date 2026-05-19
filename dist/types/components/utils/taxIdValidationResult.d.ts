type TaxIdValidationResult = {
    error: 'Tax id is required' | 'Invalid RFC format. Must be 12–13 uppercase letters and numbers only.' | 'Invalid CUIT/CUIL format. Must contain 11 digits, with or without dashes (XX-XXXXXXXX-X).';
    valid: false;
} | {
    error: null;
    valid: true;
};
export declare const taxIdValidationResult: ({ companyName, shippingCountry, taxId, }: {
    companyName: string;
    shippingCountry: string;
    taxId: string;
}) => TaxIdValidationResult;
export {};
