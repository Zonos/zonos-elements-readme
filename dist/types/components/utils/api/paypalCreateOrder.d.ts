import type { PaypalOrderCreateMutation } from "../../../types/generated/graphql.customer.types";
type PaypalCreateOrderPayload = {
    checkoutSessionId: string;
};
export declare const paypalCreateOrder: ({ checkoutSessionId, }: PaypalCreateOrderPayload) => Promise<{
    errors: import("../../..").JsonError[];
    json: PaypalOrderCreateMutation | null;
}>;
export {};
