import type { CheckoutPaypalOrderIntent, PaypalMockResponse } from "../../generated/graphql.internal.types";
export type PaypalCaptureOrderRequest = {
    checkoutSessionId: string;
    paypalMockResponse: PaypalMockResponse | null;
};
export type PaypalCreateOrderRequest = {
    checkoutSessionId: string;
    intent?: CheckoutPaypalOrderIntent;
};
export type PaypalOrderIntent = Lowercase<CheckoutPaypalOrderIntent>;
