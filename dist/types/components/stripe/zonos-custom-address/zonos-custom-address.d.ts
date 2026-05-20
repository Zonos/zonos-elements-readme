import type { EventEmitter } from '../../../stencil-public-runtime';
import type { ContactOption, Stripe, StripeAddressElementChangeEvent } from '@stripe/stripe-js';
import type { ICountryJson } from "../../../components";
import type { CheckoutAddressService } from "../../utils/iframe/CheckoutAddressService";
import type { CustomAddressErrors } from "../../../types/checkout/form/CustomAddressErrors";
import type { CountryFields } from "../../../types/CountryFields";
export declare class ZonosAddress {
    private onStoreCheckoutSessionIdChangedSubscription;
    el: HTMLZonosCustomAddressElement;
    /**
     * The type of address element to render
     */
    type: 'billing' | 'shipping';
    /**
     * The title text for the address element
     */
    titleText: string;
    /**
     * Default address for stripe
     */
    defaultAddress: ContactOption[];
    /**
     * Error message for tax id input
     */
    taxIdErrorMessage: string;
    /**
     * Error message for short address code input
     */
    shortAddressCodeErrorMessage: string;
    /**
     * Event to emit when address is not containing allowed character sets
     */
    invalidCharacters: EventEmitter<boolean>;
    /**
     * Event to emit when address is changed
     */
    addressChange: EventEmitter<{
        errors: CustomAddressErrors;
        type: 'billing' | 'shipping';
        value: StripeAddressElementChangeEvent;
    }>;
    stripe: Stripe | null;
    /**
     * Check if the address is dirty or not to scroll into view. When the component is mounted, if the data is filled with address line 1, it's considered dirty
     */
    isDirtyAddress: boolean;
    /**
     * Local address event for stripe address element
     */
    isAddressFilled: boolean;
    /**
     * Whether the address line 1 is already entered greater than 3 characters once
     */
    isAddressLine1Entered: boolean;
    /**
     * Address suggestions from google place api
     */
    addressSuggestions: {
        id: string;
        matches: {
            endOffset: number;
            startOffset: number;
        }[];
        place: string;
    }[];
    /**
     * Country fields for the current country
     */
    countryField: CountryFields | null;
    /**
     * Whether to start google place suggestions
     */
    startGooglePlaceSuggestions: boolean;
    /**
     * List of countries to show in the address element
     */
    shipToCountries: {
        label: string;
        value: string;
    }[] | null;
    /**
     * Shipping zones from localization
     */
    shippingZones: ICountryJson | null;
    city: string;
    country: string;
    firstName: string;
    lastName: string;
    line1: string;
    line2: string | null;
    phone: string;
    postalCode: string;
    state: string;
    cityError: string;
    stateError: string;
    postalCodeError: string;
    phoneError: string;
    firstNameError: string;
    lastNameError: string;
    /**
     * Whether the address element is loaded
     */
    isFirstInitialization: boolean;
    /**
     * Address service instance
     */
    addressService: CheckoutAddressService | null;
    /**
     * Local checkout session id to check if the address is filled after checkout is loaded
     */
    checkoutSessionId: string | null;
    /**
     * Whether the suggestion is clicked
     */
    private suggestionClicked;
    /**
     * Check if the tracking event is sent
     */
    private trackingSent;
    /**
     * Google autocomplete overlay is conflict with our button, this is to adjust z index of the autocomplete
     */
    private isAutoCompleteAdjusted;
    /**
     * Unsubscribe function for address suggestions listener
     */
    private onAddressSuggestionsUnsubscribe?;
    /**
     * Unsubscribe function for address selected listener
     */
    private onAddressSelectedUnsubscribe?;
    private getStripeAddressInstance;
    private updateAddressEventData;
    isAddressFilledChanged(): void;
    defaultAddressChanged(newAddress: ContactOption[], oldAddress: ContactOption[]): void;
    private getIsComplete;
    private throttledGetAddressSuggestions;
    private setCustomAddressFormToStripeAddressEventData;
    private isInTaxIdCountry;
    /**
     * Render tax id input based on ship to country code
     */
    private renderTaxIdInput;
    /**
     * Render short address code input based on ship to country code
     */
    private renderShortAddressCodeInput;
    private renderCompanyNameInput;
    private initCountryField;
    private initDefaultCustomAddressForm;
    line1Changed(): void;
    formFieldsChanged(): void;
    private addressSuggestionSelected;
    private setFormValues;
    private getCustomAddressErrors;
    private validate;
    /**
     * Initialize the address suggestions
     */
    private initAddressSuggestions;
    countryChanged(countryCode: string): void;
    shouldEnabledCustomAddressChanged(): void;
    shippingZonesChanged(): void;
    private renderCustomAddressForm;
    private onStoreCheckoutSessionIdChanged;
    disconnectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
