export declare const countryRequireTaxId: ["AR", "BR", "KR", "MX"];
export type CountryRequireTaxId = (typeof countryRequireTaxId)[number];
export declare const shipToTaxIdLabels: {
    readonly AR: {
        readonly friendlyName: "Unique Labor Identification Code";
        readonly placeholder: "00-00000000-0";
    };
    readonly BR: {
        readonly friendlyName: "CPF/CNPJ number";
        readonly placeholder: "000.000.000-00";
    };
    readonly KR: {
        readonly friendlyName: "Personal Customers Clearance Code";
        readonly placeholder: "000-00-00000";
    };
    readonly MX: {
        readonly friendlyName: "RFC number";
        readonly placeholder: "XAXX010101000";
    };
};
