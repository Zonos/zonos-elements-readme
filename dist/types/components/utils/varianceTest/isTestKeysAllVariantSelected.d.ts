import type { StorageVariantTestKey } from "../../../types/index";
/**
 * Typeguard to check if all variant test keys are selected.
 */
export declare const isTestKeysAllVariantSelected: (variantTestKeys: {
    expiresAt: number;
    selectedVariantKey: string | null;
    testKey: string;
}[]) => variantTestKeys is StorageVariantTestKey[];
