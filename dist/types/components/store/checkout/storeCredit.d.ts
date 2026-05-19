type StoreCreditStore = {
    /**
     * User-selected amount to apply
     */
    amountToApply: number | null;
    /**
     * Amount actually applied after API call
     */
    appliedAmount: number | null;
    /**
     * Available store credit balance from checkout session customerProfile
     */
    availableBalance: number | null;
    /**
     * Error message
     */
    error: string | null;
    /**
     * Whether store credit is currently being applied
     */
    isApplying: boolean;
    /**
     * Whether the user has enabled store credit usage (checkbox checked)
     */
    isEnabled: boolean;
    /**
     * Order ID created when store credit covers the full order amount
     */
    orderIdCreated: string | null;
    /**
     * Remaining balance after application
     */
    remainingBalance: number | null;
    /**
     * Whether to use full balance (vs custom amount)
     */
    useFullBalance: boolean;
};
declare const storeCreditStoreOnChange: import("@stencil/store/dist/types").OnChangeHandler<StoreCreditStore>, storeCreditStore: StoreCreditStore;
/**
 * Reset store credit store to initial state
 */
declare const storeCreditStoreReset: () => void;
/**
 * Set the available balance from the checkout session's customerProfile.storeCreditBalance
 */
declare const storeCreditStoreSetBalanceFromSession: (balance: number | null) => void;
/**
 * Re-fetch the store credit balance from the checkout session.
 * Called when the payment step loads to ensure the balance is fresh.
 */
declare const storeCreditStoreRefreshBalance: () => Promise<void>;
/**
 * Apply store credit to the checkout session.
 * This must be called BEFORE payment confirmation.
 * The amount/mode are already set via checkout session update with storeCreditApplication.
 */
declare const storeCreditStoreApplyCredit: () => Promise<{
    error: string | null;
    success: boolean;
}>;
/**
 * Enable or disable store credit usage.
 * When enabling, defaults to full balance mode.
 * When disabling, clears the amount.
 */
declare const storeCreditStoreSetEnabled: (enabled: boolean) => void;
/**
 * Set the amount of store credit to apply
 * Validates against available balance and cart total
 */
declare const storeCreditStoreSetAmount: (amount: number | null) => void;
/**
 * Toggle whether to use full balance or custom amount.
 * When switching to custom mode, clears the applied amount so the user
 * must explicitly apply via the Apply button.
 */
declare const storeCreditStoreSetUseFullBalance: (useFullBalance: boolean) => void;
/**
 * Get the storeCreditApplication input for checkout session update.
 * Sends mode: 'NONE' when store credit is not being used to clear any
 * previously applied store credit on the backend.
 */
declare const storeCreditStoreGetInput: () => {
    amount?: number;
    mode: "FULL" | "NONE" | "PARTIAL";
};
/**
 * Get the effective amount to apply based on settings
 */
declare const storeCreditStoreGetEffectiveAmount: () => number;
/**
 * Check whether the effective store credit amount covers the full order total.
 * When true, the Stripe/PayPal payment flow should be skipped and
 * `storeCreditStoreCreateOrder` should be used instead.
 *
 * Relies on the backend's computed `cartStore.total` (remaining amount to pay
 * after store credit) rather than a client-side comparison, which avoids issues
 * with currency mismatches or rounding.
 */
declare const storeCreditStoreCoversFullAmount: () => boolean;
/**
 * Create an order paid entirely by store credit.
 * Should only be called when `storeCreditStoreCoversFullAmount()` is true.
 */
declare const storeCreditStoreCreateOrder: () => Promise<{
    error: string | null;
    orderId: string | null;
    success: boolean;
}>;
export { storeCreditStore, storeCreditStoreApplyCredit, storeCreditStoreCoversFullAmount, storeCreditStoreCreateOrder, storeCreditStoreGetEffectiveAmount, storeCreditStoreGetInput, storeCreditStoreOnChange, storeCreditStoreRefreshBalance, storeCreditStoreReset, storeCreditStoreSetAmount, storeCreditStoreSetBalanceFromSession, storeCreditStoreSetEnabled, storeCreditStoreSetUseFullBalance, };
