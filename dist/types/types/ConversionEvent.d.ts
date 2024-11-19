import type { CountryCode } from "./index";
export type ConversionEvent = 'checkout_open' | 'checkout_customerInfoCompleted' | 'checkout_shippingInfoCompleted' | 'checkout_paymentInfoCompleted' | 'checkout_orderCompleted';
export type ConversionEventRequest = {
    checkoutSessionId: string;
    countryCode: CountryCode | null;
    eventName: ConversionEvent;
    metadata?: Record<string, unknown>;
    organizationId: string;
};
export type ConversionEventResponse = {
    message: string;
};
