/**
 * Generate a Cloudflare deploy URL based on the branch name and project name
 * @note not including https://
 * @return {url} string
 * @urlExample build-cloudflare-2.zonos-elements.page.dev
 */
export declare const generateCloudflareDeployUrl: ({ branchName, projectName, }: {
    branchName: string;
    projectName: string;
}) => string | null;
