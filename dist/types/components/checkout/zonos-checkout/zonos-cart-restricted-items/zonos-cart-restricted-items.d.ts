export declare class ZonosCartRestrictedItems {
    /**
     * This is to hide the section when the parent collapse on mobile
     */
    hide: boolean;
    errorImages: string[];
    internalCollapsed: boolean;
    /**
     * Should do something after the component is loaded
     */
    firstRender: boolean;
    componentDidLoad(): void;
    render(): any;
}
