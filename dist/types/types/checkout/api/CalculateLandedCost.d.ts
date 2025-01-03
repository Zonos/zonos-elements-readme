import type { CartItem } from "../../../components/store/checkout/cart";
import type { CalculateLandedCostMutation, CartCalculateLandedCostMutation, CountryCode, CurrencyCode, LandedCostAdjustmentType } from "../../generated/graphql.internal.types";
export type CalculateLandedCostAdjustmentInput = {
    amount: number;
    name?: string | null;
    productId: string | null;
    promoCode?: string | null;
    sku: string | null;
    type: LandedCostAdjustmentType;
};
export type Extensions = {
    [key: string]: unknown;
} & {
    rule?: {
        description: string;
        id: string;
        name: string;
    };
    ruleMessageType?: 'CUSTOM' | 'DEFAULT';
};
export type ApiError = {
    extensions?: Extensions | null;
    message: string;
};
export type CalculateLandedCostResponse = CalculateLandedCostMutation & {
    errors: ApiError[];
};
export type CalculateLandedCostRequest = {
    billingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: CountryCode;
        postalCode: string;
        state: string;
    };
    billingContact: {
        firstName: string;
        lastName: string;
        phone: string;
    };
    checkoutSessionId: string;
    contact: {
        email?: string;
        firstName: string;
        lastName: string;
        phone: string;
    };
    /**
     * When this is set, the created quote will not be shown on the Quote List page in the Zonos Dashboard.
     */
    isTest?: boolean;
    items: CartItem[];
    landedCostAdjustments?: CalculateLandedCostAdjustmentInput[];
    metadata?: {
        key: string;
        value: string;
    }[];
    /**
     * TaxId that the some destination countries require for the shipment.
     */
    shipToTaxId?: string;
    shippingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: CountryCode;
        postalCode: string;
        state: string;
    };
};
export type CartCalculateLandedCostResponse = CartCalculateLandedCostMutation & {
    errors: ApiError[];
};
export type CartCalculateLandedCostRequest = {
    billingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: CountryCode;
        postalCode: string;
        state: string;
    };
    billingContact: {
        firstName: string;
        lastName: string;
        phone: string;
    };
    /**
     * Currency code of the first item in the cart
     */
    cartCurrencyCode: CurrencyCode;
    cartId: string;
    checkoutSessionId: string;
    contact: {
        email?: string;
        firstName: string;
        lastName: string;
        phone: string;
    };
    /**
     * When this is set, the created quote will not be shown on the Quote List page in the Zonos Dashboard.
     */
    isTest?: boolean;
    landedCostAdjustments?: CalculateLandedCostAdjustmentInput[];
    metadata?: {
        key: string;
        value: string;
    }[];
    /**
     * TaxId that the some destination countries require for the shipment.
     */
    shipToTaxId?: string;
    shippingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: CountryCode;
        postalCode: string;
        state: string;
    };
};
