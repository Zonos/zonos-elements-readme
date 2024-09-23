import type { CartCalculateLandedCostMutation } from "../../../types/generated/graphql.customer.types";
export declare const cartCalculateLandedCost: ({ abortController, cartId, }: {
    abortController?: AbortController;
    cartId: string;
}) => Promise<CartCalculateLandedCostMutation>;
