export declare const setupCartData: (cartId: string) => Promise<{
    cartData: import("../../types/checkout/api/NormalizedTempCart").NormalizedTempCart;
    storeFavicon: string;
    storeId: number;
    storeLogo: string;
    zonosApiKey: string;
} | null>;
