import type { CountryCode } from "../../../types/index";
import type { Locale_ElementsSupportedLocationCode_Enum } from "../../../types/generated/graphql.frontend.types";
type Localization = {
    country: CountryCode | null;
    locale: Locale_ElementsSupportedLocationCode_Enum | null;
};
export declare const getLocalization: () => Promise<Localization>;
export {};
