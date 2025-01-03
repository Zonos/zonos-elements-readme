import type { CalculateLandedCostMutation, CartQuery, CheckoutPresentmentFragment, CheckoutSessionDetailsFragment, CountryCode, CurrencyCode, IncotermCode, ItemMeasurementType, ItemType, ItemUnitOfMeasure, LandedCostFragment, ShipmentRatingFragment } from "../../../types/generated/graphql.internal.types";
type Step = 'customer-info' | 'shipping' | 'payment' | 'finish' | 'error';
export type TabItem = {
    index: number;
    isDone: boolean;
    label: 'Customer' | 'Shipping' | 'Payment';
    value: 'customer-info' | 'shipping' | 'payment';
};
export type TabItems = Record<TabItem['value'], TabItem>;
export type ItemMeasurement = {
    /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
    type: ItemMeasurementType;
    /** Indicates the `Measurement` units to be used. */
    unitOfMeasure: ItemUnitOfMeasure;
    /** The `Measurement` value. */
    value: number;
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
    countryOfOrigin?: CountryCode;
    currencyCode: CurrencyCode;
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
    /**
     * Remove ID type from this so it is forced to be used from the `checkoutSessionId` which could also be loaded from session storage.
     */
    checkoutSession: Omit<CheckoutSessionDetailsFragment, 'id'> | null;
    checkoutSessionId: string | null;
    /**
     * Checkout session timeout
     */
    checkoutSessionTimeoutShow: boolean;
    checkoutTimeoutInterval: NodeJS.Timeout | null;
    currency: CurrencyCode;
    customQuotingError: string | null;
    /**
     * Toggle to show the amount in base currency instead. Only applicable when url param `zonosShowBaseForeign` is set
     */
    displayBaseCurrency: boolean;
    dutiesTaxesFees: number | null;
    /**
     * For DAP
     */
    dutiesTaxesFeesEstimate: number | null;
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
    externalConfirmationPageURL: string | null;
    /**
     * Inventory check error message. When this error message is not null, we will show the inventory check error modal
     */
    inventoryCheckErrorMessage: string | null;
    isSelectedShippingAboveDeminimis: boolean;
    isSelectedShippingGuarantee: boolean;
    /**
     * Use staging mode or not (when it's staging store, we won't create payment intent when creating checkout session since they don't have Stripe connect setup)
     */
    isStagingMode: boolean;
    items: CartItemToUse[];
    landedCostData: MappedCheckoutLandedCost[] | null;
    landedCostMethod: IncotermCode;
    partiesData: CalculateLandedCostMutation['partyCreateWorkflow'];
    promoCode: string;
    /**
     * Only show promo code error when promo code applied clicked by user
     */
    promoCodeApplied: boolean;
    promoCodeError: boolean;
    restrictedItems: RestrictedItem[];
    selectedLandedCost: MappedCheckoutLandedCost | null;
    selectedShippingOption: ShipmentRatingFragment | null;
    selectedShippingOptionTransitTime: string;
    shipping: number;
    shippingData: ShipmentRatingFragment[] | null;
    /**
     * Hide discount input or not
     */
    shouldHideDiscountInput: boolean;
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
    maxTransit: number;
    minTransit: number;
    unit: string;
} | null;
/**
 * Check and set restricted items in cart
 */
declare const cartStoreCheckItemRestrictions: (itemsWorkflow: ItemWorkflowInfo[]) => {
    cartItems: CartItemToUse[];
    restrictedItems: {
        restriction: {
            action: import("src/types/generated/graphql.internal.types").RestrictedItemAction;
            reason: string;
        };
        amount: number;
        attributes: Array<{
            key: string | null;
            value: string | null;
        } | null> | null;
        description: string | null;
        id: string;
        imageUrl: string | null;
        name: string | null;
        productId: string;
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
declare const cartStoreApplySubtotals: ({ dutiesTaxesFeesEstimate, method, subtotals, }: {
    dutiesTaxesFeesEstimate?: number;
    method: IncotermCode;
    subtotals: CartSubtotals;
}) => void;
/**
 * Detect if there are any items in cart that are not restricted and have positive amount, exclude negative amount items
 */
declare const cartStoreHasOneEligibleItem: () => boolean;
declare const cartStoreSetCheckoutSession: (checkoutSession: CheckoutSessionDetailsFragment) => void;
declare const cartStoreUpdateSelectedShippingOption: (selectedShippingOption: ShipmentRatingFragment, landedCostId: string) => Promise<boolean>;
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
declare const cartStorePreviousStep: () => void;
declare const cartStoreNextStep: () => void;
declare const cartStoreResetTabItems: () => void;
export { cartStore, cartStoreApplySubtotals, cartStoreCheckItemRestrictions, cartStoreClearCheckoutInterval, cartStoreGetShippingTransitInfo, cartStoreHasOneEligibleItem, cartStoreNextStep, cartStorePreviousStep, cartStoreReset, cartStoreResetCartItems, cartStoreResetTabItems, cartStoreSetCheckoutSession, cartStoreStartCheckoutInterval, cartStoreUpdateItems, cartStoreUpdateSelectedShippingOption, cartStoreUpdateToErrorState, };
