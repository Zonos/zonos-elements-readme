type Params = {
    loadScriptSrc?: string;
};
/**
 * Get the load version and url based on the loadScriptSrc and version
 * @returns
 */
export declare const checkIfLoadVersionDomain: ({ loadScriptSrc }: Params) => {
    currentLoadScriptUrl: string;
    isForceLoadVersionDomain: boolean;
    isWhiteListed: boolean;
};
export {};
