import type { GetCollectCheckoutSessionResponse } from "../../../types/index";
import type { Locale_ElementsSupportedLocationCode_Enum } from "../../../types/generated/graphql.frontend.types";
/**
 * Store for the Airwallex Collect payment flow (05CHECK-860).
 *
 * Holds the data needed to render the Airwallex payment element — the payment
 * intent client secret + id returned on the checkout session — and lazily
 * initializes the `@airwallex/components-sdk`.
 */
type AirwallexStore = {
    /** Airwallex payment intent client secret (from the checkout session). */
    clientSecret: string | null;
    /** Presentment currency used when mounting the element. */
    currency: string | null;
    /** Whether the payment element reported an error. */
    hasPaymentError: boolean;
    /** Whether the SDK has been loaded and initialized. */
    isReady: boolean;
    /**
     * Whether the drop-in confirmed the payment in-widget this session. The finish
     * step trusts this over a possibly-lagging payment intent status lookup so it
     * doesn't show a false failure after the shopper already completed payment.
     */
    paymentConfirmed: boolean;
    /** Airwallex payment intent id (from the checkout session). */
    paymentIntentId: string | null;
};
declare const airwallexStoreOnChange: import("@stencil/store/dist/types").OnChangeHandler<AirwallexStore>, airwallexStoreReset: () => void, airwallexStore: AirwallexStore;
/**
 * Populate the store from a collect checkout session response.
 *
 * @returns `true` when the session uses Airwallex and has the data required to
 * render the payment element.
 */
declare const airwallexStoreSetFromSession: (checkoutSession: GetCollectCheckoutSessionResponse["checkoutSession"]) => boolean;
/**
 * Locales supported by the Airwallex SDK for both `init` and `element.update`.
 * (Intersection of the two SDK locale unions so a single mapping works for both.)
 */
type AirwallexLocale = 'ar' | 'da' | 'de' | 'en' | 'es' | 'fi' | 'fr' | 'id' | 'it' | 'ja' | 'ko' | 'ms' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sv' | 'zh' | 'zh-HK';
declare const airwallexStoreGetLocale: (locale: Locale_ElementsSupportedLocationCode_Enum) => AirwallexLocale;
/**
 * Load and initialize the Airwallex components SDK (idempotent). Uses the `prod`
 * environment only when the API is in production and the checkout mode is `LIVE`
 * (mirrors how PayPal decides production vs. sandbox), otherwise `demo`, so the
 * SDK environment matches the payment intents created by the checkout backend.
 * Also uses the shopper's selected locale from localization.
 *
 * @returns `true` once the SDK is ready to create elements.
 */
declare const airwallexStoreInitSdk: () => Promise<boolean>;
/**
 * Airwallex payment intent statuses.
 *
 * Per the Airwallex docs this list is not exhaustive — the API may return other
 * statuses — so the `(string & {})` member keeps the union open while preserving
 * autocomplete for the known values.
 * @see https://www.airwallex.com/docs/api/payments/payment_intents/create
 */
type AirwallexPaymentIntentStatus = 'REQUIRES_PAYMENT_METHOD' | 'REQUIRES_CUSTOMER_ACTION' | 'PENDING_REVIEW' | 'REQUIRES_CAPTURE' | 'PENDING' | 'SUCCEEDED' | 'CANCELLED' | (string & {});
/**
 * Whether the given status means the payment is settled or in progress (no
 * further customer action required).
 */
declare const airwallexStoreIsPaidStatus: (status: AirwallexPaymentIntentStatus | null) => boolean;
/**
 * Map an Airwallex payment intent status to a customer-facing message and an
 * error flag — the Airwallex equivalent of `stripeStoreMessageBasedOnStatus`.
 * @see https://www.airwallex.com/docs/payments/reference/payment-statuses
 */
declare const airwallexStoreMessageBasedOnStatus: (status?: AirwallexPaymentIntentStatus | null) => {
    isError: boolean;
    messages: string[];
};
/**
 * Retrieve the latest Airwallex payment intent status by id.
 *
 * @returns the status, or `null` when the lookup failed.
 */
declare const airwallexStoreRetrievePaymentIntent: (paymentIntentId: string) => Promise<{
    status: AirwallexPaymentIntentStatus | null;
}>;
export { type AirwallexPaymentIntentStatus, airwallexStore, airwallexStoreGetLocale, airwallexStoreInitSdk, airwallexStoreIsPaidStatus, airwallexStoreMessageBasedOnStatus, airwallexStoreOnChange, airwallexStoreReset, airwallexStoreRetrievePaymentIntent, airwallexStoreSetFromSession, };
