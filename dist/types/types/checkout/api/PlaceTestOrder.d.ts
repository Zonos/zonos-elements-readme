import type { CheckoutSessionOrderCreateMutation } from "../../generated/graphql.internal.types";
export type PlaceTestOrderRequest = {
    /**
     * @deprecated this will be removed in the future
     */
    billToPartyId?: string;
    checkoutSessionId: string;
    /**
     * @deprecated this will be removed in the future
     */
    shipToPartyId?: string;
};
export type PlaceTestOrderResponse = CheckoutSessionOrderCreateMutation;
