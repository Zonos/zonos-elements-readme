import type { JsonError } from "../../types/JsonError";
import type { NoInfer } from "../../types/NoInfer";
export type HandleFetchReturn<ResponseBody extends unknown> = {
    errors: JsonError[];
    json: NoInfer<ResponseBody> | null;
    response: Response | null;
};
export type FetcherReturn<ResponseBody extends unknown> = {
    json: NoInfer<ResponseBody> | null;
    response: Response | null;
};
export type RequestOptions<ResponseBody, RequestBody> = {
    body?: NoInfer<RequestBody>;
    testExpectedData?: (data: ResponseBody) => boolean;
} & Omit<RequestInit, 'body'>;
export declare const handleFetch: <ResponseBody extends unknown, RequestBody = unknown>(url: string, _opts?: RequestOptions<ResponseBody, RequestBody>) => Promise<HandleFetchReturn<ResponseBody>>;
