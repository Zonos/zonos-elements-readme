export declare const fallbackList: readonly ["jsdelivr", "cdnjs", "unpkg", "vercel"];
export type InjectScriptType = (typeof fallbackList)[number];
export declare const MAIN_LOAD_CDN_TYPE: InjectScriptType;
/**
 * Get the next cdn type in the fallback list
 * @param currentCdnType The current cdn type that want to get the next fallback url
 */
export declare const getNextFallbackUrl: (currentCdnType: InjectScriptType) => "vercel" | "jsdelivr" | "cdnjs" | "unpkg";
