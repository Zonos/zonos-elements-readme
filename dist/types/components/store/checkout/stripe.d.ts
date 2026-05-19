import type { PaymentIntent, Stripe, StripeAddressElement, StripeAddressElementChangeEvent, StripeElements, StripeElementsOptions, StripeLinkAuthenticationElement, StripeLinkAuthenticationElementChangeEvent, StripePaymentElement, StripePaymentElementChangeEvent } from '@stripe/stripe-js';
import type { containsNonLatinChars } from "../../utils/containsNonLatinChars";
import type { CreatePartyRequest } from "../../../types/index";
import type { CheckoutSessionCreateRequest, CheckoutSessionUpdateRequest } from "../../../types/checkout/api/CheckoutSession";
import type { CustomAddressErrors } from "../../../types/checkout/form/CustomAddressErrors";
import type { TranslatedAddressObject } from "../../../types/checkout/TranslatedText";
import type { CheckoutSessionDetailsFragment, CheckoutSessionUpdateMutation, CurrencyCode, ElementsUiStyle, ElementsUiTheme } from "../../../types/generated/graphql.internal.types";
export type StripeStoreContactOption = {
    address: {
        city: string;
        country: string;
        line1: string;
        line2?: string;
        postal_code: string;
        state: string;
    };
    email: string;
    name: string;
    phone?: string;
};
export type CustomerProfile = CheckoutSessionDetailsFragment['customerProfile'];
/**
 * If any of these values are changed, we need to refetch landed cost since the landed cost accuracy depends on these values
 */
type AddressUsedWhenFetchingLC = {
    countryCode: string;
    postalCode: string;
    state: string;
};
type StripeStore = {
    /**
     * Currency that will be used to checkout, currency should always be Destination if "allowedSettlementCurrencies" in checkoutSettings is "LOCAL", and value might be either USD or Destination currency if "allowedSettlementCurrencies" is "LOCAL_AND_USD"
     * @default DESTINATION_CURRENCY
     */
    checkoutSettlementCurrency: CurrencyCode;
    clientSecret: string;
    /**
     * Optional company name
     */
    companyName: string;
    /**
     * Optional company name
     */
    companyNameUsedWhenAsyncAddressUpdate: string;
    /**
     * Custom error message for address fields. Will be set when Submit button is clicked
     */
    customAddressErrors: CustomAddressErrors;
    /**
     * Custom error message for billing address fields. Will be set when Submit button is clicked
     */
    customBillingAddressErrors: CustomAddressErrors;
    /**
     * Custom error message when payment is failed
     */
    customErrorMessage: string | null;
    /**
     * Customer profile information from checkout customer
     */
    customerProfile: CustomerProfile;
    fetchingLandedCostAbortController: AbortController | null;
    hasPaymentError: boolean;
    isFetchingLandedCost: boolean;
    isFetchingSession: boolean;
    /**
     * Billing party id (used for async address update)
     */
    partyBillingId: string | null;
    /**
     * Shipping party id (used for async address update)
     */
    partyShippingId: string | null;
    /**
     * Short address code only required for Saudi Arabia
     */
    shortAddressCode: string;
    /**
     * Toggle to indicate if we should refund the inventory when the payment is failed
     */
    shouldInventoryRefund: boolean;
    shouldRenderPayInUsdButton: boolean;
    /**
     * Default to skip payment intent, only create payment intent when "skipPaymentIntent" in url's query params is set "0"
     * @default true
     */
    skipPaymentIntent: boolean;
    stripe: Stripe | null;
    stripeAddressElement: StripeAddressElement | null;
    stripeAddressEventData: StripeAddressElementChangeEvent | null;
    stripeAddressUsedWhenAsyncAddressUpdate: StripeAddressElementChangeEvent | null;
    stripeAddressUsedWhenFetchingLC: AddressUsedWhenFetchingLC | null;
    stripeAddressUsedWhenValidatingAddress: StripeAddressElementChangeEvent | null;
    stripeBillingAddressElement: StripeAddressElement | null;
    stripeBillingAddressEventData: StripeAddressElementChangeEvent | null;
    stripeBillingAddressUsedWhenAsyncAddressUpdate: StripeAddressElementChangeEvent | null;
    stripeBillingAddressUsedWhenFetchingLC: AddressUsedWhenFetchingLC | null;
    stripeBillingAddressUsedWhenValidatingAddress: StripeAddressElementChangeEvent | null;
    /**
     * Stripe client secret for customer session
     */
    stripeCustomerSessionClientSecret: string | null;
    stripeElements: StripeElements | null;
    stripeElementsForBillingAddress: StripeElements | null;
    stripeElementsOptions: StripeElementsOptions | null;
    stripeLinkElement: StripeLinkAuthenticationElement | null;
    stripeLinkEventData: StripeLinkAuthenticationElementChangeEvent | null;
    stripeLinkUsedWhenFetchingLC: StripeLinkAuthenticationElementChangeEvent | null;
    stripePaymentElement: StripePaymentElement | null;
    stripePaymentEventData: StripePaymentElementChangeEvent | null;
    /**
     * toggle to indicate if shipping address is the same as billing address
     * @default true
     * */
    stripeShippingSameAsBilling: boolean;
    /**
     * Optional tax id for the destination country that requires it
     */
    taxId: string;
    /**
     * Tax id used when async address update
     */
    taxIdUsedWhenAsyncAddressUpdate: string;
    translatedAddress: {
        address: TranslatedAddressObject;
        billingAddress: TranslatedAddressObject;
    };
};
declare const stripeStoreOnChange: import("@stencil/store/dist/types").OnChangeHandler<StripeStore>, stripeStore: StripeStore;
export type DomesticShippingSession = {
    address1: string;
    address2: string;
    city: string;
    countryCode: string;
    firstName: string;
    lastName: string;
    phone: string;
    postalCode: string;
    state: string;
};
declare const stripeStoreCleanupDomesticShippingSession: () => void;
declare const stripeStoreSaveDomesticShippingSession: (props: DomesticShippingSession) => void;
declare const stripeStoreGetDomesticShippingSession: () => DomesticShippingSession | null;
declare const initStripeElements: (props?: {
    overrideBorderRadius?: ElementsUiStyle;
    overridePrimaryColor?: string;
    overrideSecondaryColor?: string;
    overrideTheme?: ElementsUiTheme;
    paypalEnabled?: boolean;
}) => Promise<void>;
declare const stripeStoreReset: () => void;
declare const stripeStoreBuildAddressForPartyCreate: ({ address, firstName, lastName, name, phone, }: StripeAddressElementChangeEvent["value"]) => CreatePartyRequest["address"];
declare const stripeStoreAsyncAddressUpdate: () => Promise<{
    partiesCreated: boolean;
}>;
declare const stripeCalculateLandedCost: () => Promise<void>;
declare const stripeStorePrefetchLandedCost: (params?: {
    /**
     * Force to refetch landed cost if we are applying promocode
     * @default false
     **/
    applyingPromocode?: boolean;
    retries?: number;
}) => Promise<{
    isRequestNotReady: boolean;
}>;
declare const stripeStoreApplyPromoCode: () => Promise<void>;
declare const stripeStoreResetPromoCode: () => void;
declare const stripeStoreRemovePromoCode: () => Promise<void>;
declare const stripeStoreMessageBasedOnStatus: (status?: PaymentIntent["status"]) => {
    isError: boolean;
    messages: string[];
};
/**
 * Handle inventory check and returns error message if the callback provided.
 */
declare const stripeStoreHandleInventoryCheck: () => Promise<string | null>;
/**
 * Handle inventory check and returns error message if the callback provided.
 */
declare const stripeStoreHandleInventoryRefund: () => Promise<void>;
declare const stripeStoreRetrievePayment: ({ clientSecret: _clientSecret, storybookForceStatus, }: {
    clientSecret: string | null;
    storybookForceStatus?: PaymentIntent["status"];
}) => Promise<{
    error: boolean;
    messages: string[];
    message?: undefined;
    amount?: undefined;
    currency?: undefined;
    paymentIntentId?: undefined;
    paymentMethod?: undefined;
    status?: undefined;
} | {
    error: boolean;
    message: string[];
    messages?: undefined;
    amount?: undefined;
    currency?: undefined;
    paymentIntentId?: undefined;
    paymentMethod?: undefined;
    status?: undefined;
} | {
    amount: number | undefined;
    currency: string | undefined;
    error: boolean;
    messages: string[];
    paymentIntentId: string | undefined;
    paymentMethod: string | import("@stripe/stripe-js").PaymentMethod | null | undefined;
    status: PaymentIntent.Status | undefined;
    message?: undefined;
}>;
declare const stripeStoreConfirmPayment: (props?: {
    noLandedCostCheck?: boolean;
}) => Promise<void>;
export declare const getCheckoutSessionBody: () => CheckoutSessionCreateRequest;
declare const stripeStoreGetPaymentIntent: () => Promise<void>;
/**
 * Init checkout session
 * @returns {boolean} whether or not the checkout session is successfully created
 */
declare const stripeStoreInitCheckoutSession: () => Promise<boolean>;
declare const stripeStoreUpdateCheckoutSessionBaseCurrency: () => Promise<boolean>;
/**
 * Update checkout session. Use for updating amount with landed cost id, or update session when cart items change
 */
declare const stripeStoreUpdateCheckoutSession: ({ adjustmentsAmount, cartId, currency, id, itemsAmount, landedCostId, presentmentCountryCode, storeCreditApplication, }: CheckoutSessionUpdateRequest) => Promise<{
    errors: import("src/types").JsonError[];
    json: CheckoutSessionUpdateMutation | null;
}>;
/**
 * This function translates an address to Latin characters using the Zonos API.
 * It first builds the request body for the API call. If there's no request body, it resets the translated address in the store and returns.
 * If the address is not outdated, it returns without making the API call.
 * It then makes a POST request to the Zonos API to validate and translate the address. If the API call fails, it resets the translated address in the store and returns.
 * If the API call is successful, it sets the current address and billing address in the store and builds the translated address and billing address from the API response.
 *
 * @param {Object} params - The parameters for the function.
 * @param {ReturnType<typeof containsNonLatinChars> | null} params.addressInvalidCharactersList - The list of address fields that contain invalid characters.
 * @param {ReturnType<typeof containsNonLatinChars> | null} params.billingAddressInvalidCharactersList - The list of billing address fields that contain invalid characters.
 */
declare const stripeStoreTranslateAddressToLatin: ({ addressInvalidCharactersList, billingAddressInvalidCharactersList, }: {
    addressInvalidCharactersList: ReturnType<typeof containsNonLatinChars> | null;
    billingAddressInvalidCharactersList: ReturnType<typeof containsNonLatinChars> | null;
}) => Promise<void>;
export { initStripeElements, stripeCalculateLandedCost, stripeStore, stripeStoreApplyPromoCode, stripeStoreAsyncAddressUpdate, stripeStoreBuildAddressForPartyCreate, stripeStoreCleanupDomesticShippingSession, stripeStoreConfirmPayment, stripeStoreGetDomesticShippingSession, stripeStoreGetPaymentIntent, stripeStoreHandleInventoryCheck, stripeStoreHandleInventoryRefund, stripeStoreInitCheckoutSession, stripeStoreMessageBasedOnStatus, stripeStoreOnChange, stripeStorePrefetchLandedCost, stripeStoreRemovePromoCode, stripeStoreReset, stripeStoreResetPromoCode, stripeStoreRetrievePayment, stripeStoreSaveDomesticShippingSession, stripeStoreTranslateAddressToLatin, stripeStoreUpdateCheckoutSession, stripeStoreUpdateCheckoutSessionBaseCurrency, };
