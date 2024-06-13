import type { CountryCode } from "../../../types/index";
export type CountryLandedCost = {
    /**
     * @param allowLowValueOrders - Right now countries we have opted to block low value orders for are GB
     * @default true for all countries except GB, with GB, use the value from `allowLowValueOrders`
     */
    allowLowValueOrders: boolean;
    calcAsVat: boolean;
    countryCode: CountryCode;
    deminimusCurrencyCode: string;
    dutyDeminimus: number;
    /**
     * Has tax id in the system for this country
     */
    hasTaxId: boolean;
    vatTaxDeminimus: number;
    vatTaxRate: number;
};
export declare const getCountryLandedCost: (countryCode: CountryCode | null) => Promise<CountryLandedCost | null>;
