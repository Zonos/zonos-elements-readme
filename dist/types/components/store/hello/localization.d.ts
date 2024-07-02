/// <reference types="node" />
import { type CountryLandedCost } from "../../utils/api/getCountryLandedCost";
import { type TargetFormat } from "../../utils/api/getExchangeRate";
import type { CountryCode, CurrencyCode } from "../../../types/generated/graphql.customer.types";
import type { Locale_ElementsSupportedLocationCode_Enum, Locale_PageName_Enum } from "../../../types/generated/graphql.frontend.types";
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
declare const localizationStoreUpdateSelectedCountryCode: (newSelectedCountryCode: CountryCode | null) => void;
declare const initLocalizationStore: () => Promise<void>;
declare const localizationStoreUpdateSelectedLocale: (newSelectedLocale: Locale_ElementsSupportedLocationCode_Enum) => void;
export { initLocalizationStore, localizationDispose, localizationStore, localizationStoreOnUpdate, localizationStoreUpdateSelectedCountryCode, localizationStoreUpdateSelectedLocale, };
