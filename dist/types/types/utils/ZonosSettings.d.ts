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
     * Whether or not Canadian shopper has to consent that they are aware of some procedures must happen after checking out otherwise the order will be returned
     */
    shouldFedExShippingConsentForCanadianShopper?: boolean;
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
};
export type ZonosSettingsBase = AppearanceSettingsQuery & CheckoutSettingsQuery & HelloSettingsQuery & OnlineStoreSettingsQuery & OrganizationQuery & ShippingZonesQuery & {
    inclusivePriceConfigurations: InclusivePriceConfigurationResponse;
    landedCostSettings: NonNullable<LandedCostSettingsQuery['landedCostSettings']>;
};
export type ZonosSettings = ZonosSettingsBase & {
    genericSettings: GenericZonosSettings | null;
};
