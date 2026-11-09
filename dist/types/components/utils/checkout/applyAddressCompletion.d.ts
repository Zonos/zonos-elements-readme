import type { StripeAddressElementChangeEvent } from '@stripe/stripe-js';
/**
 * Values captured in the completion dialog for the fields that were missing from the Stripe
 * Link address. Only the keys that were actually requested (and therefore provided) are present.
 * When the last name is missing we also capture the first name, so the customer can correct the
 * whole name at once (Link often stores just a first name in its single name input).
 */
export type AddressCompletionSubmit = {
    firstName?: string;
    lastName?: string;
    postal_code?: string;
    state?: string;
};
/**
 * Merge the fields captured in the completion dialog back into a Stripe shipping address event,
 * rebuilding the full name from the extracted first name and the provided/known last name and
 * marking the address complete. Fields the customer wasn't asked for are left untouched.
 *
 * Pure: returns a new event object rather than mutating the input, so it can be unit-tested and
 * assigned straight to the store.
 */
export declare const applyAddressCompletion: ({ data, event, }: {
    data: AddressCompletionSubmit;
    event: StripeAddressElementChangeEvent;
}) => StripeAddressElementChangeEvent;
