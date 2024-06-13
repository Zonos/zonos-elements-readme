export declare class ZonosCountrySelect {
    /**
     * Function to close the country select
     * @default () => {}
     */
    handleOnClose: () => void;
    inputValue: string;
    ele: HTMLZonosCountrySelectElement;
    private countrySelected;
    private handleInputChange;
    componentDidRender(): void;
    render(): any;
}
