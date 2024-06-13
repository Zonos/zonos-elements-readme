type Connection = {
    downlink?: number;
    effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
    rtt?: number;
    saveData?: boolean;
};
export declare const getNavigatorConnection: () => Connection | null | undefined;
export {};
