import { type EventEmitter } from '../../../../stencil-public-runtime';
import type { StripeAddressElementChangeEvent } from '@stripe/stripe-js';
import { type StripeStoreContactOption } from "../../../store/checkout/stripe";
import type { MissingShippingField } from "../../../utils/checkout/getMissingRequiredShippingFields";
import { containsNonLatinChars } from "../../../utils/containsNonLatinChars";
import type { CountryCode } from "../../../../types/generated/graphql.internal.types";
import type { InputFieldLabel } from "../../../../types/InputFieldLabel";
export declare class ZonosCustomerInfo {
    private storeUnsubscribeList;
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
    defaultAddress: StripeStoreContactOption[];
    /**
     * Whether to override custom address form to be always visible
     */
    shouldUseCustomAddressFormOverride: boolean;
    /**
     * Event to emit when the continue button is clicked
     */
    continueClicked: EventEmitter<{
        billingAddress: StripeAddressElementChangeEvent | null;
        sameAsBilling: boolean;
        shippingAddress: StripeAddressElementChangeEvent | null;
    }>;
    /**
     * Trigger continue button click even though fields're not validated for testing purposes
     */
    testContinueClicked?: EventEmitter<{
        billingAddress: StripeAddressElementChangeEvent | null;
        sameAsBilling: boolean;
        shippingAddress: StripeAddressElementChangeEvent | null;
    }>;
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
     * Which tax id control the current error belongs on
     */
    taxIdErrorField: 'type' | 'value' | '';
    /**
     * Whether or not the tax id input is invalid
     */
    taxIdErrorMessage: string;
    /**
     * Whether or not the short address code input is invalid
     */
    shortAddressCodeErrorMessage: string;
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
     * Whether the "complete your shipping address" dialog is open. Shown when Stripe reports
     * the address complete but Zonos still needs fields Link didn't provide (e.g. last name).
     */
    openCompletionDialog: boolean;
    /**
     * Zonos-required shipping fields still missing from the selected Stripe address
     */
    missingShippingFields: MissingShippingField[];
    /**
     * Handler for the email error state
     */
    isEmailError: boolean;
    /**
     * Whether or not the custom address form is used
     */
    recordedFormTypeUsed: boolean;
    selectedCountryCode: CountryCode | null;
    genericSettings: import("../../../..").GenericZonosSettings | undefined;
    addressFormRenderType: "stripe" | "zonos";
    exceededCharacterLimitErrorFieldList: {
        addressType: 'shipping' | 'billing';
        fieldLabel: InputFieldLabel;
        value: string;
    }[];
    watchShowErrorBanner(): void;
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
    /**
     * Continue past the customer step once the address is validated and complete. Runs the
     * non-Latin character check (which may open the translate dialog) before emitting.
     */
    private continueAfterValidation;
    private completionSubmitHandler;
    /**
     * Validate the custom address form, turn the flag showError to false if the form is valid, or vice versa
     */
    private validateCustomAddressForm;
    /**
     * Make sure all fields in the address are within the character limit
     */
    private validateAddressLength;
    private handleValidate;
    private handleEmailValidation;
    private prepareAddressObject;
    private renderExceededCharacterLimitError;
    private renderAddressComponent;
    watchShouldEnabledCustomAddress(): void;
    disconnectedCallback(): void;
    componentWillLoad(): void;
    render(): any;
}
