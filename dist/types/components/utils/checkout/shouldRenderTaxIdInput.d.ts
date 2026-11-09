/**
 * Checks if the tax ID input should be rendered based on the company name and country code.
 */
export declare const shouldRenderTaxIdInput: ({ companyName, countryCode, shouldRequirePeruTaxId, }: {
    companyName: string;
    countryCode: string;
    shouldRequirePeruTaxId: boolean;
}) => boolean;
