export type SpinnerColor = 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'black' | 'white';
export declare class ZonosSpinner {
    /**
     * The size of the spinner
     * @default 32
     */
    size: number;
    /**
     * Color of the spinner
     */
    spinnerColor?: SpinnerColor;
    el: HTMLZonosSpinnerElement;
    render(): any;
}
