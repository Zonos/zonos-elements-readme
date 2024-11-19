import type { LogLoadScriptRequest } from "../../../types/LogLoadScript";
type Params = Omit<LogLoadScriptRequest, 'href'>;
type UserAgentData = {
    brands: string[];
    mobile: boolean;
    platform: string;
};
export declare const getAdditionalLogMetadata: () => {
    connectionDownlink: number | undefined;
    connectionEffectiveType: "slow-2g" | "2g" | "3g" | "4g" | undefined;
    connectionRtt: number | undefined;
    connectionSaveData: boolean | undefined;
    userAgent: string | UserAgentData;
};
export declare const sendLoadScriptLog: (params: Params) => Promise<void>;
export {};
