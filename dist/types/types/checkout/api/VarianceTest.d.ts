export declare const availableTestKeys: {
    readonly hosted_vs_native: {
        readonly availableVariants: readonly ["hosted", "native"];
    };
    readonly test_A_B: {
        readonly availableVariants: readonly ["A", "B"];
    };
};
export type TestKey = keyof typeof availableTestKeys;
export type AvailableVariant<_TestKey extends TestKey> = (typeof availableTestKeys)[_TestKey]['availableVariants'][number];
export type VariantTestKey = {
    [key in TestKey]: {
        selectedVariantKey: AvailableVariant<key> | null;
        testKey: key;
    };
}[TestKey];
export type SelectVarianceTestPayload = {
    testKeys: string[];
};
export type SelectVarianceTestRawResponse = {
    selectedVariantKey: string;
    testKey: string;
}[];
export type SelectVarianceTestResponse = VariantTestKey[];
export type StorageVariantTestKey = VariantTestKey & {
    /**
     * The timestamp when the test key expires. (Use to assign new test for user once the test key expires)
     */
    expiresAt: number;
};
