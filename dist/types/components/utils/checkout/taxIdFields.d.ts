import type { TaxIdErrorField } from "../../../types/checkout/TaxId";
export declare const renderTaxIdFields: ({ companyName, countryCode, errorField, errorMessage, onTaxIdChange, shouldRequirePeruTaxId, taxId, taxIdType, }: {
    companyName: string;
    countryCode: string;
    errorField: TaxIdErrorField | "";
    errorMessage: string;
    onTaxIdChange?: (value: string) => void;
    shouldRequirePeruTaxId: boolean;
    taxId: string;
    taxIdType: string;
}) => any;
