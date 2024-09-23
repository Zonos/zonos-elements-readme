/**
 * This is to generate cloudflare url based on the environment. This won't
 * - Get the cloudflare alias to build if the environment is Preview
 * - Get the cloudflare production url (not preview alias) if it's production
 * @note
 * This is mainly used for get correct Cloudflare API to be used in scripts
 * @note
 * "url" is the API url in Cloudflare
 * @returns
 * - `https://<branch_name>.<project_name>.pages.dev` if is Preview
 * - `https://route.elements.zonos.com` if is Production
 */
export declare const formattedCloudflareApiUrl: ({ branchName, inCI: _inCI, inGithubAction, inVercel: _inVercel, isVercelPreview: _isVercelPreview, url, }: {
    branchName?: string;
    inCI: boolean;
    inGithubAction: boolean;
    inVercel: boolean;
    isVercelPreview: boolean;
    url?: string;
}) => string | undefined;
