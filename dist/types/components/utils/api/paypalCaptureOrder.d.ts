import type { PaypalMockResponse, PaypalOrderCaptureMutation } from "../../../types/generated/graphql.customer.types";
type PaypalCaptureOrderPayload = {
    checkoutSessionId: string;
    paypalMockResponse: PaypalMockResponse | null;
};
export declare const paypalCaptureOrder: ({ checkoutSessionId, paypalMockResponse, }: PaypalCaptureOrderPayload) => Promise<{
    errors: import("../../..").JsonError[];
    json: PaypalOrderCaptureMutation | null;
}>;
export {};
