import type { CountryCode } from "./index";
export type ConversionEvent = 'checkout_open' | 'checkout_customerInfoFilled' | 'checkout_customerInfoCompleted' | 'checkout_quoteReceived' | 'checkout_shippingInfoCompleted' | 'checkout_paymentInfoFilled' | 'checkout_paymentInfoCompleted' | 'checkout_orderCompleted';
export type ConversionEventRequest = {
    checkoutSessionId: string;
    countryCode: CountryCode | null;
    eventCreated: number;
    eventName: ConversionEvent;
    metadata?: Record<string, unknown>;
    organizationId: string;
};
export type ConversionEventResponse = {
    message: string;
};
