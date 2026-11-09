import type { CountryCode } from "../../../types/index";
export declare const getLocaleMessages: ({ countryCode, localeTo, storeId, }: {
    countryCode: CountryCode;
    localeTo?: string;
    storeId: number;
}) => Promise<{
    countryCodes: Array<string>;
    pageName: import("src/types/generated/graphql.frontend.types").Locale_PageName_Enum;
    id: number;
    countryCodesPageMessageLinks: Array<{
        id: number;
        message: {
            textFrom: string;
            textTo: string;
            localeFrom: string;
            localeTo: string;
            id: number;
        };
    }>;
}[]>;
