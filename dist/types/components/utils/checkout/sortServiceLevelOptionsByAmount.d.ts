/**
 * Sorts service levels with lower cost first
 */
export declare const sortServiceLevelOptionsByAmount: <T extends {
    amount: number;
}>(serviceLevels: T[]) => T[];
