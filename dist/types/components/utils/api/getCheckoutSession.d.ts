import type { GetCheckoutSessionQuery } from "../../../types/generated/graphql.internal.types";
type ReturnType = {
    errors: {
        message: string;
    }[];
    json: GetCheckoutSessionQuery | null;
};
export declare const getCheckoutSession: () => Promise<ReturnType>;
export {};
