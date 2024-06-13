export type TargetFormat = {
    currencyCode: string;
    decimalDelimiter: string;
    scale: number;
    symbol: string;
    symbolLocation: string;
    thousandsDelimiter: string;
};
export declare const getExchangeRate: ({ country, isGuaranteed, sourceCurrency, targetCurrency, }: {
    country: string | null;
    isGuaranteed: boolean;
    sourceCurrency: string;
    targetCurrency: string;
}) => Promise<{
    exchangeRate: null;
    maxAge: null;
} | {
    exchangeRate: {
        rate: number;
        targetFormat: TargetFormat;
    };
    maxAge: number;
}>;
