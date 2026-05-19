import type { LogBulkLoadRequestPayload } from "../../../types/LogLoadScript";
export type LoadTimeApiLogInfo = LogBulkLoadRequestPayload['data'][number];
/**
 * Prepares the load time api log for the given API call to send to the server later
 * This function is used to prepare the load time api log for the given API call.
 * It adds the load time api log to the loadTimeApiInfoList.
 */
export declare const prepLoadTimeApiLog: ({ apiPath, apiType, loadTimeInternal, loadTimeTotal, }: {
    /**
     * The path of the API call
     * @example '/api/zonos-elements/log-script-load'
     */
    apiPath: string;
    /**
     * The type of the API call
     * @example 'vercel' | 'cloudflare'
     */
    apiType: "vercel" | "cloudflare";
    loadTimeInternal: number;
    loadTimeTotal: number;
}) => void;
