import type { StorageVariantTestKey } from "../../../types/index";
export declare const mergeTest: <TBase extends StorageVariantTestKey>({ baseTestObj, mergeTestObj, }: {
    baseTestObj: TBase[];
    mergeTestObj: TBase[];
}) => StorageVariantTestKey[];
