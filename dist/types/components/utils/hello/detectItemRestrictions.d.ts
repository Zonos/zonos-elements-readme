import type { Product } from "../../../types/hello/Product";
export declare const detectItemRestrictions: (newProducts: Product[]) => Promise<{
    name: string;
    id: string;
    action: import("../../../types/generated/graphql.internal.types").ItemRestrictionAction | null;
    itemDescription: string | null;
    itemRestrictions: Array<{
        hsCode: string;
        id: string;
        note: string;
        type: import("../../../types/generated/graphql.internal.types").ItemRestrictionType;
        sources: Array<string | null> | null;
    } | null> | null;
}[]>;
