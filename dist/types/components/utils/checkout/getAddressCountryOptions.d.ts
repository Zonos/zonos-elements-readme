import type { ICountryJson } from "../../../types/ICountryJson";
export type ICountryOption = {
    label: string;
    value: string;
};
/**
 * Builds the country options for an address form's country dropdown.
 *
 * Shipping addresses are restricted to the merchant's shipping zone, since we
 * can only fulfill orders to those countries. Billing addresses are not — a
 * shopper's card can be billed to any country, so restricting the billing
 * country prevents them from checking out at all (05CHECK-915).
 *
 * When the full country list is unavailable we fall back to the shipping zone
 * so the dropdown is never empty.
 */
export declare const getAddressCountryOptions: ({ allCountries, shippingZoneCountries, type, }: {
    /**
     * All countries, regardless of shipping zone. `null` until localization has
     * initialized or when the countries request failed.
     */
    allCountries: ICountryJson | null;
    /**
     * Countries in the merchant's shipping zone. `null` until localization has
     * initialized.
     */
    shippingZoneCountries: ICountryJson | null;
    type: "billing" | "shipping";
}) => ICountryOption[];
