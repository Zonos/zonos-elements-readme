export type InjectScriptType = 'vercel' | 'jsdelivr' | 'unpkg';
export declare const fallbackList: InjectScriptType[];
/**
 * Get the next cdn type in the fallback list
 * @param currentCdnType The current cdn type that want to get the next fallback url
 */
export declare const getNextFallbackUrl: (currentCdnType: InjectScriptType) => InjectScriptType;
