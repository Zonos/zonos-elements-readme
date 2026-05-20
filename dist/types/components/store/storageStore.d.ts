import type { StorageVariantTestKey } from "../../types/index";
/**
 * Expiration time for variant test keys in milliseconds
 * @default 1 day
 */
export declare const VARIANT_TEST_KEY_EXPIRATION: number;
type StorageStore = {
    checkoutSessionId: string | null;
    enabledVariantTestKeys: StorageVariantTestKey[] | null;
};
declare const storageStoreOnChange: import("@stencil/store/dist/types").OnChangeHandler<StorageStore>, storageStore: StorageStore;
declare const storageStoreSetEnabledVariantTestKeys: (testKeys: StorageVariantTestKey[]) => void;
export { storageStore, storageStoreOnChange, storageStoreSetEnabledVariantTestKeys, };
