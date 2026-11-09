export type GetShippingInfoByLandedCostIdResponse = {
    /**
     * Optional Collect logo URL from the landed cost metadata (`collectLogoUrl`).
     * Overrides the default appearance logo when set. The company name comes from
     * the origin party.
     */
    collectLogoUrl: string | null;
    landedCostShortId: string | null;
    origin: {
        companyName: string | null;
    };
    shipping: {
        location: {
            administrativeAreaCode: string | null;
            countryCode: string | null;
            line1: string | null;
            line2: string | null;
            locality: string | null;
            postalCode: string | null;
        };
        person: {
            companyName: string | null;
            firstName: string | null;
            lastName: string | null;
        };
    };
};
export type GetShippingInfoByLandedCostIdRequest = {
    landedCostId: string;
};
export type GetInvoicePartyInfoByLandedCostIdResponse = {
    landedCostShortId: string | null;
    payor: {
        location: {
            administrativeAreaCode: string | null;
            countryCode: string | null;
            line1: string | null;
            line2: string | null;
            locality: string | null;
            postalCode: string | null;
        };
        person: {
            companyName: string | null;
            firstName: string | null;
            lastName: string | null;
        };
    };
};
export type GetInvoicePartyInfoByLandedCostIdRequest = {
    landedCostId: string;
};
