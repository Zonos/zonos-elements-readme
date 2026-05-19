import { type EventEmitter } from '../../stencil-public-runtime';
export declare class ZonosPaypalPayment {
    private storeUnsubscribeList;
    el: HTMLZonosPaypalPaymentElement;
    /**
     * Event to emit when the paypal session is done
     */
    paypalSessionDone: EventEmitter<{
        orderId: string;
    }>;
    /**
     * Event to emit when the paypal session is failed
     */
    paypalSessionFail: EventEmitter<void>;
    private loadPaypal;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
