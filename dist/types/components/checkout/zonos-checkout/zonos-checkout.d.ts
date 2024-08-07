/// <reference types="node" />
import type { PaymentIntent, Stripe } from '@stripe/stripe-js';
import { type CartItem } from "../../store/checkout/cart";
import { type StripeStoreContactOption } from "../../store/checkout/stripe";
import { type AppearanceConfig } from "../../store/zonosStore";
export declare class ZonosCheckout {
    /**
     * Listener for locale change in localization store
     */
    private onChangeLocaleListener;
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
    /**
     * Error when submitting payment
     */
    paymentError: boolean;
    collapseReviewMobile: boolean;
    /**
     * Determine if we should skip and not hijack the Checkout button click event
     * Sometimes stripe or our api has error, we don't want to hijack the click event.
     */
    isAttachError: boolean;
    isMobile: boolean;
    zonosReviewRef?: HTMLZonosReviewElement;
    storybookPaymentStatusOverride?: PaymentIntent['status'];
    domesticRedirectedBtnSelector: string;
    legacyCheckoutHiddenBtnSelector: string;
    isLegacyCheckout: boolean;
    /**
     * Confirm dialog open state
     */
    confirmDialogOpen: boolean;
    /**
     * Session timeout screen state
     */
    showSessionTimoutScreen: boolean;
    /**
     * Timeout alert message
     */
    checkoutTimeoutInterval: NodeJS.Timeout | null;
    /**
     * Error message from onInventoryCheck callback
     */
    inventoryCheckErrorMessage: string | null;
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
    private buildCartAndInit;
    private clearCheckoutTimeoutInterval;
    private startCheckoutTimeoutInterval;
    private reloadCheckoutSession;
    private attachCheckout;
    appearanceSettingsOverrideChanged(): void;
    /**
     * Set default address from query param if it's valid
     */
    private useLegacyQueryParam;
    /**
     * Setup all of the event listeners for the component on first load
     */
    init(): Promise<void>;
    /**
     * For storybook to set to finish step, this is to trigger in the story for zonos-checkout-finish
     */
    setToFinishStep(forcePaymentStatus?: PaymentIntent['status']): Promise<void>;
    private handleCustomerInfoContinue;
    private handleShippingContinue;
    private handleInventoryCheckDialogCancel;
    private handleInventoryCheckDialogConfirm;
    /**
     * Handle inventory check and returns error message if the callback provided.
     */
    private handleInventoryCheck;
    private handleCheckoutPaymentContinue;
    private handleFinishClick;
    private getCurrentLocalePageEnum;
    handleWindowResize(): void;
    handleMobileChange(): void;
    handleAppearanceSettingsOverrideChange(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
