import type { CartCalculateLandedCostResponse } from "../../../types/checkout/api/CalculateLandedCost";
export declare const cartCalculateLandedCost: ({ abortController, cartId, }: {
    abortController?: AbortController;
    cartId: string;
}) => Promise<CartCalculateLandedCostResponse>;
