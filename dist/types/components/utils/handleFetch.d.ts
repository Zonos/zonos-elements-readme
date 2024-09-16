import type { JsonError } from "../../types/JsonError";
import type { NoInfer } from "../../types/NoInfer";
export type HandleFetchReturn<ResponseBody extends unknown> = {
    /**
     * The base url of the request. Example: https://v1.route.zonos.com
     */
    baseUrl: string;
    errors: JsonError[];
    json: NoInfer<ResponseBody> | null;
    response: Response | null;
    /**
     * This is to determine if the request is sending to the production or test enviroment
     */
    zonosMode: 'production' | 'test' | null;
};
export type FetcherReturn<ResponseBody extends unknown> = {
    json: NoInfer<ResponseBody> | null;
    response: Response | null;
};
export type RequestOptions<ResponseBody, RequestBody> = {
    body?: NoInfer<RequestBody>;
    testExpectedData?: (data: ResponseBody) => boolean;
} & Omit<RequestInit, 'body'>;
/**
 * Fetch request and will request to fallback API when the first one fails
 * @param path Path name of the request (e.g. /api/something/com).
 * @param _opts fetch options
 */
export declare const handleFetch: <ResponseBody extends unknown, RequestBody = unknown>(path: string, _opts?: RequestOptions<ResponseBody, RequestBody>) => Promise<HandleFetchReturn<ResponseBody>>;
