import type { CountryCode } from "../../../types/generated/graphql.customer.types";
export declare class ZonosCountryFlag {
    /**
     * The country code for the flag
     * @default localizationStore.selectedCountryCode
     * @example 'US'
     */
    countryCode: CountryCode | null;
    /**
     * The size of the flag
     */
    size?: number;
    el: HTMLZonosCountryFlagElement;
    render(): any;
}
