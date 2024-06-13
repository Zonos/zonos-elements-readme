import type { CountryCode } from "../../generated/graphql.customer.types";
export type ValidateAddressRequestBody = {
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
