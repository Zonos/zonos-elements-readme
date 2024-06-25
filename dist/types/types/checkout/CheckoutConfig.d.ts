import type { CartItem } from "../../components/store/checkout/cart";
import type { BuildLandedCostParams, BuildLandedCostResponse } from "../../components/utils/api/triggerBuildLandedCost";
import type { AnalyticsProviderStatus, AnalyticsProviderType, CheckoutSubscriptionStatus, CheckoutSuccessBehavior, CheckoutVisibilityStatus, GetOrderQuery, NotificationActiveStatus } from "../generated/graphql.customer.types";
export type ZonosOrder = GetOrderQuery['order'];
export type { BuildLandedCostParams, BuildLandedCostResponse };
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
        orderConfirmation: {
            active: NotificationActiveStatus;
            sendCopiesTo: Array<string>;
        } | null;
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
    successRedirectUrl: string;
    visibilityStatus: CheckoutVisibilityStatus;
    /**
     * Cart info callback for checkout (optional)
     * @note will use temp cart data if available
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
    buildCartDetail?: () => Promise<CartItem[]>;
    /**
     * Calculate landed cost callback for checkout (optional)
     * @note will use temp cart data if available
     */
    buildLandedCost?: (params: BuildLandedCostParams) => Promise<BuildLandedCostResponse>;
    /**
     * Callback trigger when the checkout is closed
     */
    onClose?: () => void;
    /**
     * Callback trigger when payment succeeds
     */
    onOrderSuccess?: (props: {
        zonosApiRoute: string;
        zonosOrder: ZonosOrder;
    }) => Promise<void>;
};
