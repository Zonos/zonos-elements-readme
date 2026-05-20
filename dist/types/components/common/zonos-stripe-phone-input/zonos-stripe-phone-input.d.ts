import { type EventEmitter } from '../../../stencil-public-runtime';
import type { CountryFields } from "../../../types/CountryFields";
import type { CountryCode } from "../../../types/generated/graphql.internal.types";
import type { GenericZonosSettings } from "../../../types/utils/ZonosSettings";
export declare class ZonosStripePhoneInput {
    el: HTMLZonosStripePhoneInputElement;
    private inputRef?;
    /**
     * The phone number formatter
     */
    private asYouType;
    private inputId;
    /**
     * Inherited attributes from the host element
     */
    private inheritedAttributes;
    /**
     * The autoComplete attribute for the phone input
     */
    autoComplete: string;
    /**
     * Available country options for the select dropdown
     */
    countryOptions: GenericZonosSettings['countryFields'] | null;
    /**
     * Whether the input is disabled
     */
    disabled: boolean;
    /**
     * Error message to display
     */
    error?: string;
    /**
     * Label text for the input
     */
    inputLabel?: string;
    /**
     * Override the primary color
     */
    overridePrimaryColor?: string;
    /**
     * Override the secondary color
     */
    overrideSecondaryColor?: string;
    /**
     * Current value of the phone input
     */
    inputValue?: string;
    /**
     * The country code of the phone input
     */
    countryCode: CountryCode | null;
    /**
     * Minimum width of the phone input
     */
    minWidth?: string;
    selectedCountry: CountryFields | undefined;
    phoneNumber: string;
    isFocused: boolean;
    isSelectOpen: boolean;
    /**
     * Emitted when the country or phone number changes
     */
    inputValueChange: EventEmitter<{
        countryCode: CountryCode | null;
        isEmpty: boolean;
        phoneNumber: string;
        valid: boolean;
        wrongFormat: boolean;
    }>;
    onCountryOptionsChange(): void;
    onSelectedCountryChange(): void;
    onPhoneNumberChange(): void;
    private validatePhoneNumber;
    /**
     * Update the phone formatter to use the new country code
     */
    private updatePhoneFormatter;
    private handleCountryChange;
    private handlePhoneChange;
    private handleFocus;
    private handleBlur;
    private isCountryCode;
    private initPhoneNumberValue;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
