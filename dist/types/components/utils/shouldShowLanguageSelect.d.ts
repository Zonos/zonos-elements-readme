/**
 * Whether to offer the language selector. Hidden when the merchant has narrowed
 * `appearanceSettings.supportedLocales` to a single language — there is nothing to pick, so the
 * trigger would only open a one-item dialog. Checkout and Hello both gate their footer trigger on
 * this so the two surfaces stay in lockstep.
 */
export declare const shouldShowLanguageSelect: () => boolean;
