import type { CountryCode } from "../../../types/index";
import type { InclusivePriceSettingFieldsFragment } from "../../../types/generated/graphql.internal.types";
export type ZonosInclusivePriceSetting = {
    setting: InclusivePriceSettingFieldsFragment | null;
};
export declare const getInclusivePricing: (countryCode: CountryCode | null) => Promise<ZonosInclusivePriceSetting | null>;
