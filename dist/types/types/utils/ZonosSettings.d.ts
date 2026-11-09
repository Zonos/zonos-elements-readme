import type { CountryFields } from "../CountryFields";
import type { AppearanceSettingsQuery, CheckoutSettingsQuery, CountryCode, HelloSettingsQuery, LandedCostSettingsQuery, OnlineStoreSettingsQuery, OrganizationQuery, ShippingZonesQuery } from "../generated/graphql.internal.types";
import type { InclusivePriceConfigurationResponse } from "../InclusivePricing";
export type GenericZonosSettings = {
    /**
     * BigCommerce customer group IDs that should bypass Zonos Checkout.
     * @description When a logged-in BigCommerce customer belongs to one of these groups
     * (e.g. resellers), they will be redirected to BigCommerce's native checkout
     * instead of going through Zonos international checkout.
     */
    bigcommerceBypassCustomerGroupIds?: number[];
    /**
     * Bigcommerce domestic checkout country selector.
     * @description This is the field selector for the country select element in the bigcommerce domestic checkout page. All themes might have different selectors, so we need to allow this to be configured.
     */
    bigcommerceDomesticCheckoutCountrySelector?: string;
    /**
     * CSS selector for BigCommerce's native currency selector element.
     * @description When Hello is actively converting prices (user is in a
     * shipping zone and BC's native currency matches the store's source
     * currency), matching element(s) are hidden so shoppers don't toggle
     * BC's selector and conflict with Hello's conversion. Selectors vary
     * by theme, so this is configured per merchant.
     */
    bigcommerceNativeCurrencySelector?: string;
    /**
     * Whether to blur the currency while initializing Zonos to avoid price flickering.
     */
    blurCurrencyOnInit?: boolean;
    /**
     * Country that should be enable the custom address fields in the checkout based on the country user is from.
     */
    countryCustomAddressEnabled?: CountryCode[];
    /**
     * List of countries and
     */
    countryFields?: Record<CountryCode, CountryFields>;
    /**
     * List of countries that are considered domestic countries.
     */
    domesticCountries?: CountryCode[];
    /**
     * URL of the hosted checkout.
     */
    hostedCheckoutUrl?: string;
    /**
     * Whether to redirect users to BigCommerce domestic checkout when they select a disabled country in the international checkout and the store source currency is USD.
     */
    isBigcommerceDomesticCheckoutRedirectEnabled?: boolean;
    /**
     * Use custom address fields in the checkout based on the country user is from.
     */
    shouldEnabledCustomAddress?: boolean;
    /**
     * For Collect: when the carrier does not provide a logo via the landed cost
     * metadata (`collectLogoUrl`), fall back to the organization's appearance logo.
     * When disabled (default), no logo is shown unless the carrier provides one.
     */
    shouldFallbackToOrganizationLogoForCollect?: boolean;
    /**
     * Whether or not Canadian shopper has to consent that they are aware of some procedures must happen after checking out otherwise the order will be returned
     */
    shouldFedExShippingConsentForCanadianShopper?: boolean;
    /**
     * When true, checkout requires a Peru tax id and lets the shopper pick the document type.
     * The API sets this from an organization list so stores can be added without a client release.
     */
    shouldRequirePeruTaxId?: boolean;
    /**
     * Signed token for Google Places API iframe access.
     */
    signedTokenGooglePlaces?: string;
    stripeCountryFieldLabels?: {
        [_key in CountryCode]?: {
            stateRequired: boolean;
            zipRequired: boolean;
        };
    };
    /**
     * List of countries that are allowed to use USD denominated cards for settlement.
     */
    usdSettlementCountryEnabled?: CountryCode[];
    /**
     * Ship-to countries affected by the EU right-of-withdrawal regulation. When the
     * buyer's destination is in this list (and the merchant has opted into the EU
     * withdrawal policy), the withdrawal notice is shown above the Pay button.
     * Sourced from the API so the affected-country list is controlled centrally
     * rather than hardcoded in the storefront; an absent/empty list shows it for no
     * country.
     */
    withdrawalCountryEnabled?: CountryCode[];
};
export type ZonosSettingsBase = AppearanceSettingsQuery & CheckoutSettingsQuery & HelloSettingsQuery & OnlineStoreSettingsQuery & OrganizationQuery & ShippingZonesQuery & {
    inclusivePriceConfigurations: InclusivePriceConfigurationResponse;
    landedCostSettings: NonNullable<LandedCostSettingsQuery['landedCostSettings']>;
};
export type ZonosSettings = ZonosSettingsBase & {
    genericSettings: GenericZonosSettings | null;
};
