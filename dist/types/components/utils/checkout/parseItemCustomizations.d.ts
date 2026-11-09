import { type LooseKeyValue } from "./itemCustomization";
import type { ItemCustomizationChoice } from "../../../types/checkout/itemCustomization";
/**
 * Reads a cart row's `itemCustomization` attribute into display pairs.
 * Unreadable data is an empty list.
 */
export declare const parseItemCustomizations: (attributes?: LooseKeyValue[] | null) => ItemCustomizationChoice[];
