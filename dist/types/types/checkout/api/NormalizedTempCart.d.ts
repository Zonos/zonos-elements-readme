import type { CartAdjustmentType, CountryCode, CurrencyCode, ItemMeasurementType, ItemType, ItemUnitOfMeasure } from "../../generated/graphql.internal.types";
export type NormalizedItemAttribute = {
    key: string;
    value: string;
};
export type NormalizedTempCartItem = {
    amount: number;
    attributes: NormalizedItemAttribute[];
    countryOfOrigin: CountryCode | null;
    currencyCode: CurrencyCode;
    description: string | null;
    id: string;
    imageUrl: string | null;
    itemType: ItemType | null;
    measurements: {
        type: ItemMeasurementType;
        unitOfMeasure: ItemUnitOfMeasure;
        value: number;
    }[];
    name: string | null;
    productId: string | null;
    quantity: number;
    sku: string | null;
};
export type NormalizedTempCart = {
    adjustments: {
        amount: number;
        currencyCode: CurrencyCode;
        description: string | null;
        productId: string | null;
        promoCode?: string | null;
        sku: string | null;
        type: CartAdjustmentType;
    }[];
    createdAt: string;
    credentialToken: string;
    id: string;
    items: NormalizedTempCartItem[];
    metadata: {
        key: string;
        value: string;
    }[];
    storeBaseUrl: string;
    storeId: number;
};
