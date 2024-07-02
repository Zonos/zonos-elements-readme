export type TargetFormat = {
    currencyCode: string;
    decimalDelimiter: string;
    scale: number;
    symbol: string;
    symbolLocation: string;
    thousandsDelimiter: string;
};
type ReturnType = {
    exchangeRate: {
        rate: number;
        targetFormat: TargetFormat;
    } | null;
    maxAge: number | null;
};
export declare const getExchangeRate: ({ country, isGuaranteed, sourceCurrency, targetCurrency, }: {
    country: string | null;
    isGuaranteed: boolean;
    sourceCurrency: string;
    targetCurrency: string;
}) => Promise<ReturnType>;
export {};
