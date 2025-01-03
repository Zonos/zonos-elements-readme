import type { Appearance } from '@stripe/stripe-js';
type SupportedPropertyName = '-moz-osx-font-smoothing' | '-webkit-font-smoothing' | '-webkit-text-fill-color' | 'backgroundColor' | 'border' | 'borderBottom' | 'borderBottomColor' | 'borderBottomLeftRadius' | 'borderBottomRightRadius' | 'borderBottomStyle' | 'borderBottomWidth' | 'borderColor' | 'borderLeft' | 'borderLeftColor' | 'borderLeftStyle' | 'borderLeftWidth' | 'borderRadius' | 'borderRight' | 'borderRightColor' | 'borderRightStyle' | 'borderRightWidth' | 'borderStyle' | 'borderTop' | 'borderTopColor' | 'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderTopStyle' | 'borderTopWidth' | 'borderWidth' | 'boxShadow' | 'color' | 'fill' | 'fontFamily' | 'fontSize' | 'fontVariant' | 'fontVariation' | 'fontWeight' | 'letterSpacing' | 'lineHeight' | 'margin' | 'marginBottom' | 'marginLeft' | 'marginRight' | 'marginTop' | 'opacity' | 'outline' | 'outlineOffset' | 'padding' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'textDecoration' | 'textShadow' | 'textTransform' | 'transition';
/**
 * @ref https://stripe.com/docs/elements/appearance-api?platform=web#all-rules
 * @example
 * '.Label': {
 *  color: '#000000',
 *  fontSize: '16px',
 *  fontWeight: '400',
 * }
 */
export type StripeRuleType = {
    [selector: string]: {
        [cssPropertyName in SupportedPropertyName]?: string;
    };
};
export type StripeVariablesType = Appearance['variables'];
export {};
