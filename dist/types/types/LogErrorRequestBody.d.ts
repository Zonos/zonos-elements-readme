export type LogErrorRequestBody = {
    endpoint: string;
    errors: string[];
    metadata: Record<string, unknown>;
};
