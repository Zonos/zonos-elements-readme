type LoadEventName = 'vercel' | 'jsdelivr';
export type LogLoadScriptRequestBody = {
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
