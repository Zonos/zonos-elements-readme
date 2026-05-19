export declare class ZonosStoreCredit {
    el: HTMLZonosStoreCreditElement;
    /**
     * Whether the component is enabled
     */
    enabled: boolean;
    /**
     * Local state for custom amount input
     */
    customAmountInput: string;
    componentWillLoad(): Promise<void>;
    private handleUseStoreCreditChange;
    private handleAmountModeChange;
    private handleCustomAmountChange;
    private handleApplyCustomAmount;
    render(): any;
}
