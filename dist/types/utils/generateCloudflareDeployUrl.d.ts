/**
 * Generate a Cloudflare Pages-style deploy URL based on the branch name and project name.
 * Worker preview hosts are built separately by `generateCloudflareWorkerPreviewUrl`.
 * This helper only builds Cloudflare Pages aliases (`<branch>.<project>.pages.dev`).
 * @note not including https://
 * @return {url} string
 * @urlExample build-cloudflare-2.zonos-elements.pages.dev
 */
export declare const generateCloudflareDeployUrl: ({ branchName, projectName, }: {
    branchName: string;
    projectName: string;
}) => string | null;
