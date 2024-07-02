import type { CurrencyCode } from "../../../../types/generated/graphql.customer.types";
export declare const currencyFormat: ({ amount, currency, }: {
    amount: number;
    currency?: CurrencyCode;
}) => string;
