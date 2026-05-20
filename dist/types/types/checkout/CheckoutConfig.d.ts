import type { CartItem } from "../../components/store/checkout/cart";
import type { ITranslationKey } from "../../components/store/translationStore";
import type { BuildLandedCostParams, BuildLandedCostResponse } from "../../components/utils/api/triggerBuildLandedCost";
import type { AllowedSettlementCurrencies, AnalyticsProviderStatus, AnalyticsProviderType, CheckoutSubscriptionStatus, CheckoutSuccessBehavior, CheckoutVisibilityStatus, CountryCode, CurrencyCode, ExternalPaymentMethodStatus, ExternalPaymentMethodType, ExternalServiceTokenType, GetOrderQuery, Mode, NotificationActiveStatus } from "../generated/graphql.internal.types";
export declare const checkoutHiddenBtnSelector = "zonos--checkout-hidden-button";
export declare const checkoutHiddenInternationalBtnSelector = "zonos--checkout-hidden-international-button";
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
    /**
     * Will use this value to prefill the first name field in the checkout form instead of `customerName`
     */
    customerFirstName: string;
    /**
     * Will use this value to prefill the last name field in the checkout form instead of `customerName`
     */
    customerLastName: string;
    /**
     * Will use this value to prefill if customerFirstName and customerLastName are not provided
     * @deprecated Use `customerFirstName` and `customerLastName` since Checkout uses 2 inputs for first and last name, there is not a good way to split the name into first and last name for some countries.
     */
    customerName?: string;
    customerPhone: string;
    customerState?: string;
    customerZip: string;
};
export type CreateCartIdObject = {
    cartId: string;
    /**
     * Optional informational message rendered as a single info banner under the
     * Order total in Checkout. Each item in the array appears on a new line of
     * the same banner. Markdown links (`[text](url)`) are rendered as `<a>` tags.
     */
    customMessage?: string[];
    customerAuthenticationToken?: string;
    shippingData?: PrefillAddress | null;
};
export type CheckoutConfig = {
    /**
     * Validate address to allow specific character sets
     * @default ALL
     */
    allowedCharacterSets?: 'ALL' | 'LATIN';
    /**
     * Enable settlement currencies to pay in USD
     * @default LOCAL
     */
    allowedSettlementCurrencies: AllowedSettlementCurrencies;
    /**
     * Always trigger International Checkout with this selector regardless of shipping zone
     */
    alwaysTriggerInternationalCheckoutSelector?: string | null;
    analyticsProviders: Array<{
        status: AnalyticsProviderStatus;
        type: AnalyticsProviderType;
    }>;
    /**
     * BigCommerce-specific identifiers forwarded by the Zonos loader script.
     * Consumed by runtime code that needs to hit the demo-app proxy on behalf
     * of a specific BigCommerce store (e.g. the `/checkouts/settings`
     * force-login check).
     */
    bigCommerceConfig?: {
        storeHash: string;
    };
    /**
     * Time that payment will be captured after the order is placed. Can't be overridden in Zonos.init
     */
    captureDelay?: number;
    /**
     * @default DISABLED - when false, company fields would not show up in the checkout form
     */
    companyFieldsStatus: 'ENABLED' | 'DISABLED';
    /**
     * Duration (in seconds) for which the cart remains valid for checkout in hosted checkout.
     * @default 3_600 (1 hour)
     */
    defaultCartExpiration?: number;
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
    /**
     * Place order button selector that only trigger International Checkout when shopper is in merchant's shipping zones
     */
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
    /**
     * The URL to redirect to after a successful checkout.
     *
     * - When `successBehavior` is `REDIRECT_TO_SUCCESS_PAGE`, Checkout polls for the Zonos order and then redirects, appending `zOrderNumber` (and `orderId` for legacy).
     * - When `successBehavior` is `CLOSE_MODAL` and this URL is provided, Checkout redirects immediately after payment without waiting for the order, appending `zonosCheckoutSessionId`.
     *   In this flow Checkout does not poll for the order, so `onOrderSuccess` is **not** invoked as part of the redirect. The merchant should use `zonosCheckoutSessionId` on their success page (via the `checkoutSession` GraphQL query) to fetch the order details.
     */
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
    }, helpers?: {
        /**
         * The URL for the Zonos API.
         */
        zonosApiRoute: string;
        /**
         * Utility function to translate strings.
         */
        translate: (key: ITranslationKey) => string;
    }) => Promise<string | null>;
    /**
     * Callback trigger when payment succeeds
     */
    onOrderSuccess?: (props: {
        zonosApiRoute: string;
        zonosOrder: ZonosOrder;
    }) => Promise<void>;
};
