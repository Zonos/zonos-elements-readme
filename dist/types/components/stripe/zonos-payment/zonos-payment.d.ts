import type { Stripe, StripeElements } from '@stripe/stripe-js';
export declare class ZonosPayment {
    /**
     * The title text for the authentication element
     */
    titleText?: string;
    stripe: Stripe | null;
    stripeElements: StripeElements | null;
    el: HTMLZonosPaymentElement;
    isPaymentInfoFilled: boolean;
    private trackingSent;
    watchIsPaymentInfoFilled(): void;
    watchInitStripe(): Promise<void>;
    componentDidLoad(): void;
    render(): any;
}
