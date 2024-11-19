export type LogErrorRequest = {
    endpoint: string;
    errors: string[];
    href?: string;
    metadata: Record<string, unknown>;
};
