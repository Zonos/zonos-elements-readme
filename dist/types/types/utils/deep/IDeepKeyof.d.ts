export type IPrev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export type IRecursiveDepth = IPrev[number];
type IDelimiter = '.';
/**
 * Constructs a union of all possible keys with primitive values, with nested properties separated with a delimiter.
 *
 * Default recursion depth limit is 4.
 *
 * @example 'person.age'
 *
 */
export type IDeepKeyof<T extends object, Depth extends IRecursiveDepth = 4> = IRecursionLimited<Depth, {
    [K in Extract<keyof T, string>]: T[K] extends Array<unknown> ? K : T[K] extends object ? `${K}${IDelimiter}${IDeepKeyof<T[K], IPrev[Depth]>}` : K;
}[Extract<keyof T, string>]>;
/**
 * Extracts a type for a field given a property path string.
 */
export type IDeepPropertyType<T extends object, KeyPath extends IDeepKeyof<T, Depth>, Depth extends IRecursiveDepth = 4> = IRecursionLimited<Depth, KeyPath extends `${infer Top}${IDelimiter}${infer Rest}` ? Top extends keyof T ? T[Top] extends object ? Rest extends IDeepKeyof<T[Top], IPrev[Depth]> ? IDeepPropertyType<T[Top], Rest, IPrev[Depth]> : never : never : never : KeyPath extends keyof T ? T[KeyPath] : never>;
export type IRecursionLimited<Depth extends IRecursiveDepth, T> = Depth extends never ? never : T;
export {};
