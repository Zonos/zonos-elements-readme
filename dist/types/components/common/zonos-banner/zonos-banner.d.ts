export type BannerIntent = 'default' | 'error' | 'success' | 'warning' | 'info';
export declare class ZonosBanner {
    /**
     * Whether or not the banner is bold
     */
    bannerTitle?: string;
    /**
     * Intent of the banner (success, warning, error)
     */
    intent?: BannerIntent;
    /**
     * Whether or not the button has content
     */
    hasContent: boolean;
    /**
     * Detect if the button has an content
     */
    private handleSlotChange;
    render(): any;
}
