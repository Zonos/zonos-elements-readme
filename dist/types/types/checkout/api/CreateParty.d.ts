import type { CountryCode } from "../../generated/graphql.internal.types";
export type CreatePartyRequest = {
    address: {
        city: string;
        country: CountryCode;
        firstName: string;
        lastName: string;
        line1: string;
        line2?: string | null;
        phone: string;
        postal_code?: string;
        state?: string;
    };
    billingAddress: {
        city: string;
        country: CountryCode;
        firstName: string;
        lastName: string;
        line1: string;
        line2?: string | null;
        phone: string;
        postal_code?: string;
        state?: string;
    };
    companyName: string;
    email: string;
    isTest: boolean;
    rootId: string;
    shortAddressCode?: string;
    taxId?: string;
};
export type CreatePartyResponse = {
    billToPartyId: string;
    shipToPartyId: string;
};
export type CreateBillingPartyRequest = {
    billingAddress: {
        city: string;
        country: CountryCode;
        firstName: string;
        lastName: string;
        line1: string;
        line2?: string | null;
        phone: string;
        postal_code?: string;
        state?: string;
    };
    /**
     * Checkout session id that the party will be attached to
     */
    checkoutSessionId: string;
    companyName: string;
    email: string;
    isTest: boolean;
    rootId: string;
};
export type CreateBillingPartyResponse = {
    billToPartyId: string;
};
