import type { CartItem } from "../../../components/store/checkout/cart";
import type { CountryCode, CurrencyCode, LandedCostAdjustmentType } from "../../generated/graphql.internal.types";
export type CalculateLandedCostAdjustmentInput = {
    amount: number;
    name?: string | null;
    productId: string | null;
    promoCode?: string | null;
    sku: string | null;
    type: LandedCostAdjustmentType;
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
    shippingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: CountryCode;
        postalCode: string;
        state: string;
    };
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
    shippingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: CountryCode;
        postalCode: string;
        state: string;
    };
};
