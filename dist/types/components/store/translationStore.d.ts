import { stringsBase } from "./translationStore/strings.base";
import type { Locale_ElementsSupportedLocationCode_Enum } from "../../types/generated/graphql.frontend.types";
type TranslationStore = {
    translatedChunks: typeof stringsBase;
};
declare const translationStore: TranslationStore;
export { translationStore };
export declare const translationStoreUpdateLanguage: (language: Locale_ElementsSupportedLocationCode_Enum | {
    _placeholder?: never;
}) => void;
/**
 * Extracts variables pattern "[pattern]" from a string
 * @example
 * type Variables = ExtractVariables<'[percentage] GST due on any order above [threshold].'>
 *
 * // Variables = 'percentage' | 'threshold'
 */
type ExtractVariables<S extends string> = S extends `${infer _Start}[${infer Var}]${infer End}` ? Var | ExtractVariables<End> : never;
/**
 * Require second argument to be an object with keys that match the variables in the string. If no variables are present, second argument is optional.
 * @example
 * type Params = TranslateParams<'[percentage] GST due on any order above [threshold].'>
 * // Params = ['[percentage] GST due on any order above [threshold].', variables: { percentage: string, threshold: string }]
 */
type TranslateParams<T extends string> = ExtractVariables<T> extends never ? [T, variables?: never] : [T, variables: Record<ExtractVariables<T>, string>];
export type ITranslationKey = keyof typeof stringsBase;
/**
 * Translate a string with variables if variable pattern is present in the string
 * @example
 * // Require variables:
 * translate('[percentage] GST due on any order above [threshold].', { percentage: '5%', threshold: '$100' })
 * // No variables:
 * translate('Above de minimis threshold for')
 */
export declare const translate: <T extends keyof typeof stringsBase>(...[key, replacement]: TranslateParams<T>) => string;
