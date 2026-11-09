/** Whether the field is showing, and which of this country's types is selected. */
export declare const resolveTaxIdSelection: ({ companyName, countryCode, shouldRequirePeruTaxId, taxIdType, }: {
    companyName: string;
    countryCode: string;
    shouldRequirePeruTaxId: boolean;
    taxIdType: string;
}) => {
    rendered: boolean;
    selectedType: import("../../..").TaxIdTypeOption | null;
    send: boolean;
    typeOptions: readonly import("../../..").TaxIdTypeOption[] | null;
};
