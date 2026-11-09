export type StorageArea = 'local' | 'session';
export type StorageOperation = 'getItem' | 'removeItem' | 'setItem';
declare global {
    interface Window {
        /**
         * Shared across script bundles. Each Rollup entry has its own module scope.
         */
        __zonosReportedBlockedStorage?: Set<string>;
    }
}
/**
 * Record a blocked storage read or write on the existing error log.
 * A throw before `window.Zonos` exists is swallowed and does not use up
 * the per-page dedupe slot, so the later startup read can still report it.
 */
export declare const reportBlockedStorage: (area: StorageArea, operation: StorageOperation, key: string, error: unknown) => void;
