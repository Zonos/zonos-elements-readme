export type CustomEventMap = {
    legacyCheckoutError: string;
    'zonos-checkout-success': {
        message: string;
    };
};
/**
 * Strongly typed custom event creation for all available events in zonos-checkout project
 */
export declare const createCustomEvent: <T extends keyof CustomEventMap | (string & {
    _placeholder?: never;
})>(eventName: T, detail?: T extends keyof CustomEventMap ? CustomEventMap[T] : unknown) => CustomEvent<T extends keyof CustomEventMap ? CustomEventMap[T] : unknown>;
