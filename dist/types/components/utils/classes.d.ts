/**
 * Turn an array of classes into a readable string
 * @param groupClasses
 * @example
 * const foo = undefined;
 * const qwe = true;
 * const qwe = false;
 * classes([foo && 'foo', qwe && 'bar', qwe && 'baz']) // 'bar'
 */
export declare const classes: (groupClasses: (string | false | undefined | null)[]) => string;
