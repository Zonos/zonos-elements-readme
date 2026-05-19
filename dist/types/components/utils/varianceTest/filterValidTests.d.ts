import type { StorageVariantTestKey } from "../../../types/index";
/**
 * Filter the response to only include test keys and variants key that we support
 */
export declare const filterValidTests: (testKeys: {
    expiresAt?: number;
    selectedVariantKey: string | null;
    testKey: string;
}[]) => StorageVariantTestKey[];
