export type SelectOption = {
    label: string;
    value: string;
};
export declare class ZonosStripeSelect {
    el: HTMLZonosStripeSelectElement;
    /**
     * Inherited attributes from the host element
     */
    private inheritedAttributes;
    private selectId;
    /**
     * Name of the select
     */
    name?: string;
    /**
     * Selected value of the select
     */
    selectedValue: string;
    /**
     * Select label
     */
    selectLabel: string;
    /**
     * Primary color to override primary color from appearance primary color in setting.
     */
    overridePrimaryColor?: string;
    /**
     * Secondary color to override secondary color from appearance secondary color in setting
     */
    overrideSecondaryColor?: string;
    /**
     * Disables the select
     */
    isDisabled: boolean;
    /**
     * Error state of the select
     */
    isError: boolean;
    /**
     * Error message of the select
     */
    error: string;
    /**
     * Placeholder for the select
     */
    selectPlaceholder: string;
    /**
     * Options for the select. Must be set using a query selector.
     */
    options: SelectOption[];
    /**
     * The autoComplete attribute for the select.
     */
    autoComplete: string;
    /**
     * The value of the select.
     */
    value: string;
    /**
     * Event to emit when select value changes
     */
    private selectChange;
    /**
     * Whether the select is required
     */
    required?: boolean;
    /**
     * Whether the select can be cleared
     */
    isClearable: boolean;
    /**
     * Minimum width of the select
     */
    minWidth?: string;
    internalValue: string;
    internalOptions: SelectOption[];
    onOptionsChange(newValue: SelectOption[]): void;
    onSelectedValueChange(newValue: string): void;
    onValueChange(newValue: string): void;
    private handleNotFoundOption;
    private handleClear;
    componentWillLoad(): void;
    render(): any;
}
