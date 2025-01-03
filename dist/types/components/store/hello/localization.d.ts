import { type CountryLandedCost } from "../../utils/api/getCountryLandedCost";
import { type TargetFormat } from "../../utils/api/getExchangeRate";
import type { Locale_ElementsSupportedLocationCode_Enum, Locale_PageName_Enum } from "../../../types/generated/graphql.frontend.types";
import type { CountryCode, CurrencyCode, InclusivePriceSettingFieldsFragment } from "../../../types/generated/graphql.internal.types";
import type { ICountryJson } from "../../../types/ICountryJson";
export type ExchangeRateForUse = {
    rate: number;
    targetFormat: TargetFormat;
};
type LocalizationStore = {
    countryLandedCost: CountryLandedCost | null;
    customMessages: ILocaleMessageForUse[];
    exchangeRate: ExchangeRateForUse | null;
    exchangeRateTimeout?: NodeJS.Timeout;
    helloCountryList: ICountryJson | null;
    inclusivePricing: InclusivePriceSettingFieldsFragment | null;
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
declare const localizationDispose: () => void, localizationStoreOnUpdate: import("@stencil/store/dist/types").OnChangeHandler<LocalizationStore>, localizationStore: LocalizationStore;
export declare const getFallbackDefaultCountryCode: (allowedCountries: CountryCode[]) => CountryCode;
declare const localizationStoreUpdateSelectedCountryCode: (newSelectedCountryCode: CountryCode | null) => void;
declare const localizationStoreUpdateSelectedLocale: (newSelectedLocale: Locale_ElementsSupportedLocationCode_Enum) => void;
declare const initLocalizationStore: () => Promise<void>;
export { initLocalizationStore, localizationDispose, localizationStore, localizationStoreOnUpdate, localizationStoreUpdateSelectedCountryCode, localizationStoreUpdateSelectedLocale, };
