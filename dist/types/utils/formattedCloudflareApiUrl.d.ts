export type ICloudflareDeployTarget = 'pages' | 'worker';
/**
 * Pages when Cloudflare Pages sets `CF_PAGES=1`.
 * Otherwise a Cloudflare build is the worker. Every other build stays on the Pages preview path.
 * `USE_OPENNEXT` is not an input.
 */
export declare const resolveCloudflareDeployTarget: ({ buildEnv, cfPages, }: {
    buildEnv: string | undefined;
    cfPages: string | undefined;
}) => ICloudflareDeployTarget;
/**
 * Cloudflare API address inlined into the storefront script.
 * @returns
 * - `https://<label>.robert-152.workers.dev` for a non-production Worker preview
 * - `https://zonos-elements-serverless-test.robert-152.workers.dev` for the test Worker production host
 * - `https://<branch_name>.<project_name>.pages.dev` for a non-production Pages preview
 * - the configured host for production, local, and GitHub Actions
 */
export declare const formattedCloudflareApiUrl: ({ branchName, cloudflareTarget, inCI: _inCI, inGithubAction, inVercel: _inVercel, isVercelPreview: _isVercelPreview, url, }: {
    branchName?: string;
    cloudflareTarget: ICloudflareDeployTarget;
    inCI: boolean;
    inGithubAction: boolean;
    inVercel: boolean;
    isVercelPreview: boolean;
    url?: string;
}) => string | undefined;
