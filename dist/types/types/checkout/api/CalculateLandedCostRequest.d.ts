import type { CartItem } from "../../../components/store/checkout/cart";
import type { CurrencyCode, LandedCostAdjustmentType } from "../../generated/graphql.customer.types";
export type CalculateLandedCostRequest = {
    billingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: string;
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
    items: CartItem[];
    landedCostAdjustments?: {
        amount: number;
        productId: string | null;
        sku: string | null;
        type: LandedCostAdjustmentType;
    }[];
    metadata?: {
        key: string;
        value: string;
    }[];
    shippingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: string;
        postalCode: string;
        state: string;
    };
};
export type CartCalculateLandedCostRequest = {
    billingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: string;
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
    metadata?: {
        key: string;
        value: string;
    }[];
    shippingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: string;
        postalCode: string;
        state: string;
    };
};
