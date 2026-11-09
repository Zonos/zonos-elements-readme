declare global {
    interface Window {
        /**
         * Shared across script bundles. Each Rollup entry has its own module scope.
         */
        __zonosConstructorCapture?: {
            listener: (event: {
                reason: unknown;
            }) => void;
            reported: Set<string>;
        };
    }
}
/**
 * Copy a missing-constructor failure onto the existing error log.
 * Stencil catches `Constructor for "tag#mode" was not found` and passes that
 * Error to `console.error`. One report is sent per tag, then the original
 * console.error still runs. This does not request the chunk again.
 */
export declare const installConstructorCapture: () => void;
