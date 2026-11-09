import type { CountryCode } from "../../../types/generated/graphql.internal.types";
/**
 * Visibility rules for Hello, ignoring whether localization has finished
 * loading. Used during init reconcile before `localizationLoaded` is set.
 * Pass `countryCode` to evaluate a remembered country instead of the
 * currently selected one.
 */
export declare const getHelloWidgetVisibility: (showLog?: boolean, countryCode?: CountryCode | null) => boolean;
/**
 * Whether the Hello widget should be shown for the current shopper. This is the
 * single source of truth for Hello's visibility decision — the `zonos-hello`
 * component renders by it, and other features (e.g. BigCommerce cart shipping
 * cleanup) gate on it so their behavior stays in lockstep with what the shopper
 * actually sees.
 *
 * @param showLog - emit a debug log when the shopper is not in a shipping zone.
 * Defaults to `true`; pass `false` from non-rendering callers to avoid log
 * noise.
 */
export declare const shouldShowHelloWidget: (showLog?: boolean) => boolean;
