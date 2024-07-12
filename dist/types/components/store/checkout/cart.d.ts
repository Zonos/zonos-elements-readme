import { stripeStoreUpdateCheckoutSession } from "./stripe";
import type { CalculateLandedCostMutation, CheckoutPresentmentFragment, CurrencyCode, ItemMeasurementType, ItemType, ItemUnitOfMeasure, LandedCostFragment, ShipmentRatingFragment } from "../../../types/generated/graphql.customer.types";
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
type CartItemToUse = CartItem & {
    isRestricted: boolean;
};
type CartStore = {
    checkoutSessionId: string | null;
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
declare const cartStoreReCalculateTotal: ({ currency, itemsAmount, landedCostId, }: CartStoreRecalculateTotalParams) => Promise<boolean>;
declare const cartStoreUpdateSelectedShippingOption: (selectedShippingOption: ShipmentRatingFragment) => Promise<boolean>;
declare const cartStoreResetCartItems: () => void;
declare const cartStoreUpdateItems: (cartItems: CartItem[]) => Promise<void>;
declare const cartStoreNextStep: () => void;
declare const cartStoreResetTabItems: () => void;
export { cartStore, cartStoreApplySubtotals, cartStoreCheckItemRestrictions, cartStoreGetShippingTransitInfo, cartStoreHasOneEligibleItem, cartStoreNextStep, cartStoreReCalculateTotal, cartStoreReset, cartStoreResetCartItems, cartStoreResetTabItems, cartStoreUpdateItems, cartStoreUpdateSelectedShippingOption, cartStoreUpdateToErrorState, };
