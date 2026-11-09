/**
 * Import-free so `scripts/buildItemCustomization.mjs` can emit one module.
 * demo-app imports the generated `item-customization.js`, not this file.
 */
export declare const ITEM_CUSTOMIZATION_ATTRIBUTE_KEY = "itemCustomization";
export type LooseKeyValue = {
    key?: string | null;
    value?: string | null;
} | null;
/** Drops an empty name, a non-string value, and the unselected value "0". */
export declare const readDisplayableItemCustomization: (value: unknown) => {
    name: string;
    value: string;
} | null;
export type ItemCustomizationEntry = {
    choice: {
        name: string;
        value: string;
    };
    raw: Record<string, unknown>;
};
/** Selected customization entries, with the original object for extra ids. */
export declare const readItemCustomizationEntries: (attributes?: LooseKeyValue[] | null) => ItemCustomizationEntry[];
