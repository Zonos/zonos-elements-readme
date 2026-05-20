export declare class ZonosLoadingOverlay {
    /**
     * Whether or not the overlay is open
     * @default false
     */
    open: boolean;
    /**
     * Spinner color (optional)
     */
    spinnerColor?: 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'black' | 'white';
    /**
     * Spinner size (optional, default 40)
     */
    size: number;
    render(): any;
}
