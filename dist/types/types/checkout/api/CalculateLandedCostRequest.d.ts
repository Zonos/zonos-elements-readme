import type { CartItem } from "../../../components/store/checkout/cart";
import type { LandedCostAdjustmentType } from "../../generated/graphql.customer.types";
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
