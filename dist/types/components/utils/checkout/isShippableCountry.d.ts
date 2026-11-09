import type { CountryCode } from "../../../types/generated/graphql.internal.types";
export declare const isShippableCountry: (showLog?: boolean, 
/**
 * If provided, will check if the country is shippable based on the provided country code instead of the Hello selected country code
 */
providedCountryCode?: CountryCode) => boolean;
