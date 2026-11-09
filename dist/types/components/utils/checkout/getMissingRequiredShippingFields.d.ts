import type { StripeAddressElementChangeEvent } from '@stripe/stripe-js';
/**
 * Minimum number of characters we treat as a valid postal code. Mirrors the
 * landed-cost readiness check in `stripe.ts` (`isAddressReadyToRequestLandedCost`).
 */
export declare const MIN_POSTAL_CODE_LENGTH = 3;
export type MissingShippingFieldKey = 'lastName' | 'postal_code' | 'state';
export type MissingShippingField = {
    key: MissingShippingFieldKey;
};
/**
 * The subset of per-country field requirements this check needs. Both the Zonos
 * `CountryFields` config and the Stripe-derived country field list satisfy this shape,
 * so callers can pass whatever `getCountryField` (in `stripe.ts`) returns.
 */
export type RequiredFieldConfig = {
    stateRequired: boolean;
    zipRequired: boolean;
} | null;
/**
 * Determine which Zonos-required shipping fields are still missing even though Stripe
 * reports the address as complete.
 *
 * Stripe Link autofills a saved address from a single name input, so it may return only a
 * first name and, for some countries, omit the state / postal code while still reporting
 * `complete: true`. This surfaces the fields Zonos needs for international shipping so the
 * customer can supply just those, without duplicating fields Stripe already captures.
 *
 * Pure: the caller resolves `countryField` (via `getCountryField`) and passes it in, so
 * this can be unit-tested without the stores.
 */
export declare const getMissingRequiredShippingFields: ({ countryField, event, }: {
    countryField: RequiredFieldConfig;
    event: StripeAddressElementChangeEvent | null;
}) => MissingShippingField[];
