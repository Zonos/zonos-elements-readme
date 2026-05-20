export declare class ZonosSkeleton {
    /**
     * The width of the skeleton
     * @default '100%'
     */
    skeletonWidth: string;
    /**
     * The height of the skeleton
     * @default '14px'
     */
    skeletonHeight?: string;
    /**
     * Callback for when the skeleton is dismissed. Also determines if dismiss icon shown.
     */
    dismissHandler?: () => void;
    render(): any;
}
