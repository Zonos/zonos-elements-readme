import type { CheckItemRestrictionsMutation } from "../generated/graphql.customer.types";
type Items = CheckItemRestrictionsMutation['itemRestrictionApply']['items'];
export type RestrictedItem = Items[number] & {
    name?: string;
};
export {};
