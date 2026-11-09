import type { CountryCode } from "../../../types/index";
export declare const getCountryOverrideStorage: () => CountryCode | null;
export declare const migrateCountryOverrideStorage: (selectedCountryCode: CountryCode | null) => void;
export declare const setCountryOverrideStorage: (countryCode: CountryCode) => void;
export declare const clearCountryOverrideStorage: () => void;
