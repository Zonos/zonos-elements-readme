import { type StorageVariantTestKey } from "../../../types/index";
/**
 * Check if the response contains at least one available test key that we support
 */
export declare const hasAtLeastOneAvailableTestKey: (rawResponse: {
    selectedVariantKey: string | null;
    testKey: string;
}[]) => rawResponse is StorageVariantTestKey[];
