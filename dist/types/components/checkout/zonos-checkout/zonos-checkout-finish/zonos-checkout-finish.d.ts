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
    private pullOrder;
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
    private handleSuccessBehavior;
    private getPullOrder;
    private useOverrideSuccessNotification;
    private checkStripePaymentStatus;
    private checkStagingOrderStatus;
    private checkPaypalPaymentStatus;
    private closeClickHandler;
    private saveOrderIdForDuplicationIssue;
    componentDidLoad(): void;
    render(): any;
}
