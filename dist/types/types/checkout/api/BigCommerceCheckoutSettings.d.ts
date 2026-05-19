/**
 * Value surfaced by BigCommerce's `/v3/checkouts/settings` endpoint for the
 * `guest_checkout_type` field. `no_guest_checkout` is the signal Zonos uses
 * to require login before opening the international checkout.
 */
export type BcGuestCheckoutType = 'allow_guest' | 'guest_checkout' | 'no_guest_checkout' | (string & {});
export type BigCommerceCheckoutSettingsPayload = {
    storeHash: string;
};
export type BigCommerceCheckoutSettingsResponse = {
    guestCheckoutType: BcGuestCheckoutType | null;
};
