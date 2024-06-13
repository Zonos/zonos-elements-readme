export declare class ZonosCollapse {
    /**
     * Collapsed state of the element
     */
    collapsed: boolean;
    /**
     * Collapsed size when collapsed
     */
    collapseSize: number;
    el: HTMLZonosCollapseElement;
    height: number;
    iframe: HTMLIFrameElement | null;
    private getElementHeight;
    componentDidLoad(): void;
    componentDidRender(): void;
    render(): any;
}
