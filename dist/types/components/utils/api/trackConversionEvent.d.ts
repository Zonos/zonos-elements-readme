type ConversionEvent = 'checkout_open' | 'checkout_customerInfoCompleted' | 'checkout_shippingInfoCompleted' | 'checkout_paymentInfoCompleted' | 'checkout_orderCompleted';
export declare const trackConversionEvent: (eventName: ConversionEvent, metadata?: Record<string, unknown>) => Promise<void>;
export {};
