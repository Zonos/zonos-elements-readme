import type { CheckItemRestrictionRequest } from "../../../types/hello/RestrictedItem";
export declare const checkItemRestrictions: ({ items, shipFrom, shipTo, }: CheckItemRestrictionRequest) => Promise<{
    action: import("src/types/generated/graphql.internal.types").ItemRestrictionAction | null;
    id: string;
    itemDescription: string | null;
    itemRestrictions: ({
        hsCode: string;
        id: string;
        note: string;
        sources: (string | null)[] | null;
        type: import("src/types/generated/graphql.internal.types").ItemRestrictionType;
    } | null)[] | null;
}[]>;
