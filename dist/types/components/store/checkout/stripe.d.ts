import type { PaymentIntent, Stripe, StripeAddressElement, StripeAddressElementChangeEvent, StripeElements, StripeElementsOptions, StripeLinkAuthenticationElement, StripeLinkAuthenticationElementChangeEvent, StripePaymentElement, StripePaymentElementChangeEvent } from '@stripe/stripe-js';
import type { containsNonLatinChars } from "../../utils/containsNonLatinChars";
import type { TranslatedAddressObject } from "../../../types/checkout/TranslatedText";
import type { CheckoutSessionUpdateMutation, CountryCode, ElementsUiStyle, ElementsUiTheme } from "../../../types/generated/graphql.customer.types";
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
type StripeStore = {
    clientSecret: string | null;
    fetchingLandedCostAbordController: AbortController | null;
    hasPaymentError: boolean;
    isFetchingLandedCost: boolean;
    isFetchingSession: boolean;
    stripe: Stripe | null;
    stripeAddressElement: StripeAddressElement | null;
    stripeAddressEventData: StripeAddressElementChangeEvent | null;
    stripeAddressUsedWhenFetchingLC: StripeAddressElementChangeEvent | null;
    stripeAddressUsedWhenValidatingAddress: StripeAddressElementChangeEvent | null;
    stripeBillingAddressElement: StripeAddressElement | null;
    stripeBillingAddressEventData: StripeAddressElementChangeEvent | null;
    stripeBillingAddressUsedWhenFetchingLC: StripeAddressElementChangeEvent | null;
    stripeBillingAddressUsedWhenValidatingAddress: StripeAddressElementChangeEvent | null;
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
    translatedAddress: {
        address: TranslatedAddressObject;
        billingAddress: TranslatedAddressObject;
    };
};
declare const stripeStore: StripeStore;
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
    overrideBorderRaidus?: ElementsUiStyle;
    overridePrimaryColor?: string;
    overrideSecondaryColor?: string;
    overrideTheme?: ElementsUiTheme;
}) => Promise<void>;
declare const stripeStoreReset: () => void;
declare const stripeStorePrefetchLandedCost: () => Promise<void>;
declare const stripeStoreMessageBasedOnStatus: (status?: PaymentIntent['status']) => {
    isError: boolean;
    messages: string[];
};
/**
 * Handle inventory check and returns error message if the callback provided.
 */
declare const stripeStoreHandleInventoryCheck: () => Promise<string | null>;
declare const stripeStoreRetrievePayment: ({ clientSecret: _clientSecret, storybookForceStatus, }: {
    clientSecret: string | null;
    storybookForceStatus?: PaymentIntent['status'];
}) => Promise<{
    error: boolean;
    messages: string[];
    message?: undefined;
    paymentMethod?: undefined;
} | {
    error: boolean;
    message: string[];
    messages?: undefined;
    paymentMethod?: undefined;
} | {
    error: boolean;
    messages: string[];
    paymentMethod: string | import("@stripe/stripe-js").PaymentMethod | null | undefined;
    message?: undefined;
}>;
declare const stripeStoreConfirmPayment: () => Promise<void>;
/**
 * Init checkout session
 * @returns {boolean} whether or not the checkout session is successfully created
 */
declare const stripeStoreInitCheckoutSession: () => Promise<boolean>;
type CheckoutSessionUpdateRequest = {
    currency?: string;
    id: string;
    itemsAmount?: number;
    landedCostId?: string;
    metadata?: {
        key: string;
        value: string;
    }[];
    presentmentCountryCode: CountryCode | null;
};
/**
 * Update checkout session. Use for updating amount with landed cost id, or update session when cart items change
 */
declare const stripeStoreUpdateCheckoutSession: ({ currency, id, itemsAmount, landedCostId, presentmentCountryCode, }: CheckoutSessionUpdateRequest) => Promise<{
    errors: import("../../..").JsonError[];
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
export { initStripeElements, stripeStore, stripeStoreCleanupDomesticShippingSession, stripeStoreConfirmPayment, stripeStoreGetDomesticShippingSession, stripeStoreHandleInventoryCheck, stripeStoreInitCheckoutSession, stripeStoreMessageBasedOnStatus, stripeStorePrefetchLandedCost, stripeStoreReset, stripeStoreRetrievePayment, stripeStoreSaveDomesticShippingSession, stripeStoreTranslateAddressToLatin, stripeStoreUpdateCheckoutSession, };
