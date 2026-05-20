import type { LogLoadScriptRequest } from "../../../types/LogLoadScript";
type Params = Omit<LogLoadScriptRequest, 'href'>;
export declare const sendLoadScriptLog: (params: Params) => Promise<void>;
export {};
