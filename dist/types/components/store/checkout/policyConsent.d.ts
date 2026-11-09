export type IMerchantPolicyKey = 'termsAndConditions' | 'privacyPolicy' | 'refundPolicy' | 'shippingPolicy' | 'warrantyPolicy';
export type IEnabledPolicy = {
    key: IMerchantPolicyKey;
    /** Localized, human-readable policy name (e.g. "Refund Policy") */
    name: string;
    /** The merchant-supplied URL */
    url: string;
};
declare const policyConsentStoreReset: () => void, policyConsentStore: {
    /** Whether the buyer has checked the consent box */
    accepted: boolean;
    /**
     * ISO timestamp of the moment the buyer first accepted in this session. Snapshotted
     * once on acceptance so that subsequent checkout-session updates don't overwrite the
     * original audit timestamp with a later one. Null when not accepted.
     */
    acceptedAt: string | null;
    /**
     * Set once the buyer's click of Pay (or PayPal) has passed the consent gate. While
     * true, the checkbox UI is disabled so the buyer can't uncheck mid-flow and create
     * a race against the metadata builder, and so the Pay-in-USD confirm dialog can't
     * be used to bypass a re-validation. Cleared by the store reset on every close.
     */
    locked: boolean;
    /** Set to true when the buyer attempts to submit without accepting, so the UI can surface an inline error */
    showError: boolean;
};
export { policyConsentStore, policyConsentStoreReset };
/**
 * Returns the list of policies the merchant has configured (non-empty link).
 * Policies are returned in a fixed display order so the rendered list is
 * deterministic across renders and across locales. URLs that aren't absolute
 * http(s) URLs are filtered out as defense-in-depth against `javascript:` or
 * other unexpected schemes slipping through the backend validation.
 *
 * Reads from `zonosStore.checkoutSettings` (not `window.Zonos.cartSettings`)
 * so the consent UI works when zonos-elements is consumed via the npm package,
 * where `cartSettings` is not populated.
 */
export declare const getEnabledPolicies: () => IEnabledPolicy[];
export declare const isPolicyConsentRequired: () => boolean;
