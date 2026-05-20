import type { PaymentIntent, Stripe } from '@stripe/stripe-js';
import { type CartItem } from "../../store/checkout/cart";
import { type CustomerProfile, type StripeStoreContactOption } from "../../store/checkout/stripe";
import { type AppearanceConfig } from "../../store/zonosStore";
import type { OrderPlacedInfo } from "../../../types/checkout/OrderPlacedInfo";
import type { CheckoutSessionDetailsFragment } from "../../../types/generated/graphql.internal.types";
export declare class ZonosCheckout {
    private storeUnsubscribeList;
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
     * Hidden mode to hide the checkout modal in preview mode
     */
    hiddenMode: boolean;
    /**
     * Flag to determine if the checkout is on mobile
     */
    mobile: boolean;
    /**
     * Override staging mode. Solely use for storybook
     */
    overrideStagingMode?: boolean;
    /**
     * Default address to use for the checkout (preview mode)
     */
    defaultAddress: StripeStoreContactOption[] | StripeStoreContactOption;
    /**
     * Force dialog to be open
     */
    forceDialogOpen: boolean;
    defaultAddressParams: StripeStoreContactOption[];
    /**
     * List of addresses from authenticated checkout customer
     */
    defaultCustomerProfileAddress: StripeStoreContactOption[];
    /**
     * Customer profile of the authenticated checkout user
     */
    customerProfile: CustomerProfile | null;
    /**
     * Whether or not the dialog is open
     */
    open: boolean;
    /**
     * Whether or not the overlay is loading (for waiting for fetching test variance)
     */
    isOverlayLoading: boolean;
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
     * Pay in USD confirm dialog open state
     */
    payInUsdConfirmDialogOpen: boolean;
    /**
     * Error message from onInventoryCheck callback
     */
    inventoryCheckErrorMessage: string | null;
    /**
     * Placed order info to show the confirm dialog to the user
     */
    placedOrderInfo: OrderPlacedInfo | null;
    /**
     * Whether or not the fedex shipping dialog should be shown
     */
    shouldShowFedexShippingConsentDialog: boolean;
    /**
     * Whether or not the domestic checkout dialog should be shown
     */
    detectedDomesticCheckoutDialogOpen: boolean;
    /**
     * Whether or not the redirect to domestic checkout dialog should be shown.
     * This is for BigCommerce stores when the user selects a domestic country in the international checkout.
     */
    redirectToDomesticCheckoutDialogOpen: boolean;
    /**
     * Whether or not the confirm dialog for a logged-in BigCommerce user with a
     * detected international default shipping address is shown. The user must
     * choose to either continue to the international checkout or stay on the
     * BigCommerce native checkout (and select a domestic address there).
     */
    loggedInIntlAddressConfirmDialogOpen: boolean;
    /**
     * Resolver for the promise returned to
     * `watchImmediateBigcommerceDomesticCheckoutRedirect` while we wait for
     * the user's choice in `loggedInIntlAddressConfirmDialogOpen`.
     */
    private loggedInIntlAddressResolver;
    /**
     * Client secret value
     */
    clientSecret: string | null;
    /**
     * Client secret value of customer session (use to load saved payment method and render saved consent)
     */
    stripeCustomerSessionClientSecret: string | null;
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
     * Check if stripe payment intent is succeeded or in a good state to move forward
     */
    private checkStripePaymentIntentStatus;
    private buildCartAndInit;
    private reloadCheckoutSession;
    private handleOrderDuplication;
    private recordCheckoutInfo;
    private confirmProceedWithOrderDuplication;
    private markTheSessionAsAbandonedCart;
    private handleCancelOrderDuplication;
    private initializeTestKeys;
    private shouldAllowHostedVsNativeTest;
    private registerTestHostedVsNative;
    private handleHostedVsNative;
    private attachCheckout;
    private formatDate;
    private formatTime;
    appearanceSettingsOverrideChanged(): void;
    private useShippingDataFromCreateCartId;
    /**
     * Set default address from query param if it's valid
     */
    private useLegacyQueryParams;
    private applyPrefillAddress;
    overrideStagingModeChanged(): void;
    /**
     * Setup all of the event listeners for the component on first load
     */
    init(): Promise<void>;
    /**
     * After BigCommerce's `/login.php` round trip, the shopper lands back on
     * `cart.php?isInternationalCheckout=true`. Detect the flag, strip it from
     * the URL (so refreshing doesn't re-open the dialog), then fire the
     * international-checkout trigger once three preconditions are all met:
     *  1. Hello localization finished loading (`localizationLoaded`).
     *  2. A country code is selected — otherwise `buildCartDetail` runs
     *     without a `countryCode` / `currencyCode` and never builds a cart.
     *  3. The hidden trigger button has mounted.
     *
     * Without the first two gates we race Hello's own init and the click
     * fires against a half-initialized store, which is what happens when
     * the shopper refreshes back into cart.php straight from the login
     * round trip.
     */
    private handleBigcommerceInternationalResumeFlag;
    /**
     * For storybook to set to finish step, this is to trigger in the story for zonos-checkout-finish
     */
    setToFinishStep(forcePaymentStatus?: PaymentIntent['status']): Promise<void>;
    /**
     * For usage in storybook for a mocked flow.
     */
    mockCheckoutSession(session: CheckoutSessionDetailsFragment): Promise<void>;
    /**
     * Trigger the checkout international button
     */
    triggerCheckoutInternational(): Promise<void>;
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
    handleCustomerProfileChange(): void;
    handleClientSecretChange(): void;
    handleOpenChange(): void;
    private getBaseCurrencySettlementInfo;
    /**
     * For BigCommerce stores with a logged-in shopper, seed
     * `defaultCustomerProfileAddress` from the BC Storefront API so the
     * `zonos-address` picker prefills the shopper's saved address book without
     * forcing them to retype anything. Skips when an address has already been
     * prefilled by another path (Stripe customer profile, merchant-provided
     * `defaultAddress`, or the BC redirect's session-storage handoff).
     */
    private prefillBigCommerceCustomerAddresses;
    private getDefaultAddress;
    /**
     * Message listener from the hosted checkout tab just openned from the hosted vs native variant test
     */
    private handleHostedOpenWindowCallback;
    /**
     * Capture params from the url and set to the store when it's redirected from hosted checkout url for variant test
     */
    private captureParamsRedirectedForVariantTest;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
