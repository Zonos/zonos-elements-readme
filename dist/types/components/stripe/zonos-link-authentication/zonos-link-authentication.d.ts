import { type EventEmitter } from '../../../stencil-public-runtime';
import type { Stripe } from '@stripe/stripe-js';
export declare class ZonosLinkAuthentication {
    /**
     * The title text for the authentication element
     */
    titleText: string;
    /**
     * Default email for stripe
     */
    defaultEmail: string | null;
    /**
     * Email error text to dispaly
     */
    isEmailError: boolean;
    /**
     * Event emitted when the authentication element changes
     */
    linkAuthenticationChange?: EventEmitter<void>;
    stripe: Stripe | null;
    el: HTMLZonosLinkAuthenticationElement;
    watchInitStripe(): void;
    componentDidLoad(): void;
    render(): any;
}
