import type { HelloCurrencyBehavior, HelloMobileLocation, HelloPeekMessageBehavior, HelloRestrictionBehavior, Mode } from "../generated/graphql.customer.types";
export type HelloConfig = {
    anchorElementSelector: string;
    cartUrlPattern: string | null;
    /**
     * The behavior to use when determining the country to use for the user.
     * @default 'URL_PARAM'
     */
    countryOverrideBehavior?: 'URL_PARAM' | 'SESSION';
    currencyBehavior: HelloCurrencyBehavior;
    currencyElementSelector: string;
    excludedUrlPatterns: Array<string>;
    homepageUrlPattern: string | null;
    mobileLocation: HelloMobileLocation;
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
};
