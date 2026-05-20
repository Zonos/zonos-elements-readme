export declare class ZonosCountrySelect {
    /**
     * Function to close the country select
     * @default () => {}
     */
    handleOnClose: () => void;
    inputValue: string;
    ele: HTMLZonosCountrySelectElement;
    private inputRef;
    private countrySelected;
    private handleInputChange;
    componentDidRender(): void;
    render(): any;
}
