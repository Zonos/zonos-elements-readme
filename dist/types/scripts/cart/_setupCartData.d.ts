export declare const setupCartData: (cartId: string) => Promise<{
    cartData: import("../..").NormalizedTempCart;
    storeFavicon: string;
    storeId: number;
    storeLogo: string;
    zonosApiKey: string;
} | null>;
