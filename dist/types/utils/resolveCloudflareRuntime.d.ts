export type ICloudflareRuntime = 'other' | 'pages' | 'worker';
/**
 * Pages when Cloudflare Pages sets `CF_PAGES=1`.
 * A Cloudflare build that is not Pages is the worker.
 * Every other build is neither.
 * `USE_OPENNEXT` is not an input.
 */
export declare const resolveCloudflareRuntime: ({ buildEnv, cfPages, }: {
    buildEnv: string | undefined;
    cfPages: string | undefined;
}) => ICloudflareRuntime;
