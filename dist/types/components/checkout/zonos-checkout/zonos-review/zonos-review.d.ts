export declare class ZonosReview {
    /**
     * Whether or not the component is being rendered with mobile styles
     */
    mobile: boolean;
    /**
     * Whether or not to show the collapse icon
     * This is controled from the collapsed state of the zonos-collapse component
     * to show the collapse icon
     */
    collapsed: boolean;
    isMobile: boolean;
    handleWindowResize(): void;
    componentWillLoad(): void;
    render(): any;
}
