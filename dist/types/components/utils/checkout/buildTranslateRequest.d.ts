import type { StripeAddressElementChangeEvent } from '@stripe/stripe-js';
import type { containsNonLatinChars } from "../containsNonLatinChars";
import type { ValidateAddressRequest } from "../../../types/checkout/api/ValidateAddress";
type Params = {
    addressInvalidCharactersList: ReturnType<typeof containsNonLatinChars> | null;
    billingAddressInvalidCharactersList: ReturnType<typeof containsNonLatinChars> | null;
    stripeAddressEventData: StripeAddressElementChangeEvent | null;
    stripeBillingAddressEventData: StripeAddressElementChangeEvent | null;
    stripeShippingSameAsBilling: boolean;
};
/**
 * This function builds the request body for validating an address. It checks if the address and billing address are ready and if they contain any invalid characters.
 * If there are non-latin character to translate, returns an object with the address fields that have invalid characters, the destination country, and the first and last name.
 * If the conditions are not met, it returns null.
 *
 * @param {Object} params - The parameters for the function.
 * @param {ReturnType<typeof containsNonLatinChars> | null} params.addressInvalidCharactersList - The list of address fields that contain invalid characters.
 * @param {ReturnType<typeof containsNonLatinChars> | null} params.billingAddressInvalidCharactersList - The list of billing address fields that contain invalid characters.
 * @param {StripeAddressEventData} params.stripeAddressEventData - The Stripe event data for the address.
 * @param {StripeAddressEventData} params.stripeBillingAddressEventData - The Stripe event data for the billing address.
 * @param {boolean} params.stripeShippingSameAsBilling - A flag indicating whether the shipping address is the same as the billing address.
 *
 * @returns {ValidateAddressRequest | null} - An object that contains the address fields that have invalid characters, the destination country, and the first and last name. If the conditions are not met, the function returns null.
 */
export declare const buildTranslateRequest: ({ addressInvalidCharactersList, billingAddressInvalidCharactersList, stripeAddressEventData, stripeBillingAddressEventData, stripeShippingSameAsBilling, }: Params) => ValidateAddressRequest | null;
export {};
