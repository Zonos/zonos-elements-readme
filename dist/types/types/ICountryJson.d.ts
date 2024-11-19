import type { Locale_ElementsSupportedLocationCode_Enum } from "./generated/graphql.frontend.types";
import type { CountryCode } from "./generated/graphql.internal.types";
export type ICountry = {
    bigcommerceDisplayName?: string;
    code: CountryCode;
    currencyCode: string;
    displayName: string;
    languageCode: Locale_ElementsSupportedLocationCode_Enum;
};
export type ICountryJson = {
    [countryCode: string]: ICountry;
};
