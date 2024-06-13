import type { CalculateLandedCostRequest } from "../../../types/checkout/api/CalculateLandedCostRequest";
import type { CalculateLandedCostMutation } from "../../../types/generated/graphql.customer.types";
export type BuildLandedCostParams = {
    billingAddress: CalculateLandedCostRequest['billingAddress'];
    billingContact: CalculateLandedCostRequest['billingContact'];
    checkoutSessionId: string;
    contact: CalculateLandedCostRequest['contact'];
    shippingAddress: CalculateLandedCostRequest['shippingAddress'];
    zonosApiRoute: string;
};
export type BuildLandedCostResponse = Promise<(CalculateLandedCostMutation & {
    errors?: {
        message: string;
    }[];
}) | null>;
type BuildLandedCost = (props: BuildLandedCostParams) => BuildLandedCostResponse;
export declare const triggerBuildLandedCost: (buildLandedCost: BuildLandedCost) => Promise<CalculateLandedCostMutation & {
    errors?: {
        message: string;
    }[] | undefined;
}>;
export {};
