import type { CountryCode } from "../../../types/index";
/**
 * Drop a remembered Hello country when widgetVisibility would hide the
 * widget for it, then fall back to geo.
 *
 * Does not mutate the localization store — the caller applies the returned
 * country. Pass `geoCountry` when init already fetched IP localization so
 * discard does not wait on a second round trip. Pass `urlCountryAtLoad`
 * from the URL as it was at page load (before init writes `zCountry` for
 * URL_PARAM merchants). Do not omit it after a live URL write — the
 * default is `null`, not the current URL. Storage is cleared when geo
 * succeeds, or when a load-time URL country won and the stored country
 * would be hidden.
 */
export declare const reconcileRememberedCountryOverride: ({ geoCountry, urlCountryAtLoad, }?: {
    geoCountry?: CountryCode | null;
    urlCountryAtLoad?: CountryCode | null;
}) => Promise<CountryCode | null>;
