import type { CurrencyCode } from "../../../../types/generated/graphql.internal.types";
export declare const currencyFormat: ({ amount, currency, }: {
    amount: number;
    currency?: CurrencyCode;
}) => string;
