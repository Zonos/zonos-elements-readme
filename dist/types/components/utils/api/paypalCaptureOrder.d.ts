import type { PaypalCaptureOrderRequest } from "../../../types/checkout/api/Paypal";
import type { PaypalOrderCaptureMutation } from "../../../types/generated/graphql.internal.types";
export declare const paypalCaptureOrder: ({ checkoutSessionId, paypalMockResponse, }: PaypalCaptureOrderRequest) => Promise<{
    errors: import("../../..").JsonError[];
    json: PaypalOrderCaptureMutation | null;
}>;
