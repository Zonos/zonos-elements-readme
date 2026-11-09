import type { CurrencyCode } from "../../../types/generated/graphql.internal.types";
/**
 * Caches live "configured currency → presentment currency" rates used to convert
 * the EU withdrawal return-shipping cap into the currency the buyer actually pays
 * in. A @stencil/store so that, when a lazily-fetched rate resolves, components
 * rendering the notice re-render and pick up the converted amount. Keyed by
 * `${sourceCurrency}_${targetCurrency}`; a null value means the lookup failed.
 */
declare const euWithdrawalRateStore: {
    crossRates: Record<string, number | null>;
};
export { euWithdrawalRateStore };
export declare const euWithdrawalCrossRateKey: (sourceCurrency: CurrencyCode, targetCurrency: CurrencyCode) => string;
/**
 * Lazily fetch the current configured→presentment rate (fire-and-forget). Guarded
 * so each pair is fetched at most once; the result lands in the reactive store,
 * which triggers a re-render that then shows the presentment estimate.
 */
export declare const ensureEuWithdrawalCrossRate: (sourceCurrency: CurrencyCode, targetCurrency: CurrencyCode, shipToCountry: string) => void;
