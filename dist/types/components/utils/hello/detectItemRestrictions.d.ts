import type { Product } from "../../../types/hello/Product";
export declare const detectItemRestrictions: (newProducts: Product[]) => Promise<{
    name: string;
    action: import("../../../types/generated/graphql.customer.types").ItemRestrictionAction | null;
    id: string;
    itemDescription: string | null;
    itemRestrictions: ({
        hsCode: string;
        id: string;
        note: string;
        sources: (string | null)[] | null;
        type: import("../../../types/generated/graphql.customer.types").ItemRestrictionType;
    } | null)[] | null;
}[]>;
