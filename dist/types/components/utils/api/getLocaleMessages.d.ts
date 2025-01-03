import type { CountryCode } from "../../../types/index";
export declare const getLocaleMessages: ({ countryCode, localeTo, storeId, }: {
    countryCode: CountryCode;
    localeTo?: string;
    storeId: number;
}) => Promise<{
    countryCodes: Array<string> | null;
    countryCodesPageMessageLinks: Array<{
        id: number;
        message: {
            id: number;
            localeFrom: string;
            localeTo: string;
            textFrom: string;
            textTo: string;
        };
    }>;
    id: number;
    pageName: import("src/types/generated/graphql.frontend.types").Locale_PageName_Enum;
}[]>;
