import type { CheckItemRestrictionRequest } from "../../../types/hello/RestrictedItem";
export declare const checkItemRestrictions: ({ items, shipFrom, shipTo, }: CheckItemRestrictionRequest) => Promise<{
    id: string;
    action: import("src/types/generated/graphql.internal.types").ItemRestrictionAction | null;
    itemDescription: string | null;
    itemRestrictions: Array<{
        hsCode: string;
        id: string;
        note: string;
        type: import("src/types/generated/graphql.internal.types").ItemRestrictionType;
        sources: Array<string | null> | null;
    } | null> | null;
}[]>;
