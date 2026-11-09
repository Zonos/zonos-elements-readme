/**
 * Run an init that the caller is not waiting on. The rejection is recorded
 * and not rethrown, so startup does not become an unhandled rejection.
 */
export declare const startZonosInit: (start: () => Promise<void>) => void;
