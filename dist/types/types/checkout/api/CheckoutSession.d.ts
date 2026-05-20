import type { CheckoutSessionBaseCurrencyUpdateMutation, CheckoutSessionPaymentIntentCreateMutation, CheckoutSessionStoreCreditOrderCreateMutation, CountryCode, CurrencyCode, GetCheckoutSessionQuery, GetCollectCheckoutSessionQuery } from "../../generated/graphql.internal.types";
export type GetCheckoutSessionRequest = {
    checkoutSessionId: string;
};
export type GetCheckoutSessionResponse = GetCheckoutSessionQuery;
type CheckoutSessionVariantTest = {
    selectedVariantKey: string | null;
    testKey: string;
};
export type CheckoutSessionUpdateRequest = {
    adjustmentsAmount: number;
    billToPartyId?: string | null;
    cartId: string | null;
    currency?: string;
    /**
     * The one-time password for the customer's authentication.
     */
    customerAuthenticationToken?: string;
    id: string;
    itemsAmount?: number;
    landedCostId?: string;
    metadata?: {
        key: string;
        value: string;
    }[];
    presentmentCountryCode: CountryCode | null;
    shipToPartyId?: string | null;
    skipPaymentIntent?: boolean;
    storeCreditApplication?: {
        amount?: number;
        mode: 'FULL' | 'NONE' | 'PARTIAL';
    };
    varianceTestInput?: CheckoutSessionVariantTest[];
};
export type CheckoutSessionUpdateMetadata = {
    key: string;
    value: string;
}[];
export type CheckoutSessionUpdateMetadataRequest = {
    id: string;
    metadata: CheckoutSessionUpdateMetadata;
};
export declare const checkoutSessionMutableAttributeKeys: readonly ["ZONOS_FORM_TYPE_USING", "APP_VERSION", "APP_VERSION_NPM_INTEGRATION", "LEGACY_CHECKOUT_FACADE"];
export declare const checkoutSessionImmutableAttributeKeys: readonly ["ORDER_DUPLICATION_CONSENT", "WITH_ABANDONED_CART_TOKEN"];
export declare const checkoutSessionAttributeKeys: ("ZONOS_FORM_TYPE_USING" | "APP_VERSION" | "APP_VERSION_NPM_INTEGRATION" | "LEGACY_CHECKOUT_FACADE" | "ORDER_DUPLICATION_CONSENT" | "WITH_ABANDONED_CART_TOKEN")[];
export type CheckoutSessionUpdateAttributeKey = (typeof checkoutSessionAttributeKeys)[number] | ({
    _?: never;
} & string);
export type CheckoutSessionUpdateAttribute = {
    key: CheckoutSessionUpdateAttributeKey;
    value: string;
};
export type CheckoutSessionUpdateAttributesRequest = {
    attributes: CheckoutSessionUpdateAttribute[];
    id: string;
};
export type CheckoutSessionCreateRequest = {
    adjustmentsAmount?: number;
    cartId: string | null;
    currency: string;
    /**
     * The one-time password for the customer's authentication.
     */
    customerAuthenticationToken?: string;
    /**
     * Whether the checkout session is for collect.
     */
    isCollect?: boolean;
    /**
     * Whether the checkout session is for invoice.
     */
    isInvoice?: boolean;
    itemsAmount: number;
    metadata: CheckoutSessionUpdateMetadata;
    presentmentCountryCode: CountryCode | null;
    skipPaymentIntent?: boolean;
    varianceTestInput?: CheckoutSessionVariantTest[];
};
export type PaymentIntentCreateRequest = {
    checkoutSessionId: string;
};
export type PaymentIntentCreateResponse = CheckoutSessionPaymentIntentCreateMutation;
export type CheckoutSessionBaseCurrencyUpdatePayload = {
    checkoutSessionId: string;
    currencyCode: CurrencyCode;
};
export type CheckoutSessionBaseCurrencyUpdateResponse = CheckoutSessionBaseCurrencyUpdateMutation;
export type GetCollectCheckoutSessionPayload = {
    checkoutSessionId: string;
};
export type GetCollectCheckoutSessionResponse = GetCollectCheckoutSessionQuery;
export type StoreCreditOrderCreateRequest = {
    checkoutSessionId: string;
};
export type StoreCreditOrderCreateResponse = CheckoutSessionStoreCreditOrderCreateMutation;
export {};
