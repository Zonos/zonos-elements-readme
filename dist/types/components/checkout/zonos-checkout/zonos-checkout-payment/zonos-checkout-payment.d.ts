import { type EventEmitter } from '../../../../stencil-public-runtime';
export declare class ZonosCheckoutPayment {
    ele: HTMLZonosCheckoutPaymentElement;
    /**
     * Whether or not the checkout is in mobile mode
     */
    submitBtnType?: HTMLZonosButtonElement['variant'];
    /**
     * Whether or not the continue button is loading
     */
    continueLoading: boolean;
    /**
     * Submit button main color
     */
    submitBtnColor?: string;
    /**
     * Whether or not the checkout is in mobile mode
     */
    isMobile: boolean;
    /**
     * Primary color to override primary color from appearance primary color in setting.
     */
    overridePrimaryColor?: string;
    /**
     * Event to emit when the continue button is clicked
     */
    continueClicked: EventEmitter<void>;
    /**
     * Event to emit when the paypal session failed
     */
    paypalSessionFailed: EventEmitter<void>;
    /**
     * Event to emit when the paypal session is done
     */
    paypalSessionDone: EventEmitter<string>;
    /**
     * Show error banner when the form is not complete, and user clicks on `Submit` button
     * @default false
     */
    showErrorBanner: boolean;
    /**
     * Show payment error banner when the payment is failed
     */
    hasStripePaymentError: boolean;
    /**
     * Error message when the staging order creation is failed
     */
    stagingOrderCreateErrorMessage: string;
    /**
     * Internal state to handle continue loading
     */
    internalContinueLoading: boolean;
    continueLoadingWatcher(): void;
    stripePaymentErrorWatcher(): void;
    private handleValidate;
    /**
     * handler for continue button click
     */
    private continueClickHandler;
    private copyCardToClipboard;
    private placeTestOrder;
    render(): any;
}
