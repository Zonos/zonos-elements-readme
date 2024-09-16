export declare const fallbackList: readonly ["jsdelivr", "cdnjs", "unpkg", "vercel"];
export type InjectScriptType = (typeof fallbackList)[number];
/**
 * Get the next cdn type in the fallback list
 * @param currentCdnType The current cdn type that want to get the next fallback url
 */
export declare const getNextFallbackUrl: (currentCdnType: InjectScriptType) => "vercel" | "jsdelivr" | "cdnjs" | "unpkg";
