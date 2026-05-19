import type { CartCheckoutResult } from "../types/checkout/api/NormalizedTempCart";
export declare const getCartInfoById: ({ cartId, retries, }: {
    cartId: string;
    retries: number;
}) => Promise<(CartCheckoutResult & {
    zonosMode: "production" | "test" | null;
}) | null>;
