import type { CountryCode, CurrencyCode, HelloCurrencyBehavior, HelloMobileLocation, HelloPeekMessageBehavior, HelloRestrictionBehavior, Mode } from "../generated/graphql.customer.types";
export type CountryOverrideBehavior = 'URL_PARAM' | 'SESSION';
export type ShowForCountries = 'ALL' | 'ONLY_SHIPPABLE' | CountryCode[];
export type ShowCountryList = 'ALL' | 'ONLY_SHIPPABLE' | CountryCode[];
export type HelloConfig = {
    anchorElementSelector: string;
    cartUrlPattern: string | null;
    /**
     * The behavior to use when determining the country to use for the user.
     * @default 'URL_PARAM'
     */
    countryOverrideBehavior?: CountryOverrideBehavior;
    currencyBehavior: HelloCurrencyBehavior;
    currencyElementSelector: string;
    desktopLocation?: HelloMobileLocation | null;
    excludedUrlPatterns: Array<string>;
    homepageUrlPattern: string | null;
    mobileLocation: HelloMobileLocation | null;
    mode: Mode;
    organization: string;
    peekMessageBehavior: HelloPeekMessageBehavior;
    peekMessageDelay: number;
    productAddToCartElementSelector: string | null;
    productDescriptionElementSelector: string | null;
    productDetailUrlPattern: string | null;
    productListUrlPattern: string | null;
    productTitleElementSelector: string | null;
    restrictionBehavior: HelloRestrictionBehavior;
    /**
     * The countries to include in the country list dropdown of the Hello widget.
     * @default ONLY_SHIPPABLE
     */
    showCountryList?: ShowCountryList;
    /**
     * The countries to show the widget for.
     * @default ONLY_SHIPPABLE
     */
    showForCountries?: ShowForCountries;
    visibilityStatus?: 'ENABLED' | 'DISABLED';
    /**
     * Callback function to run after the Hello widget has been initialized. This should be triggered only once when hello is attached to the DOM.
     * **Note**: If hello is detached from the DOM and reattached, this callback will be called again.
     * @param params - The parameters containing the country code and currency code that hello is initialized with.
     */
    onInitSuccess?: (params: {
        countryCode: CountryCode;
        currencyCode: CurrencyCode;
    }) => Promise<void>;
};
