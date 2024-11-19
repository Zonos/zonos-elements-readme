import type { PaypalCreateOrderRequest } from "../../../types/checkout/api/Paypal";
import type { PaypalOrderCreateMutation } from "../../../types/generated/graphql.internal.types";
export declare const paypalCreateOrder: ({ checkoutSessionId, }: PaypalCreateOrderRequest) => Promise<{
    errors: import("../../..").JsonError[];
    json: PaypalOrderCreateMutation | null;
}>;
