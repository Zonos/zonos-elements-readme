export declare class ZonosCartSubtotal {
    /**
     * Button type of the submit button
     */
    submitBtnType?: HTMLZonosButtonElement['variant'];
    /**
     * Button color of the submit button
     */
    submitBtnColor?: string;
    /**
     * Loading state for apply promo code button
     */
    loading: boolean;
    private getInclusivePriceType;
    /**
     * Render a single merchant-provided message line. Segments come from
     * [[parseLinkedText]] and are emitted as VNodes (never `innerHTML`) so
     * untrusted strings can't inject HTML.
     */
    private renderMessageLine;
    private renderCustomMessage;
    private getCartSubtotalSubtitle;
    render(): any;
}
