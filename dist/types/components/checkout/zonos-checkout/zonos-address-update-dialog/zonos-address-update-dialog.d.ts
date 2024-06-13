import { type EventEmitter } from '../../../../stencil-public-runtime';
import type { EnteredInfo, TranslatedAddressObject } from "../../../../types/checkout/TranslatedText";
export type SubmitEventData = {
    billingAddress: Record<keyof TranslatedAddressObject, string> | null;
    shippingAddress: Record<keyof TranslatedAddressObject, string>;
};
export declare class ZonosAddressUpdateDialog {
    el: HTMLZonosAddressUpdateDialogElement;
    /**
     * Whether or not the continue button is loading
     */
    continueLoading: boolean;
    /**
     * Whether or not the dialog is loading
     */
    dialogLoading: boolean;
    /**
     * Whether or not the dialog is open
     */
    dialogOpen: boolean;
    /**
     * Button type of the submit button
     */
    submitBtnType?: HTMLZonosButtonElement['variant'];
    /**
     * Button color of the submit button
     */
    submitBtnColor?: string;
    /**
     * Whether or not the dialog is open
     */
    isMobile: boolean;
    /**
     * Shipping address that user has entered
     */
    shippingAddress: EnteredInfo;
    /**
     * Billing address that user has entered (optional if billing is the same as shipping)
     */
    billingAddress: EnteredInfo | null;
    /**
     * Translated address fields that GPT has translated
     */
    translatedShippingAddress: TranslatedAddressObject;
    /**
     * Translated address fields that GPT has translated
     */
    translatedBillingAddress: TranslatedAddressObject;
    /**
     * Close dialog button click
     */
    closeDialog: EventEmitter<void>;
    /**
     * Event to emit when the continue button is clicked
     */
    continueClicked: EventEmitter<SubmitEventData>;
    /**
     * Due to Stripe's validation difficulties, we need to show a banner when users hasn't filled out the form correctly but clicked continue
     */
    showErrorBanner: boolean;
    /**
     * State of shipping address input fields
     */
    translatedShippingAddressState: TranslatedAddressObject;
    /**
     * State of billing address input fields
     */
    translatedBillingAddressState: TranslatedAddressObject;
    watchTranslatedShippingAddress(): void;
    watchTranslatedBillingAddress(): void;
    componentWillLoad(): void;
    /**
     * handler for close button click
     */
    private closeDialogHandler;
    /**
     * Extract value from translated object
     */
    private getTranslatedAddress;
    /**
     * handler for continue button click
     */
    private continueClickHandler;
    /**
     * This function builds a state object for a translated address.
     * It takes the current and translated address as input and returns an object where each field is an object itself.
     * The key of each field's object is the current address's field value and the value is the corresponding translated address's field value.
     *
     * @param {Object} params - The parameters for the function.
     * @param {EnteredInfo} params.currentAddress - The current address information.
     * @param {EnteredInfo} params.translatedAddress - The translated address information.
     *
     */
    private buildTranslateAddressState;
    render(): any;
}
