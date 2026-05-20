import { type EventEmitter } from '../../../../stencil-public-runtime';
import type { PaymentIntent } from '@stripe/stripe-js';
import type { ZonosOrder } from "../../../../types/checkout/CheckoutConfig";
import type { ElementsUiStyle } from "../../../../types/generated/graphql.internal.types";
export declare class ZonosCollectFinish {
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
     * The confirmation id for the collect order
     */
    confirmationId: string | null;
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
    private handleSuccessBehavior;
    private getPullOrder;
    private checkStripePaymentStatus;
    private checkStagingOrderStatus;
    private checkPaypalPaymentStatus;
    private getReceiptUrl;
    componentDidLoad(): void;
    render(): any;
}
