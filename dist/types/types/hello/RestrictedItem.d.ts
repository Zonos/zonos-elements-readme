import type { CheckItemRestrictionsMutation, CountryCode } from "../generated/graphql.internal.types";
type Items = CheckItemRestrictionsMutation['itemRestrictionApply']['items'];
export type RestrictedItem = Items[number] & {
    name?: string;
};
type CheckItemRestrictionItem = {
    description: string;
    name: string;
};
export type CheckItemRestrictionRequest = {
    items: CheckItemRestrictionItem[];
    shipFrom: CountryCode;
    shipTo: CountryCode;
};
export {};
