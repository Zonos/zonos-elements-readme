import type { TestKey } from "../../../types/index";
type Params = {
    testKeys: TestKey[];
};
export declare const selectVarianceTest: ({ testKeys }: Params) => Promise<import("src/types").StorageVariantTestKey[] | null>;
export {};
