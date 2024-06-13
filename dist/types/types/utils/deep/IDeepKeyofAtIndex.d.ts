import type { IRecursionLimited } from "./IDeepKeyof";
type IPrev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
type IRecursiveDepth = IPrev[number];
type IDeepKeyofObjAndArray<T extends object, Depth extends IRecursiveDepth = 4> = IRecursionLimited<Depth, {
    [K in Extract<keyof T, string>]: T[K] extends unknown[] ? T[K][number] extends object ? `${K}[number].${IDeepKeyofObjAndArray<T[K][number], IPrev[Depth]>}` : `${K}[number]` : T[K] extends object ? `${K}.${IDeepKeyofObjAndArray<T[K], IPrev[Depth]>}` : K;
}[Extract<keyof T, string>]>;
export type IDeepKeyofAtIndex<T extends object, Depth extends IRecursiveDepth = 4> = {
    [Path in IDeepKeyofObjAndArray<T, Depth>]: Path extends `${string}[number]${string}` ? Path : Path extends `${string}[number]` ? Path : never;
}[IDeepKeyofObjAndArray<T, Depth>];
/**
 * Extracts a type for a field given a property path string.
 */
export type IDeepPropertyTypeAtIndex<T extends object, KeyPath extends IDeepKeyofObjAndArray<T, Depth>, Depth extends IRecursiveDepth = 4> = IRecursionLimited<Depth, KeyPath extends `${infer Top}.${infer Rest}` ? Top extends `${infer ArrayField}[number]` ? ArrayField extends keyof T ? T[ArrayField] extends unknown[] ? T[ArrayField][number] extends object ? Rest extends IDeepKeyofObjAndArray<T[ArrayField][number], IPrev[Depth]> ? IDeepPropertyTypeAtIndex<T[ArrayField][number], Rest, IPrev[Depth]> : never : never : never : never : Top extends keyof T ? T[Top] extends object ? Rest extends IDeepKeyofObjAndArray<T[Top], IPrev[Depth]> ? IDeepPropertyTypeAtIndex<T[Top], Rest, IPrev[Depth]> : never : never : never : KeyPath extends `${infer ArrayField}[number]` ? ArrayField extends keyof T ? T[ArrayField] extends unknown[] ? T[ArrayField][number] : never : never : KeyPath extends keyof T ? T[KeyPath] : never>;
export {};
