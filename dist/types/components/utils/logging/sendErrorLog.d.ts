type Params = {
    endpoint: string;
    errors: string[];
    metadata: Record<string, unknown>;
    /**
     * Should only report errors that happened if current time is within 1 hour after release time.
     * @note If this is not set, we will always report the error
     * @default false
     */
    shouldPostReleaseErrorReporting?: boolean;
};
export declare const sendErrorLog: ({ endpoint, errors, metadata, shouldPostReleaseErrorReporting, }: Params) => Promise<void>;
export {};
