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
    /**
     * EU 3-EUR cutover (05CHECK-893): for EU remittance quotes that we keep as DAP
     * (see [[isEuDapRemittance]]), taxes and fees are included in the checkout
     * total while duties are paid upon delivery. Returns the foreign (presentment)
     * estimates needed for the dedicated message, or `null` when the selected
     * quote isn't this case.
     */
    private getEuDapDetails;
    render(): any;
}
