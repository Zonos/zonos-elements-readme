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
    private pullOrder;
    private redirectToUrl;
    /**
     * It would make more sense to have keep shopping button if the success behavior is not redirecting to a different page
     */
    private shouldRenderKeepShoppingButton;
    private handleSuccessBehavior;
    private getPullOrder;
    private useOverrideSuccessNotification;
    private checkStripePaymentStatus;
    private checkPaypalPaymentStatus;
    private closeClickHandler;
    private saveOrderIdForDuplicationIssue;
    componentDidLoad(): void;
    render(): any;
}
