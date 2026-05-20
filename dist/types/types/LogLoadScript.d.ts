import type { FallBackApiType } from "../components/utils/getNextFallbackApi";
type LoadEventName = 'vercel' | 'jsdelivr' | 'unpkg' | 'cdnjs';
export type LogLoadScriptRequest = {
    cache: 'hit' | 'miss';
    cdnLoadTime?: number;
    eventName: LoadEventName;
    href: string;
    loadTime: number;
    metadata: Record<string, unknown>;
    scriptLoadUrl: string;
    storeId: number;
};
/**
 * @deprecated Use LogBulkLoadRequestPayload instead
 */
export type LogLegacyBulkLoadRequestPayload = LogLoadScriptRequest[];
export type LogBulkLoadRequestPayload = {
    data: {
        apiType: FallBackApiType;
        connectionType?: string;
        href: string;
        isHostedCheckout: boolean;
        isMobile: boolean;
        loadTimeBrowserApi: number;
        loadTimeInternal: number;
        loadTimeTotal: number;
        metadata: Record<string, unknown>;
        screenHeight: number;
        screenWidth: number;
        userAgent: string;
    }[];
    storeId: number;
};
export {};
