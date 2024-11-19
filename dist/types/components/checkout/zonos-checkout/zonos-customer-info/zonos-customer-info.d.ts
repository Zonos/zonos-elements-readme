import { type EventEmitter } from '../../../../stencil-public-runtime';
import { type StripeStoreContactOption } from "../../../store/checkout/stripe";
import { containsNonLatinChars } from "../../../utils/containsNonLatinChars";
export declare class ZonosCustomerInfo {
    el: HTMLZonosCustomerInfoElement;
    /**
     * Whether or not the continue button is loading
     */
    continueLoading: boolean;
    /**
     * Whether or not the checkout is in mobile mode
     */
    submitBtnType?: HTMLZonosButtonElement['variant'];
    /**
     * Submit button main color
     */
    submitBtnColor?: string;
    /**
     * Whether or not the dialog is open
     */
    isMobile: boolean;
    /**
     * Default address to use for the checkout (preview mode)
     */
    defaultAddress: StripeStoreContactOption | null;
    /**
     * Event to emit when the continue button is clicked
     */
    continueClicked: EventEmitter<void>;
    /**
     * Due to Stripe's validation difficulties, we need to show a banner when users hasn't filled out the form correctly but clicked continue
     */
    showErrorBanner: boolean;
    shippingCountry: string;
    isCheckingForRestrictedItems: boolean;
    /**
     * Whether or not the address is being validated
     */
    isValidatingAddress: boolean;
    /**
     * Whether or not the shipping address contains invalid characters
     */
    invalidShippingCharacterList: ReturnType<typeof containsNonLatinChars> | null;
    /**
     * Whether or not the shipping address contains invalid characters
     */
    invalidBillingCharacterList: ReturnType<typeof containsNonLatinChars> | null;
    /**
     * Handler for the dialog close button
     */
    openAddressValidationDialog: boolean;
    /**
     * Handler for the email error state
     */
    isEmailError: boolean;
    private checkInvalidCharacters;
    /**
     * Handler for invalid characters in the address
     */
    private handleInvalidCharacters;
    private transformTranslatedAddressToStripeEvent;
    /**
     * handler for continue button click
     */
    private continueClickHandler;
    private handleValidate;
    private handleEmailValidation;
    private prepareAddressObject;
    render(): any;
}
