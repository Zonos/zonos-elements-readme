import type { EventEmitter } from '../../../stencil-public-runtime';
import type { ContactOption, Stripe } from '@stripe/stripe-js';
export declare class ZonosAddress {
    private storeUnsubscribeList;
    /**
     * Google autocomplete overlay is conflict with our button, this is to adjust z index of the autocomplete
     */
    private isAutoCompleteAdjusted;
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
    defaultAddress: ContactOption[];
    /**
     * Error message for tax id input
     */
    taxIdErrorMessage: string;
    /**
     * Error message for short address code input
     */
    shortAddressCodeErrorMessage: string;
    /**
     * Event to emit when address is not containing allowed character sets
     */
    invalidCharacters: EventEmitter<boolean>;
    stripe: Stripe | null;
    /**
     * Check if the address is dirty or not to scroll into view. When the component is mounted, if the data is filled with address line 1, it's considered dirty
     */
    isDirtyAddress: boolean;
    /**
     * Local address event for stripe address element
     */
    isAddressFilled: boolean;
    /**
     * Local checkout session id to check if the address is filled after checkout is loaded
     */
    checkoutSessionId: string | null;
    /**
     * Track previous country and postal code to detect changes
     */
    prevCountry: string | null;
    prevPostalCode: string | null;
    /**
     * Event to emit when tax id is changed
     */
    taxIdChanged: EventEmitter<string>;
    /**
     * Check if the tracking event is sent
     */
    private trackingSent;
    el: HTMLZonosAddressElement;
    private prefetchLandedCost;
    private getStripeAddressInstance;
    private updateAddressEventData;
    isAddressFilledChanged(): void;
    private updateAddressElement;
    watchInitStripe(): Promise<void>;
    defaultAddressChanged(newAddress: ContactOption[], oldAddress: ContactOption[]): void;
    private isInTaxIdCountry;
    /**
     * Render tax id input based on ship to country code
     */
    private renderTaxIdInput;
    /**
     * Render short address code input based on ship to country code
     */
    private renderShortAddressCodeInput;
    private renderCompanyNameInput;
    disconnectedCallback(): void;
    componentDidLoad(): void;
    render(): any;
}
