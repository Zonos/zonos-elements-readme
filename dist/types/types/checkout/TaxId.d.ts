export declare const euCountryCodes: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK", "CH", "NO", "GB"];
export type EuCountryCode = (typeof euCountryCodes)[number];
export declare const countryRequireTaxId: ["AR", "BR", "KR", "MX", "AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK", "CH", "NO", "GB"];
export type CountryRequireTaxId = (typeof countryRequireTaxId)[number];
export declare const shipToTaxIdLabels: {
    readonly AR: {
        readonly friendlyName: "Unique Labor Identification Code";
        readonly placeholder: "00-00000000-0";
    };
    readonly AT: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly BE: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly BG: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly BR: {
        readonly friendlyName: "CPF/CNPJ number";
        readonly placeholder: "000.000.000-00";
    };
    readonly CH: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly CY: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly CZ: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly DE: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly DK: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly EE: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly ES: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly FI: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly FR: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly GB: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly GR: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly HR: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly HU: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly IE: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly IT: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly KR: {
        readonly friendlyName: "Personal Customers Clearance Code";
        readonly placeholder: "000-00-00000";
    };
    readonly LT: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly LU: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly LV: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly MT: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly MX: {
        readonly friendlyName: "RFC or CURP number";
        readonly placeholder: "XAXX010101000";
    };
    readonly NL: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly NO: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly PL: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly PT: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly RO: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly SE: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly SI: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
    readonly SK: {
        readonly friendlyName: "EORI number";
        readonly placeholder: "DE123456789";
    };
};
export declare const isCountryRequireTaxId: (countryCode: string) => countryCode is CountryRequireTaxId;
export type TaxIdErrorField = 'type' | 'value';
export declare const taxIdTypeOptions: {
    readonly MX: readonly [{
        readonly label: "RFC";
        readonly placeholder: "XAXX010101000";
        readonly value: "RFC";
    }, {
        readonly label: "CURP";
        readonly placeholder: "AAAA800101HDFRRR09";
        readonly value: "CURP";
    }];
    readonly PE: readonly [{
        readonly label: "DNI";
        readonly placeholder: "12345678";
        readonly value: "DNI";
    }, {
        readonly label: "RUC";
        readonly placeholder: "20123456789";
        readonly value: "RUC";
    }, {
        readonly label: "Carné de extranjería";
        readonly placeholder: "001234567";
        readonly value: "CE";
    }];
};
export type TaxIdTypeOption = (typeof taxIdTypeOptions.MX)[number] | (typeof taxIdTypeOptions.PE)[number];
export type MexicoTaxIdType = (typeof taxIdTypeOptions.MX)[number]['value'];
export type PeruTaxIdType = (typeof taxIdTypeOptions.PE)[number]['value'];
declare const checkoutTaxIdTypeValueList: readonly ["CE", "CURP", "DNI", "RFC", "RUC"];
type AssertEveryCheckoutTaxIdType<T extends readonly TaxIdTypeOption['value'][]> = Exclude<TaxIdTypeOption['value'], T[number]> extends never ? T : never;
/** Every document kind checkout can send. Older clients omit the field. */
export declare const checkoutTaxIdTypeValues: AssertEveryCheckoutTaxIdType<typeof checkoutTaxIdTypeValueList>;
export type CheckoutTaxIdTypeValue = (typeof checkoutTaxIdTypeValues)[number];
export declare const peruTaxIdDigitLength: {
    readonly CE: 9;
    readonly DNI: 8;
    readonly RUC: 11;
};
export declare const peruTaxIdFormatError: {
    readonly CE: "Carné de extranjería must be 9 digits.";
    readonly DNI: "DNI must be 8 digits.";
    readonly RUC: "RUC must be 11 digits.";
};
export {};
