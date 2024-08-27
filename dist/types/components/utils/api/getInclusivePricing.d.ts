import type { CountryCode } from "../../../types/index";
export type ZonosInclusivePriceSetting = {
    /**
     * Has enabled inclusive prices for this country
     */
    hasEnabledInclusivePrices: boolean;
};
export declare const getInclusivePricing: (countryCode: CountryCode | null) => Promise<ZonosInclusivePriceSetting | null>;
