/**
 * Worker host without a scheme.
 * Production is `{workerName}.robert-152.workers.dev`.
 * Preview is `{prefix}-{workerName}.robert-152.workers.dev`.
 * A branch longer than the prefix budget becomes `{prefix}-{hash}-{workerName}`.
 * `{workerName}` is `zonos-elements-serverless`, or `zonos-elements-serverless-test` for the test project.
 * The label is at most 63 characters.
 * @example feat-checkout-zonos-elements-serverless.robert-152.workers.dev
 * @example zonos-elements-serverless-test.robert-152.workers.dev
 */
export declare const generateCloudflareWorkerPreviewUrl: ({ branchName, workerName, }: {
    branchName: string;
    workerName?: string;
}) => string;
export declare const cloudflareWorkerName: (isTest: boolean) => "zonos-elements-serverless" | "zonos-elements-serverless-test";
/** `{workerName}.robert-152.workers.dev` with no branch prefix. */
export declare const cloudflareWorkerHost: (workerName: string) => string;
