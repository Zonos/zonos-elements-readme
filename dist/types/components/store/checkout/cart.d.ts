/// <reference types="node" />
import { stripeStoreUpdateCheckoutSession } from "./stripe";
import type { CalculateLandedCostMutation, CartQuery, CheckoutPresentmentFragment, CurrencyCode, ItemMeasurementType, ItemType, ItemUnitOfMeasure, LandedCostFragment, ShipmentRatingFragment } from "../../../types/generated/graphql.customer.types";
type Step = 'customer-info' | 'shipping' | 'payment' | 'finish' | 'error';
export type TabItem = {
    index: number;
    isDone: boolean;
    label: 'Customer' | 'Delivery' | 'Payment';
    value: 'customer-info' | 'shipping' | 'payment';
};
export type TabItems = Record<TabItem['value'], TabItem>;
export type ItemMeasurement = {
    /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
    type?: ItemMeasurementType;
    /** Indicates the `Measurement` units to be used. */
    unitOfMeasure?: ItemUnitOfMeasure;
    /** The `Measurement` value. */
    value?: number;
};
type MappedCheckoutLandedCost = CheckoutPresentmentFragment & {
    landedCost: LandedCostFragment;
};
type ItemWorkflowInfo = CalculateLandedCostMutation['itemCreateWorkflow'][number];
type RestrictedItem = Exclude<ItemWorkflowInfo, 'restriction'> & {
    matchedItem?: CartItem;
    restriction: NonNullable<ItemWorkflowInfo['restriction']>;
};
export type CartItem = {
    amount: number;
    attributes?: {
        key: string;
        value: string;
    }[];
    countryOfOrigin?: string;
    currencyCode: string;
    description?: string;
    hsCode?: string;
    imageUrl?: string;
    itemType?: ItemType;
    measurements?: ItemMeasurement[];
    metadata?: {
        key: string;
        value: string;
    }[];
    name: string;
    productId?: string;
    quantity: number;
    sku?: string;
};
export type CartAdjustment = NonNullable<CartQuery['cart']>['adjustments'][number];
type CartItemToUse = CartItem & {
    isRestricted: boolean;
};
type CartStore = {
    adjustmentTotal: number;
    /**
     * Adjustments from cart
     */
    adjustments: CartAdjustment[];
    checkoutSessionId: string | null;
    /**
     * Checkout session timeout
     */
    checkoutSessionTimeoutShow: boolean;
    checkoutTimeoutInterval: NodeJS.Timeout | null;
    currency: CurrencyCode;
    dutiesTaxFees: number;
    error: {
        messages: string[];
        title: string;
    } | null;
    exchangeRate: {
        id: string;
        rate: number;
        sourceCurrencyCode: CurrencyCode;
        targetCurrencyCode: CurrencyCode;
        type: string;
    } | null;
    /**
     * Inventory check error message. When this error message is not null, we will show the inventory check error modal
     */
    inventoryCheckErrorMessage: string | null;
    isSelectedShippingAboveDeminimis: boolean;
    isSelectedShippingGuarantee: boolean;
    items: CartItemToUse[];
    landedCostData: MappedCheckoutLandedCost[] | null;
    restrictedItems: RestrictedItem[];
    selectedLandedCost: MappedCheckoutLandedCost | null;
    selectedShippingOption: ShipmentRatingFragment | null;
    selectedShippingOptionExpectedDate: string;
    selectedShippingOptionTransitTime: string;
    shipping: number;
    shippingData: ShipmentRatingFragment[] | null;
    step: Step;
    subtotal: number;
    tabItems: TabItems;
    total: number;
};
declare const cartStore: CartStore;
/**
 * Format shipping transit info to be displayed on UI
 * @returns
 * - expectedDate: Thursday, Aug 12
 * - maxTransit: 5
 * - minTransit: 3
 */
declare const cartStoreGetShippingTransitInfo: (item: ShipmentRatingFragment) => {
    expectedDate: string;
    maxTransit: string | number;
    minTransit: string | number;
};
/**
 * Check and set restricted items in cart
 */
declare const cartStoreCheckItemRestrictions: (itemsWorkflow: ItemWorkflowInfo[]) => {
    cartItems: CartItemToUse[];
    restrictedItems: {
        restriction: {
            action: import("src/types/generated/graphql.customer.types").RestrictedItemAction;
            reason: string;
        };
        amount: number;
        attributes: ({
            key: string | null;
            value: string | null;
        } | null)[] | null;
        description: string | null;
        id: string;
        imageUrl: string | null;
        name: string | null;
        quantity: number;
        sku: string | null;
        matchedItem: CartItemToUse | undefined;
    }[];
};
declare const cartStoreReset: () => void;
declare const cartStoreUpdateToErrorState: ({ messages, title, }: {
    messages: string[];
    title: string;
}) => void;
type CartSubtotals = {
    adjustments: number;
    exchangeRate: {
        id: string;
        rate: number;
        sourceCurrencyCode: CurrencyCode;
        targetCurrencyCode: CurrencyCode;
        type: string;
    };
    items: number;
    landedCostTotal: number;
    presentmentCurrencyCode: CurrencyCode;
    shipping: number;
    total: number;
};
declare const cartStoreApplySubtotals: (subtotals: CartSubtotals) => void;
type CartStoreRecalculateTotalParams = Omit<Parameters<typeof stripeStoreUpdateCheckoutSession>[0], 'id' | 'presentmentCountryCode'>;
/**
 * Detect if there are any items in cart that are not restricted and have positive amount, exclude negative amount items
 */
declare const cartStoreHasOneEligibleItem: () => boolean;
declare const cartStoreReCalculateTotal: ({ adjustmentAmount, cartId, currency, itemsAmount, landedCostId, }: CartStoreRecalculateTotalParams) => Promise<boolean>;
declare const cartStoreUpdateSelectedShippingOption: (selectedShippingOption: ShipmentRatingFragment) => Promise<boolean>;
declare const cartStoreStartCheckoutInterval: ({ isPreview, sessionTimeout, }: {
    isPreview: boolean;
    /**
     * Checkout session timeout in milliseconds
     */
    sessionTimeout: number;
}) => void;
declare const cartStoreClearCheckoutInterval: () => void;
declare const cartStoreResetCartItems: () => void;
declare const cartStoreUpdateItems: ({ adjustments, cartItems, }: {
    adjustments: CartAdjustment[];
    cartItems: CartItem[];
}) => Promise<void>;
declare const cartStoreNextStep: () => void;
declare const cartStoreResetTabItems: () => void;
export { cartStore, cartStoreApplySubtotals, cartStoreCheckItemRestrictions, cartStoreClearCheckoutInterval, cartStoreGetShippingTransitInfo, cartStoreHasOneEligibleItem, cartStoreNextStep, cartStoreReCalculateTotal, cartStoreReset, cartStoreResetCartItems, cartStoreResetTabItems, cartStoreStartCheckoutInterval, cartStoreUpdateItems, cartStoreUpdateSelectedShippingOption, cartStoreUpdateToErrorState, };
