import type { CountryCode, InclusivePriceConfigurationStatus } from "./generated/graphql.internal.types";
export type InclusivePriceConfiguration = {
    configurations: {
        [key: string]: {
            rate: number;
            status: InclusivePriceConfigurationStatus;
        } | null;
    };
    effectiveRate: number;
    id: string;
    shipToCountry: CountryCode;
};
export type InclusivePriceConfigurationResponse = InclusivePriceConfiguration[];
