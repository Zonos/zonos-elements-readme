type Params = {
    endpoint: string;
    errors: string[];
    metadata: Record<string, unknown>;
};
export declare const sendErrorLog: ({ endpoint, errors, metadata }: Params) => Promise<void>;
export {};
