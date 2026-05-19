import type { CountryCode, CurrencyCode, HelloCurrencyBehavior, HelloDesktopLocation, HelloMobileLocation, HelloPeekMessageBehavior, HelloRestrictionBehavior, HelloSettingFragment, Mode } from "../generated/graphql.internal.types";
export type CountryOverrideBehavior = 'URL_PARAM' | 'SESSION';
/**
 * @deprecated Use `countryDisplayRules.widgetVisibility.behavior` instead.
 * Can still be set to override `countryDisplayRules.widgetVisibility.behavior`.
 */
export type ShowForCountries = 'ALL' | 'ONLY_SHIPPABLE' | CountryCode[];
/**
 * @deprecated Use `countryDisplayRules.countrySelector.behavior` instead.
 * Can still be set to override `countryDisplayRules.countrySelector.behavior`.
 */
export type ShowCountryList = 'ALL' | 'ONLY_SHIPPABLE' | CountryCode[];
export type CountryDisplayRules = HelloSettingFragment['countryDisplayRules'];
export type CountrySelectorRules = CountryDisplayRules['countrySelector'];
export type WidgetVisibilityRules = CountryDisplayRules['widgetVisibility'];
export type HelloConfig = {
    anchorElementSelector: string;
    cartUrlPattern: string | null;
    /**
     * Rules for controlling country display in the Hello widget.
     * Provides fine-grained control over which countries appear in the country selector dropdown
     * and which countries the widget is visible for, with include/exclude lists.
     */
    countryDisplayRules?: CountryDisplayRules;
    /**
     * The behavior to use when determining the country to use for the user.
     * @default 'URL_PARAM'
     */
    countryOverrideBehavior?: CountryOverrideBehavior;
    currencyBehavior: HelloCurrencyBehavior;
    currencyElementSelector: string;
    desktopLocation?: HelloDesktopLocation | null;
    excludedUrlPatterns: Array<string>;
    homepageUrlPattern: string | null;
    mobileLocation: HelloMobileLocation | null;
    mode: Mode;
    /**
     * Position of floating hello if `anchorElementSelector` is not found after 3 seconds
     *
     * null: don't render if not found
     *
     * @default null
     */
    notFoundElementFallback: HelloMobileLocation | null;
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
     * @deprecated Use `countryDisplayRules.countrySelector` instead.
     * When set, overrides `countryDisplayRules.countrySelector.behavior`.
     * @default ONLY_SHIPPABLE
     */
    showCountryList?: ShowCountryList;
    /**
     * @deprecated Use `countryDisplayRules.widgetVisibility` instead.
     * When set, overrides `countryDisplayRules.widgetVisibility.behavior`.
     * @default ONLY_SHIPPABLE
     */
    showForCountries?: ShowForCountries;
    visibilityStatus?: 'ENABLED' | 'DISABLED';
    /**
     * Diameter of the collapsed Hello widget in pixels. Clamped to the supported
     * range at render time. When `null`, the widget falls back to the default size.
     */
    widgetSize: number | null;
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
