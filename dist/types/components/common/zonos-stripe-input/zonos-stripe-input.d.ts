/**
 * This component is input that has similar style to Stripe since we will use it with other Stripe elements when we don't want to use Link authentication element
 */
export declare class ZonosStripeInput {
    el: HTMLZonosStripeInputElement;
    /**
     * Inherited attributes from the host element
     */
    private inheritedAttributes;
    private inputId;
    /**
     * Name of the input
     */
    name?: string;
    /**
     * Autocomplete attribute for the input
     */
    autoComplete?: string;
    /**
     * Value of the stripeInput
     */
    inputValue: string;
    /**
     * Input label
     */
    inputLabel: string;
    /**
     * Primary color to override primary color from appearance primary color in setting.
     */
    overridePrimaryColor?: string;
    /**
     * Secondary color to override secondary color from appearance secondary color in setting
     */
    overrideSecondaryColor?: string;
    /**
     * Disables the input
     */
    isDisabled: boolean;
    /**
     * Error state of the input
     */
    isError: boolean;
    /**
     * Error message of the input
     */
    error?: string;
    /**
     * Placeholder for the input
     */
    inputPlaceholder: string;
    /**
     * The value of the input.
     */
    value: string;
    /**
     * Event to emit when input value changes
     */
    private inputChange;
    /**
     * Whether the input is required
     */
    required?: boolean;
    internalValue: string;
    onInputValueChange(newValue: string): void;
    onValueChange(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
