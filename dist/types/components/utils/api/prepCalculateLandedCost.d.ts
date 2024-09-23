import type { CalculateLandedCostRequest, CartCalculateLandedCostRequest } from "../../../types/checkout/api/CalculateLandedCostRequest";
/**
 * Similar to prepCalculateLandedCost except it only uses
 */
export declare const prepCartCalculateLandedCost: (cartId: string) => CartCalculateLandedCostRequest;
export declare const prepCalculateLandedCost: () => CalculateLandedCostRequest;
