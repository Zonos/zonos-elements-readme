import { type EventEmitter } from '../../../../stencil-public-runtime';
import type { PaymentIntent } from '@stripe/stripe-js';
import type { ZonosOrder } from "../../../../types/checkout/CheckoutConfig";
import type { ElementsUiStyle } from "../../../../types/generated/graphql.internal.types";
export declare class ZonosCheckoutFinish {
    /**
     * The border radius style of the dialog
     */
    borderRadius: ElementsUiStyle;
    /**
     * Force status to test the UI for storybook
     */
    storybookForceStatus?: PaymentIntent['status'];
    /**
     * Override the notification message and title, bypass checking stripe payment status
     *
     */
    overrideNotification?: {
        messages: string[];
        title: string;
        type: 'success' | 'error';
    };
    /**
     * Event to emit when the continue button is clicked
     */
    closeClick: EventEmitter<void>;
    isLoading: boolean;
    notificationType: 'success' | 'error';
    notificationTitle: string;
    notificationMessages: string[];
    notificationActionText: string;
    order: ZonosOrder | null;
    /**
     * Is waiting to redirect to a different page
     */
    isWaitingToRedirect: boolean;
    /**
     * True when we are about to immediately redirect to the merchant's
     * successRedirectUrl (CLOSE_MODAL + successRedirectUrl). Used by the
     * render method to keep the dialog in a loading state instead of briefly
     * showing the success notification before navigation.
     */
    isImmediateRedirecting: boolean;
    private pullOrder;
    /**
     * Metadata for purchase event in GA4
     */
    private buildPurchaseMetadata;
    private redirectToUrl;
    private isRedirectBehavior;
    /**
     * It would make more sense to have keep shopping button if the success behavior is not redirecting to a different page
     */
    private shouldRenderKeepShoppingButton;
    /**
     * Should render close button for redirect behavior when the success behavior is redirecting to a different page or when it's an error screen
     */
    private shouldRenderCloseButtonForRedirectBehavior;
    private redirectToMerchantSuccessPage;
    /**
     * Immediately redirect to the merchant's successRedirectUrl with the
     * zonosCheckoutSessionId query param, without polling for the order. Used
     * by CLOSE_MODAL when a successRedirectUrl is provided, so the merchant
     * can look up the order themselves using that query param. The
     * `zonos` prefix avoids colliding with merchant query params.
     */
    private redirectToCloseModalSuccessPage;
    private handleSuccessBehavior;
    private getPullOrder;
    private useOverrideSuccessNotification;
    private checkStripePaymentStatus;
    private checkStagingOrderStatus;
    private checkPaypalPaymentStatus;
    private checkStoreCreditOrderStatus;
    private closeClickHandler;
    private saveOrderIdForDuplicationIssue;
    componentDidLoad(): void;
    render(): any;
}
