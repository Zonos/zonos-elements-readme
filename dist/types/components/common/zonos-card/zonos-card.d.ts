export declare class ZonosCard {
    /**
     * The actions to display in the header of the card
     */
    actions?: HTMLElement;
    /**
     * The actions to display in the footer of the card
     */
    footerActions?: HTMLElement;
    /**
     * The content to display in the footer of the card
     */
    footerContent?: HTMLElement;
    /**
     * The height of the footer in pixels
     */
    footerHeight?: number;
    /**
     * The label to display in the header of the card
     */
    label?: HTMLElement;
    /**
     * The spacing to apply between elements in the card
     */
    spacing?: string;
    render(): any;
}
