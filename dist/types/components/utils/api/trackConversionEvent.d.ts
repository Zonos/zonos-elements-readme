import type { ConversionEvent } from "../../../types/ConversionEvent";
export declare const trackConversionEvent: (eventName: ConversionEvent, metadata?: Record<string, unknown>) => Promise<void>;
