import type { CheckoutSessionPaymentIntentCreateMutation, CountryCode, GetCheckoutSessionQuery } from "../../generated/graphql.internal.types";
export type GetCheckoutSessionRequest = {
    checkoutSessionId: string;
};
export type GetCheckoutSessionResponse = GetCheckoutSessionQuery;
export type CheckoutSessionUpdateRequest = {
    adjustmentsAmount: number;
    cartId: string | null;
    currency?: string;
    id: string;
    itemsAmount?: number;
    landedCostId?: string;
    metadata?: {
        key: string;
        value: string;
    }[];
    presentmentCountryCode: CountryCode | null;
    skipPaymentIntent?: boolean;
};
export type CheckoutSessionUpdateMetadata = {
    key: string;
    value: string;
}[];
export type CheckoutSessionUpdateMetadataRequest = {
    id: string;
    metadata: CheckoutSessionUpdateMetadata;
};
export type CheckoutSessionCreateRequest = {
    adjustmentsAmount?: number;
    cartId: string | null;
    currency: string;
    itemsAmount: number;
    metadata: CheckoutSessionUpdateMetadata;
    presentmentCountryCode: CountryCode | null;
    skipPaymentIntent?: boolean;
};
export type PaymentIntentCreateRequest = {
    checkoutSessionId: string;
};
export type PaymentIntentCreateResponse = CheckoutSessionPaymentIntentCreateMutation;
