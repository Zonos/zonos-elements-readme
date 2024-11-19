import type { CalculateLandedCostRequest } from "../../../types/checkout/api/CalculateLandedCost";
import type { CalculateLandedCostMutation } from "../../../types/generated/graphql.internal.types";
export type BuildLandedCostParams = {
    billingAddress: CalculateLandedCostRequest['billingAddress'];
    billingContact: CalculateLandedCostRequest['billingContact'];
    checkoutSessionId: string;
    contact: CalculateLandedCostRequest['contact'];
    landedCostAdjustments?: CalculateLandedCostRequest['landedCostAdjustments'];
    shippingAddress: CalculateLandedCostRequest['shippingAddress'];
    zonosApiRoute: string;
};
export type BuildLandedCostResponse = (CalculateLandedCostMutation & {
    errors?: {
        message: string;
    }[];
}) | null;
type BuildLandedCost = (props: BuildLandedCostParams) => Promise<BuildLandedCostResponse>;
export declare const triggerBuildLandedCost: (buildLandedCost: BuildLandedCost) => Promise<CalculateLandedCostMutation & {
    errors?: {
        message: string;
    }[] | undefined;
}>;
export {};
