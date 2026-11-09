import type { PaymentIntent, Stripe } from '@stripe/stripe-js';
export declare class ZonosCollect {
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
    collapseReview: boolean;
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
     * Confirmation id for collect finish component
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
     * Determine which payment processor the collect session uses and initialize it.
     *
     * The checkout session returns the `paymentProcessor` (05CHECK-860). When it is
     * `AIRWALLEX` we initialize the Airwallex SDK and render only the Airwallex
     * payment element. Otherwise we fall back to the Stripe flow, which renders the
     * Stripe billing info section + payment.
     *
     * If the Airwallex session already has a client secret but is not yet completed
     * and has no order attached, we verify the live payment intent status first — if
     * the payment already went through (e.g. the customer returned after a redirect)
     * we jump straight to the finish step instead of rendering the payment form.
     */
    private initPaymentProcessor;
    /**
     * Check if stripe payment intent is succeeded or in a good state to move forward
     */
    private checkStripePaymentIntentStatus;
    /**
     * Recover the collect flow when updating the checkout session failed — which
     * happens once the session is already completed/paid (e.g. the customer already
     * submitted payment, so the update request is rejected). Without this we would
     * drop straight to the error screen even though the payment went through.
     *
     * Fetches the session and, if it is completed or already has an order attached,
     * jumps to the finish step. Otherwise it verifies the live payment intent status
     * for the session's processor (Stripe or Airwallex) and routes to finish when
     * the payment has gone through.
     *
     * @returns `true` when it routed to the finish step, `false` when the caller
     * should treat the session as invalid.
     */
    private recoverCompletedCollectSession;
    private initCollectCart;
    private toggleLanguageDialog;
    private handleStripePaymentContinue;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
