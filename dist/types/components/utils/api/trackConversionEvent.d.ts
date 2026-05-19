import type { ConversionEvent } from "../../../types/ConversionEvent";
export declare const trackConversionEvent: ({ checkoutSessionId, eventName, metadata, }: {
    checkoutSessionId: string | null;
    eventName: ConversionEvent;
    metadata?: Record<string, unknown>;
}) => Promise<void>;
