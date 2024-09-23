import type { CartAdjustmentType, CountryCode, CurrencyCode, ItemMeasurementType, ItemType, ItemUnitOfMeasure } from "../../generated/graphql.customer.types";
export type NormalizedTempCartItem = {
    amount: number;
    attributes: {
        key: string;
        value: string;
    }[];
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
        description: string;
        productId: string | null;
        sku: string | null;
        type: CartAdjustmentType;
    }[];
    credentialToken: string;
    items: NormalizedTempCartItem[];
    storeBaseUrl: string;
    storeId: number;
};
