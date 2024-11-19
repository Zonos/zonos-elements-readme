export declare const colorPrefixes: readonly ["blue", "cyan", "green", "orange", "purple", "red", "gray", "glass"];
export declare const colorContrasts: readonly ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
export type ColorContrast = (typeof colorContrasts)[number];
export type ColorPrefix = (typeof colorPrefixes)[number];
export type Color = 'gray-0' | 'gray-50' | 'glass-0' | 'glass-50' | `${ColorPrefix}-${ColorContrast}` | 'gray-1000' | 'glass-1100' | 'glass-1200';
export declare const checkboxColorPrefix: readonly ["blue", "cyan", "green", "orange", "purple", "red", "gray"];
export type CheckboxColorPrefix = (typeof checkboxColorPrefix)[number];
