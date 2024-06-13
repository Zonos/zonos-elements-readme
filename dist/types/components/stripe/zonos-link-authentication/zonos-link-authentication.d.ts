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
    stripe: Stripe | null;
    el: HTMLZonosLinkAuthenticationElement;
    watchInitStripe(): void;
    componentDidLoad(): void;
    render(): any;
}
