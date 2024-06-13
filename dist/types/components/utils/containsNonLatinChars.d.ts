type Params = {
    city: string;
    country: string;
    line1: string;
    line2: string;
    name: string;
    postal_code: string;
    state: string;
};
type Result = Partial<Record<keyof Params, boolean>>;
export declare const isTextContainsNonLatinChars: (text: string) => boolean;
/**
 * Check if the given address object contains non-latin characters
 * @returns an object with the same keys as the input object, and a boolean value indicating if the value contains non-latin characters
 */
export declare const containsNonLatinChars: (params: Params) => Result;
export {};
