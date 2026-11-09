/**
 * Returns the localized EU withdrawal notice text to render above the Pay button,
 * or null when it shouldn't be shown. The notice appears only when the merchant
 * has opted in (status ENABLED) and the buyer is shipping to a country flagged by
 * the API as affected by the regulation (`genericSettings.withdrawalCountryEnabled`).
 * When a maximum return-shipping cap is configured the copy includes the amount;
 * otherwise it uses the no-maximum variant.
 */
export declare const getEuWithdrawalNoticeText: (shipToCountry: string | undefined) => string | null;
