export declare const formattedUrl: ({ branchName, inCI: _inCI, inVercel: _inVercel, isVercelPreview: _isVercelPreview, packageVersion: _packageVersion, type, url, }: {
    branchName?: string;
    inCI: boolean;
    inVercel: boolean;
    isVercelPreview: boolean;
    packageVersion: string;
    type: "major" | "full" | "vercel-git";
    url?: string;
}) => string | undefined;
