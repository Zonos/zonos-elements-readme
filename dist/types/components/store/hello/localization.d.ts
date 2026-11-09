import { type CountryLandedCost } from "../../utils/api/getCountryLandedCost";
import { type TargetFormat } from "../../utils/api/getExchangeRate";
import type { InclusivePriceConfigurationResponse } from "../../../types/index";
import type { Locale_ElementsSupportedLocationCode_Enum, Locale_PageName_Enum } from "../../../types/generated/graphql.frontend.types";
import type { CountryCode, CurrencyCode } from "../../../types/generated/graphql.internal.types";
import type { ICountryJson } from "../../../types/ICountryJson";
export type ExchangeRateForUse = {
    rate: number;
    targetFormat: TargetFormat;
};
type LocalizationStore = {
    /**
     * All countries from countries.json, regardless of whether they are in the
     * merchant's shipping zone. Used for address fields that are not restricted
     * to shippable countries, e.g. the billing address country. `null` until
     * localization has initialized or when the countries request failed.
     */
    allCountries: ICountryJson | null;
    countryLandedCost: CountryLandedCost | null;
    customMessages: ILocaleMessageForUse[];
    exchangeRate: ExchangeRateForUse | null;
    exchangeRateTimeout?: NodeJS.Timeout;
    helloCountryList: ICountryJson | null;
    /**
     * Inclusive pricing configurations for the current country
     */
    inclusivePricingConfigurations: InclusivePriceConfigurationResponse;
    /**
     * Whether the inclusive pricing configurations are being fetched
     */
    inclusivePricingIsFetching: boolean;
    isDisabledCountry: boolean;
    isShippableCountry: boolean;
    localizationLoaded: boolean;
    selectedCountryCode: CountryCode | null;
    selectedLocale: Locale_ElementsSupportedLocationCode_Enum;
    shippingZoneCountries: ICountryJson | null;
    targetCurrency: CurrencyCode;
};
type ILocaleMessageForUse = {
    countryCode: string | null;
    message?: string;
    pageName: Locale_PageName_Enum;
};
declare const localizationDispose: () => void, localizationStoreOnChange: import("@stencil/store/dist/types").OnChangeHandler<LocalizationStore>, localizationStore: LocalizationStore;
export declare const getFallbackDefaultCountryCode: (allowedCountries: CountryCode[]) => CountryCode;
declare const localizationStoreUpdateSelectedCountryCode: ({ isInitializing, newSelectedCountryCode, persistOverride, }: {
    isInitializing?: boolean;
    newSelectedCountryCode: CountryCode | null;
    persistOverride?: boolean;
}) => void;
declare const localizationStoreUpdateSelectedLocale: (requestedLocale: Locale_ElementsSupportedLocationCode_Enum) => void;
declare const initLocalizationStore: () => Promise<void>;
export { initLocalizationStore, localizationDispose, localizationStore, localizationStoreOnChange, localizationStoreUpdateSelectedCountryCode, localizationStoreUpdateSelectedLocale, };
