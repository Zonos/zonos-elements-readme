/**
 * Extracts the zonosQaUrl from the url
 *
 * @param url - url to extract zonosQaUrl from
 *
 * **NOTE**: value of zonosQaUrl param should be without protocol, allowed characters are: a-z, A-Z, 0-9, -, _
 * @example
 * valid: https://www.zonos.com/?zonosQaUrl=some-feature-v988
 * invalid: https://www.zonos.com/?zonosQaUrl=https://zonos-something
 */
export declare const extractZonosQaUrl: (url: string | undefined) => string | null;
