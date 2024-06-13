import type { EventEmitter } from '../../../stencil-public-runtime';
import type { ContactOption, Stripe } from '@stripe/stripe-js';
export declare class ZonosAddress {
    /**
     * The type of address element to render
     */
    type: 'billing' | 'shipping';
    /**
     * The title text for the address element
     */
    titleText: string;
    /**
     * Default address for stripe
     */
    defaultAddress: ContactOption | null;
    /**
     * Event to emit when address is not containing allowed character sets
     */
    invalidCharacters: EventEmitter<boolean>;
    stripe: Stripe | null;
    /**
     * Check if the address is dirty or not to scroll into view. When the component is mounted, if the data is filled with address line 1, it's considered dirty
     */
    isDirtyAddress: boolean;
    el: HTMLZonosAddressElement;
    private getStripeAddressInstance;
    private updateAddressEventData;
    private updateAddressElement;
    watchInitStripe(): Promise<void>;
    disconnectedCallback(): void;
    componentDidLoad(): void;
    render(): any;
}
