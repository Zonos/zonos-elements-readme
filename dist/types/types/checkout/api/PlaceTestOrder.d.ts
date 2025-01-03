import type { OrderCreateMutation } from "../../generated/graphql.internal.types";
export type PlaceTestOrderRequest = {
    billToPartyId: string;
    checkoutSessionId: string;
    shipToPartyId: string;
};
export type PlaceTestOrderResponse = OrderCreateMutation;
