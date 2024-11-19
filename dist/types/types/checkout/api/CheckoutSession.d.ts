import type { CountryCode } from "../../generated/graphql.internal.types";
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
    adjustmentsAmount: number;
    cartId: string | null;
    currency: string;
    itemsAmount: number;
    metadata: CheckoutSessionUpdateMetadata;
    presentmentCountryCode: CountryCode | null;
};
