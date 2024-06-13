type Params = {
    date: Date;
    /**
     * Format options for Intl.DateTimeFormat
     * @default {dateStyle:'full'} 'Wednesday, May 15, 2024'
     */
    formatOptions?: Intl.DateTimeFormatOptions;
};
export declare const formatDate: ({ date, formatOptions, }: Params) => string;
export {};
