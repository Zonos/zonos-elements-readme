import type { CountryCode } from "../../generated/graphql.internal.types";
export type ValidateAddressRequest = {
    address?: {
        city?: string;
        line1?: string;
        line2?: string | null;
        name?: string;
        postal_code?: string;
        state?: string;
    };
    billingAddress?: {
        city?: string;
        line1?: string;
        line2?: string | null;
        name?: string;
        postal_code?: string;
        state?: string;
    };
    destinationCountry: CountryCode;
};
