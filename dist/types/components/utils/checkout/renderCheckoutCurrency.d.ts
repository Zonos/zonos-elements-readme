type Params = {
    amount: number;
    isForeign: boolean;
};
/**
 * Unified currency rendering for checkout amounts.
 * @note This is only to display, not for calculations.
 */
export declare const renderCheckoutCurrency: ({ amount, isForeign }: Params) => string;
export {};
