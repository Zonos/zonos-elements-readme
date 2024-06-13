/**
 * Generate a Vercel deploy URL based on the branch name and project name
 * @note not including https://
 * @ref https://vercel.com/docs/deployments/generated-urls#truncation
 * @return {url} string
 * @urlExample zonos-elements-serverless-git-fe-525-ref-shipping-b14253-zonos.vercel.app
 */
export declare const generateVercelDeployUrl: ({ branchName, projectName, }: {
    branchName: string;
    projectName: string;
}) => string;
