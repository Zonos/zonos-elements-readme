import type { NormalizedTempCart } from "../types/checkout/api/NormalizedTempCart";
type TempCartResult = {
    cartData: NormalizedTempCart;
    storeFaviconUrl: string;
    storeLogoUrl: string;
};
export declare const getTempCartById: ({ cartId, retries, }: {
    cartId: string;
    retries: number;
}) => Promise<TempCartResult | null>;
export {};
