export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
/**
 * Merge objects deeply with strongly typed for each argument
 * @param value1 Merge object
 * @param value2[] List of objects to merge (need to have the same shape as value1)
 */
export declare const mergeConfig: <T>(defaultObj: T, fetchedObj: T | null, ...overrideObj: (DeepPartial<T> | null | undefined)[]) => Exclude<T, undefined>;
