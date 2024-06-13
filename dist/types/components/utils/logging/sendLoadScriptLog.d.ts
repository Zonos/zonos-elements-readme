import type { LogLoadScriptRequestBody } from "../../../types/LogLoadScriptRequestBody";
type Params = Omit<LogLoadScriptRequestBody, 'href'>;
export declare const sendLoadScriptLog: (params: Params) => Promise<void>;
export {};
