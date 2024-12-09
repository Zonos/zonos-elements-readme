import type { PaymentIntent, Stripe } from '@stripe/stripe-js';
import { type CartItem } from "../../store/checkout/cart";
import { type StripeStoreContactOption } from "../../store/checkout/stripe";
import { type AppearanceConfig } from "../../store/zonosStore";
import type { OrderPlacedInfo } from "../../../types/checkout/OrderPlacedInfo";
import type { CheckoutSessionDetailsFragment } from "../../../types/generated/graphql.internal.types";
export declare class ZonosCheckout {
    /**
     * Listener for locale change in localization store
     */
    private onChangeLocaleListener;
    private isRedirectAfterOrder;
    /**
     * Override appearance config
     */
    appearanceSettingsOverride?: Partial<AppearanceConfig>;
    /**
     * Preview checkout without needing to click on the button. This would be useful for demo purpose
     */
    preview: boolean;
    /**
     * Flag to determine if the checkout is on mobile
     */
    mobile: boolean;
    /**
     * Default address to use for the checkout (preview mode)
     */
    defaultAddress: StripeStoreContactOption | null;
    /**
     * Force dialog to be open
     */
    forceDialogOpen: boolean;
    defaultAddressParams: StripeStoreContactOption | null;
    /**
     * Whether or not the dialog is open
     */
    open: boolean;
    /**
     * The stripe instance
     */
    stripe: Stripe | null;
    /**
     * Whether or not the submit button is loading in `step` component
     */
    submitLoading: boolean;
    collapseReviewMobile: boolean;
    /**
     * Determine if we should skip and not hijack the Checkout button click event
     * Sometimes stripe or our api has error, we don't want to hijack the click event.
     */
    isAttachError: boolean;
    isMobile: boolean;
    isIframed: boolean;
    zonosReviewRef?: HTMLZonosReviewElement;
    storybookPaymentStatusOverride?: PaymentIntent['status'];
    isLegacyCheckout: boolean;
    /**
     * Confirm dialog open state
     */
    confirmDialogOpen: boolean;
    /**
     * Cart expired state to show the cart expired dialog
     */
    isCartExpired: boolean;
    /**
     * Error message from onInventoryCheck callback
     */
    inventoryCheckErrorMessage: string | null;
    /**
     * Placed order info to show the confirm dialog to the user
     */
    placedOrderInfo: OrderPlacedInfo | null;
    /**
     * Init cart info handler event
     */
    initCartInfoHandler(e: CustomEvent<CartItem[]>): Promise<void>;
    handleKeyPress(e: KeyboardEvent): Promise<void>;
    /**
     * Close dialog action
     */
    closeDialogHandler(props?: {
        /**
         * @param confirmed - clicked confirmed on the confirm dialog to close the checkout
         */
        confirmed: boolean;
    }): Promise<void>;
    private applyStripeTheme;
    /**
     * Check if the cart is expired, return `true` if the cart is expired
     */
    private handleCartExpiredCheck;
    /**
     * Check if stripe payment intent is succeeded or in a good state to move forward
     */
    private checkStripePaymentIntentStatus;
    private buildCartAndInit;
    private reloadCheckoutSession;
    private handleOrderDuplication;
    private confirmProceedWithOrderDuplication;
    private handleCancelOrderDuplication;
    private attachCheckout;
    private formatDate;
    private formatTime;
    appearanceSettingsOverrideChanged(): void;
    /**
     * Set default address from query param if it's valid
     */
    private useLegacyQueryParams;
    /**
     * Setup all of the event listeners for the component on first load
     */
    init(): Promise<void>;
    /**
     * For storybook to set to finish step, this is to trigger in the story for zonos-checkout-finish
     */
    setToFinishStep(forcePaymentStatus?: PaymentIntent['status']): Promise<void>;
    /**
     * For usage in storybook for a mocked flow.
     */
    mockCheckoutSession(session: CheckoutSessionDetailsFragment): Promise<void>;
    private handleCustomerInfoContinue;
    private handleShippingContinue;
    private handleInventoryCheckDialogConfirm;
    private handleCartExpiredDialogConfirm;
    private handleStripePaymentContinue;
    private handleFinishClick;
    private getCurrentLocalePageEnum;
    handleWindowResize(): void;
    handleMobileChange(): void;
    handleAppearanceSettingsOverrideChange(): void;
    handleAddressChange(): void;
    handleOpenChange(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
