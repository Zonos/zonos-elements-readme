import type { CheckoutSessionUpdateAttribute } from "../../../types/index";
export declare const updateCheckoutSessionAttributes: ({ attributes, checkoutSessionId, }: {
    attributes: CheckoutSessionUpdateAttribute[];
    checkoutSessionId: string;
}) => Promise<{
    success: boolean;
} | undefined>;
