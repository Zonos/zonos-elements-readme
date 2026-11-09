import { type StorageArea } from "./logging/reportBlockedStorage";
export declare const safeGetItem: (area: StorageArea, key: string) => string | null;
export declare const safeRemoveItem: (area: StorageArea, key: string) => void;
export declare const safeSetItem: (area: StorageArea, key: string, value: string) => void;
