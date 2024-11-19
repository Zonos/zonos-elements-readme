import type { CalculateLandedCostRequest, CartCalculateLandedCostRequest } from "../../../types/checkout/api/CalculateLandedCost";
/**
 * Similar to prepCalculateLandedCost except it only uses cart ID
 */
export declare const prepCartCalculateLandedCost: (cartId: string) => CartCalculateLandedCostRequest;
export declare const prepCalculateLandedCost: () => CalculateLandedCostRequest;
