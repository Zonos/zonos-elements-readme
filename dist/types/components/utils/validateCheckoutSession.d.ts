type ReturnType = {
    errorMessage: string;
    valid: boolean;
};
/**
 * Validate checkout session before confirming payment
 */
export declare const validateCheckoutSession: () => Promise<ReturnType>;
export {};
