import type { CountryCode } from "../../../types/generated/graphql.customer.types";
type Item = {
    description: string;
    name: string;
};
export declare const checkItemRestrictions: ({ items, shipFrom, shipTo, }: {
    items: Item[];
    shipFrom: CountryCode;
    shipTo: CountryCode;
}) => Promise<{
    action: import("src/types/generated/graphql.customer.types").ItemRestrictionAction | null;
    id: string;
    itemDescription: string | null;
    itemRestrictions: ({
        hsCode: string;
        id: string;
        note: string;
        sources: (string | null)[] | null;
        type: import("src/types/generated/graphql.customer.types").ItemRestrictionType;
    } | null)[] | null;
}[]>;
export {};
