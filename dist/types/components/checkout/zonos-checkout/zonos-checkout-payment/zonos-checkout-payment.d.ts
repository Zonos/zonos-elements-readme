import { type EventEmitter } from '../../../../stencil-public-runtime';
export declare class ZonosCheckoutPayment {
    /**
     * Error occurred during payment
     */
    paymentError: boolean;
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
     * Event to emit when the continue button is clicked
     */
    continueClicked: EventEmitter<void>;
    /**
     * Show error banner when the form is not complete, and user clicks on `Submit` button
     * @default false
     */
    showErrorBanner: boolean;
    private handleValidate;
    /**
     * handler for continue button click
     */
    private continueClickHandler;
    private copyCardToClipboard;
    render(): any;
}
