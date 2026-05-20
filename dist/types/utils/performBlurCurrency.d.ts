export declare const removeBlurCurrency: () => Promise<void>;
/**
 * This function is used to remove the blur effect from a specific element. (combined with performBlurSpecificElement)
 * @returns void
 */
export declare const removeBlurSpecificElement: ({ specificSelector, timeoutId, }: {
    specificSelector: HTMLElement;
    /**
     * Return timeout id from performBlurSpecificElement
     */
    timeoutId: NodeJS.Timeout | undefined;
}) => Promise<void>;
export declare const performBlurSpecificElement: (specificSelector: HTMLElement) => NodeJS.Timeout | undefined;
export declare const performBlurCurrency: () => void;
