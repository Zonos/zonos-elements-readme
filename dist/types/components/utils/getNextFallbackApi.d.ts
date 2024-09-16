declare const fallbackApiType: readonly ["cloudflare", "vercel"];
export declare const MAIN_BASE_API_TYPE: "cloudflare";
export type FallBackApiType = (typeof fallbackApiType)[number];
export declare const fallbackApiList: Record<FallBackApiType, string>;
export declare const MAIN_BASE_API: string;
/**
 * Next available fallback api type
 */
export declare const getNextFallbackApiType: (currentApiType?: FallBackApiType) => "cloudflare" | "vercel" | null;
export {};
