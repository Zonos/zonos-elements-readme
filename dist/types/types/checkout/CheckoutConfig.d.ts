import type { CartItem } from "../../components/store/checkout/cart";
import type { BuildLandedCostParams, BuildLandedCostResponse } from "../../components/utils/api/triggerBuildLandedCost";
import type { AnalyticsProviderStatus, AnalyticsProviderType, CheckoutSubscriptionStatus, CheckoutSuccessBehavior, CheckoutVisibilityStatus, CountryCode, CurrencyCode, ExternalPaymentMethodStatus, ExternalPaymentMethodType, ExternalServiceTokenType, GetOrderQuery, Mode, NotificationActiveStatus } from "../generated/graphql.internal.types";
export declare const checkoutHiddenBtnSelector = "zonos--checkout-hidden-button";
export declare const domesticRedirectedBtnSelector = "zonos--domestic-redirected-checkout-button";
export type ZonosOrder = GetOrderQuery['order'];
export type { BuildLandedCostParams, BuildLandedCostResponse };
export type BuildCardDetailParams = {
    countryCode: CountryCode;
    currencyCode: CurrencyCode;
};
type PromiseOrValue<T> = T | Promise<T>;
export type PrefillAddress = {
    customerAddress1: string;
    customerAddress2?: string;
    customerCity?: string;
    /**
     * If country is not provided, it will try to pull from query params `zCountry` or `country` or `customerCountry` in the URL or fallback to user's selected country
     */
    customerCountry?: string;
    customerEmail: string;
    customerName: string;
    customerPhone: string;
    customerState?: string;
    customerZip: string;
};
export type CreateCartIdObject = {
    cartId: string;
    shippingData?: PrefillAddress | null;
};
export type CheckoutConfig = {
    /**
     * Validate address to allow specific character sets
     * @default ALL
     */
    allowedCharacterSets?: 'ALL' | 'LATIN';
    analyticsProviders: Array<{
        status: AnalyticsProviderStatus;
        type: AnalyticsProviderType;
    }>;
    /**
     * Duration (in minutes) for which the cart remains valid for checkout in hosted checkout.
     * @default 60 (1 hour)
     */
    cartExpiration?: number;
    /**
     * @default false - when false, the place order button will be disabled until the script is loaded
     * @note if set to true, the place order button will not be enabled or disabled
     */
    disablePlaceOrderButtonActivation?: boolean;
    externalPaymentMethods: Array<{
        status: ExternalPaymentMethodStatus;
        type: ExternalPaymentMethodType;
    }> | null;
    externalServiceTokens: {
        token: string;
        type: ExternalServiceTokenType;
    }[];
    /**
     * Test mode for checkout (sandbox or production)
     * @default TEST
     */
    mode: Mode;
    orderNotifications: {
        abandonedCart: {
            delay: number;
            discountPercent: number;
            status: {
                active: NotificationActiveStatus;
                sendCopiesTo: Array<string>;
            };
        };
        orderCancelled: {
            active: NotificationActiveStatus;
            sendCopiesTo: Array<string>;
        };
        orderShipped: {
            active: NotificationActiveStatus;
            sendCopiesTo: Array<string>;
        };
    };
    organization: string;
    placeOrderButtonSelector: string | null;
    /**
     * @param subscriptionStatus subscription status for checkout, checkout only available if subscription status is ENABLED and visibility status is ENABLED
     *
     * **NOTE: this value can't be overridden in Zonos.init**
     */
    subscriptionStatus: CheckoutSubscriptionStatus;
    successBehavior: CheckoutSuccessBehavior;
    /**
     * The success page action text for checkout.
     * @note Default text supports translation automatically, but any custom text will not be translated.
     */
    successPageActionText?: string;
    /**
     * The success page subtitle text for checkout. Each item in the array will appear on a new line.
     * @note Default text supports translation automatically, but any custom text will not be translated.
     */
    successPageSubtitleText?: string[];
    /**
     * The success page title text for checkout.
     * @note Default text supports translation automatically, but any custom text will not be translated.
     */
    successPageTitleText?: string;
    successRedirectUrl: string;
    visibilityStatus: CheckoutVisibilityStatus;
    /**
     * Cart info callback for checkout (optional),
     * @deprecated This is deprecated in favor of the new callback `createCartId`. The new API would only need the cart ID to retrieve cart data.
     * @note will attempt to use cart data if available
     * User can dispatch an event 'zonos--init-cart-info' to update the cart
     * @example
     * const initEvent = new CustomEvent<CartItem[]>('zonos--init-cart-info', {
     *    detail: cartItems,
     * });
     * document.body.dispatchEvent(initEvent);
     * @returns {object[]} - object with the the item info to be added to cart:
     * - amount: number;
     * - countryOfOrigin?: string;
     * - currencyCode: string;
     * - description?: string;
     * - hsCode?: string;
     * - imageUrl?: string;
     * - name: string;
     * - productId?: string;
     * - quantity: number;
     */
    buildCartDetail?: (params: BuildCardDetailParams) => Promise<CartItem[]>;
    /**
     * Calculate landed cost callback for checkout (optional)
     * @deprecated This is deprecated in favor of the new callback `createCartId`. When using the new callback, the cart details will be retrieved using the cart ID, so this callback would no longer be needed.
     * @note will attempt to use cart data if available
     */
    buildLandedCost?: (params: BuildLandedCostParams) => Promise<BuildLandedCostResponse>;
    /**
     * A callback that returns the cart id from `cartCreate` mutation. You would use your cart data to call the `cartCreate` mutation and return the cart ID that was created.
     * @note
     * The mutation `cartCreate` should be called on the server side
     * @returns string - Cart ID
     */
    createCartId?: () => PromiseOrValue<string | CreateCartIdObject>;
    /**
     * Callback trigger when the checkout is closed
     */
    onClose?: () => void;
    /**
     * This callback is optional. If provided, it will be called right before the payment is processed.
     * @param items - The cart items.
     * @returns {string | null} - The error message to display to the user. If the message is empty or null, the payment will proceed.
     * @example
     * onInventoryCheck: async ({ items }) => {
     *   // Check if all items are available from the server. If the fetch is throwing an error, show a generic error message "Unable to check inventory. Please try again.".
     *   const itemsInfo = await fetch('https://yourserver.com/api/get-available-items', {
     *     method: 'POST',
     *     body: JSON.stringify({ items }),
     *   });
     *   const items = await itemsInfo.json();
     *   // Filter out unavailable items.
     *   const unavailableItems = items.filter(item => !item.available);
     *   if (unavailableItems.length) {
     *     // Display an error message to the user.
     *     return `The following items are not available: ${unavailableItems.map(item => item.name).join(', ')}`;
     *   }
     *   // Proceed with the payment if you return an empty string or null.
     *   return '';
     * }
     */
    onInventoryCheck?: (params: {
        items: CartItem[];
    }) => Promise<string | null>;
    /**
     * Callback trigger when payment succeeds
     */
    onOrderSuccess?: (props: {
        zonosApiRoute: string;
        zonosOrder: ZonosOrder;
    }) => Promise<void>;
};
