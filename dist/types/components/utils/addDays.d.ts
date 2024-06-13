type Params = {
    days: number;
    /**
     * Format options for Intl.DateTimeFormat
     * @default {day:'numeric',weekday:'long',year:'numeric'} Thursday 3, 2023
     */
    formatOptions?: Intl.DateTimeFormatOptions;
};
/**
 * Add days to current date and return formatted date with Intl.DateTimeFormat
 * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */
export declare const addDays: ({ days, formatOptions, }: Params) => string;
export {};
