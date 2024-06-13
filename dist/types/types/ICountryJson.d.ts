import type { CountryCode } from "./generated/graphql.customer.types";
import type { Locale_ElementsSupportedLocationCode_Enum } from "./generated/graphql.frontend.types";
declare const regions: readonly [
    'Africa',
    'Americas',
    'Asia',
    'Central America',
    'Europe',
    'North America',
    'Oceania',
    'South America'
];
type IRegion = (typeof regions)[number];
export type ICountry = {
    active: boolean;
    code: CountryCode;
    code3: string;
    currencyCode: string;
    displayName: string;
    fraudRisk: number;
    languageCode: Locale_ElementsSupportedLocationCode_Enum;
    numericCode: string;
    region: IRegion;
    upsCode: string | null;
    zipRegex: string | null;
};
export type ICountryJson = {
    [countryCode: string]: ICountry;
};
export {};
