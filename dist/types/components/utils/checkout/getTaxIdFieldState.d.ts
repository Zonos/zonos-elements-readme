import type { TaxIdErrorField } from "../../../types/checkout/TaxId";
export type { TaxIdErrorField };
export declare const getTaxIdFieldState: ({ companyName, countryCode, errorField, errorMessage, shouldRequirePeruTaxId, taxIdType, }: {
    companyName: string;
    countryCode: string;
    errorField: TaxIdErrorField | "";
    errorMessage: string;
    shouldRequirePeruTaxId: boolean;
    taxIdType: string;
}) => {
    inputLabel: "CURP" | "DNI" | "RFC" | "CPF/CNPJ number" | "Carné de extranjería" | "EORI number" | "Personal Customers Clearance Code" | "RFC or CURP number" | "RUC" | "Unique Labor Identification Code" | undefined;
    inputPlaceholder: "00-00000000-0" | "DE123456789" | "000.000.000-00" | "000-00-00000" | "XAXX010101000" | "AAAA800101HDFRRR09" | "12345678" | "20123456789" | "001234567" | undefined;
    selectedValue: string;
    showValueInput: boolean;
    typeError: string;
    typeOptions: readonly import("src/types/checkout/TaxId").TaxIdTypeOption[] | null;
    valueError: string;
} | null;
