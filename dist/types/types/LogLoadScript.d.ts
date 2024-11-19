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
export {};
