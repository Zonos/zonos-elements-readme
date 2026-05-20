import type { PaymentIntent, Stripe } from '@stripe/stripe-js';
export declare class ZonosInvoice {
    private storeUnsubscribeList;
    /**
     * Listener for locale change in localization store
     */
    private onChangeLocaleListener;
    /**
     * Flag to determine if the checkout is on mobile
     */
    mobile: boolean;
    /**
     * Whether or not the component is being rendered with tablet styles
     */
    tablet: boolean;
    /**
     * The stripe instance
     */
    stripe: Stripe | null;
    /**
     * Whether or not the language dialog is open
     */
    showLanguageDialogMobile: boolean;
    /**
     * Whether or not the submit button is loading in `step` component
     */
    submitLoading: boolean;
    collapseReviewMobile: boolean;
    isMobile: boolean;
    isTablet: boolean;
    zonosReviewRef?: HTMLZonosReviewElement;
    /**
     * For storybook to set to finish step, this is to trigger in the story for zonos-checkout-finish
     */
    storybookPaymentStatusOverride?: PaymentIntent['status'];
    isOverlayLoading: boolean;
    /**
     * Confirm dialog open state
     */
    isCartCollected: boolean;
    /**
     * Cart expired state to show the cart expired dialog
     */
    isCartExpired: boolean;
    /**
     * Pay in USD confirm dialog open state
     */
    payInUsdConfirmDialogOpen: boolean;
    /**
     * Error message from onInventoryCheck callback
     */
    inventoryCheckErrorMessage: string | null;
    /**
     * Confirmation id for invoice finish component
     */
    confirmationId: string | null;
    /**
     * Client secret value
     */
    clientSecret: string | null;
    /**
     * Client secret value of customer session (use to load saved payment method and render saved consent)
     */
    stripeCustomerSessionClientSecret: string | null;
    /**
     * Listen to resize event to update the isMobile state
     */
    resizeListener(): void;
    private getBaseCurrencySettlementInfo;
    private applyStripeTheme;
    /**
     * For storybook to set to finish step, this is to trigger in the story for zonos-checkout-finish
     */
    private setToFinishStep;
    private fetchCheckoutSession;
    /**
     * Check if stripe payment intent is succeeded or in a good state to move forward
     */
    private checkStripePaymentIntentStatus;
    private initInvoiceCart;
    private toggleLanguageDialog;
    private handleStripePaymentContinue;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
