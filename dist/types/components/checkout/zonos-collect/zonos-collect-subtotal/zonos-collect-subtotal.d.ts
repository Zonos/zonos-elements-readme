export declare class ZonosCollectSubtotal {
    private storeUnsubscribeList;
    subtotals: {
        [key: string]: number;
    };
    private initSubtotalData;
    disconnectedCallback(): void;
    componentWillLoad(): void;
    render(): any;
}
