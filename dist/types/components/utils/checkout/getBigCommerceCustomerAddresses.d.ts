import type { StripeStoreContactOption } from "../../store/checkout/stripe";
import type { BigCommerceCheckoutResponse } from "./bigcommerceStorefrontApi";
/**
 * Extract a logged-in BigCommerce shopper's known addresses from a Storefront
 * API checkout response and convert them into the shape that `zonos-address`
 * consumes (`StripeStoreContactOption[]`).
 *
 * Combines the saved address book (`customer.addresses`) with any address
 * already attached to the active checkout's consignments, so a shopper who
 * just selected a one-off shipping address on BC native checkout still sees
 * that address in the international checkout's address picker. Deduplicates
 * by line1 + line2 + postal code + country.
 *
 * Callers must supply `isShippable` so addresses outside the merchant's
 * shipping zones are filtered out — international checkout can't fulfill
 * them and showing them would just confuse the shopper. The optional
 * `selectedCountryCode` floats addresses in that country to the top of the
 * list so the shopper's current destination is the default choice.
 *
 * Returns an empty list for guest sessions (no `customer.id`) or when the
 * checkout response is missing the relevant includes.
 */
export declare const getBigCommerceCustomerAddresses: (checkout: BigCommerceCheckoutResponse | null, options: {
    selectedCountryCode?: string;
    isShippable: (countryCode: string) => boolean;
}) => StripeStoreContactOption[];
