type UserAgentData = {
    brands: {
        brand: string;
        version: string;
    }[];
    mobile: boolean;
    platform: string;
};
export declare const getAdditionalLogMetadata: () => {
    connectionDownlink: number | undefined;
    connectionEffectiveType: "slow-2g" | "2g" | "3g" | "4g" | undefined;
    connectionRtt: number | undefined;
    connectionSaveData: boolean | undefined;
    isHostedCheckout: boolean;
    screenHeight: number;
    screenWidth: number;
    userAgent: string | UserAgentData;
};
export {};
