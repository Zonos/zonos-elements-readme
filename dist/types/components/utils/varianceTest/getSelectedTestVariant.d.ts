import type { AvailableVariant, TestKey } from "../../../types/index";
export declare const getSelectedTestVariant: <T extends TestKey>(testKey: T) => AvailableVariant<T> | null;
