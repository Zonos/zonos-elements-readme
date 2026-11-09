import { type EventEmitter } from '../../../stencil-public-runtime';
export declare class ZonosAirwallexPayment {
    private element;
    private storeUnsubscribeList;
    /** Client secret currently being mounted, to avoid overlapping mounts. */
    private mountingClientSecret;
    el: HTMLZonosAirwallexPaymentElement;
    /**
     * Whether the SDK failed to load or the element failed to mount.
     */
    hasError: boolean;
    /**
     * Mirror of the store client secret so the element (re)mounts once it becomes
     * available. The client secret is fetched asynchronously and is usually not yet
     * set when this component first mounts.
     */
    clientSecret: string | null;
    /**
     * Emitted when the Airwallex payment intent is confirmed successfully.
     */
    airwallexPaymentSuccess: EventEmitter<void>;
    /**
     * Emitted when the Airwallex payment fails.
     */
    airwallexPaymentError: EventEmitter<void>;
    /**
     * (Re)mount the payment element whenever the client secret becomes available
     * or changes.
     */
    clientSecretWatcher(): void;
    /**
     * Build the full set of drop-in options. The SDK's `element.update` requires the
     * first argument to contain the most up-to-date version of everything that was
     * originally passed to `createElement`, so both calls share this.
     */
    private getDropInOptions;
    private mountPaymentElement;
    /**
     * Update the mounted element's locale whenever the shopper changes language.
     */
    private localeChangeHandler;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
