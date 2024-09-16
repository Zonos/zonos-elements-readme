import type { TargetFormat } from "../../api/getExchangeRate";
import type { CurrencyCode } from "../../../../types/generated/graphql.customer.types";
type NumberFormatParams = {
    amount: number;
    currency: CurrencyCode;
    targetFormat: TargetFormat | null;
};
/**
 * This function only to format the number in
 * @returns
 */
export declare const numberFormat: ({ amount, currency, targetFormat, }: NumberFormatParams) => string;
export {};
