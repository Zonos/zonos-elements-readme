import type { PaypalMockResponse } from "../../generated/graphql.internal.types";
export type PaypalCaptureOrderRequest = {
    checkoutSessionId: string;
    paypalMockResponse: PaypalMockResponse | null;
};
export type PaypalCreateOrderRequest = {
    checkoutSessionId: string;
};
