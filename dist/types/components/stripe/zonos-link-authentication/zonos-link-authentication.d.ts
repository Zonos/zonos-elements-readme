import { type EventEmitter } from '../../../stencil-public-runtime';
import type { Stripe } from '@stripe/stripe-js';
export declare class ZonosLinkAuthentication {
    private storeUnsubscribeList;
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
    isStagingMode: boolean;
    clientSecret: string;
    retriesInitializeLink: number;
    el: HTMLZonosLinkAuthenticationElement;
    watchIsStagingMode(): void;
    watchInitStripe(): Promise<void>;
    private setCustomEmailInputToLinkEvent;
    private handleNormalEmailInput;
    watchDefaultEmail(newDefaultEmail: string | null, oldDefaultEmail: string | null): void;
    disconnectedCallback(): void;
    componentDidLoad(): void;
    render(): any;
}
