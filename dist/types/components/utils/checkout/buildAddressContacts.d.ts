import type { ContactOption, StripeAddressElementChangeEvent } from '@stripe/stripe-js';
/**
 * Map a Stripe address change event value into a Stripe `ContactOption`, used to
 * pre-seed the address element's saved-address (contacts) list on remount.
 */
export declare const mapAddressEventToContact: (value: StripeAddressElementChangeEvent["value"]) => ContactOption;
/**
 * Build a dedupe key for a contact so we don't add a duplicate saved address. Compared
 * case- and whitespace-insensitively on the distinguishing fields.
 */
export declare const getContactDedupKey: (contact: ContactOption) => string;
/**
 * Prepend the currently selected address (from the latest Stripe address event) to the
 * list of default saved addresses so it stays selected when the address element is
 * remounted (e.g. navigating between the customer and shipping steps). Avoids adding a
 * duplicate contact when the current address already exists in the list.
 */
export declare const buildAddressContacts: ({ currentEvent, defaultAddress, }: {
    currentEvent: StripeAddressElementChangeEvent | null;
    defaultAddress: ContactOption[];
}) => ContactOption[];
