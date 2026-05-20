import type { CartAdjustmentType, CartCheckoutWorkflowQuery, CartType, CountryCode, CurrencyCode, ItemMeasurementType, ItemType, ItemUnitOfMeasure, LandedCostSettingsQuery } from "../../generated/graphql.internal.types";
import type { InclusivePriceConfigurationResponse } from "../../InclusivePricing";
import type { GenericZonosSettings } from "../../utils/ZonosSettings";
export type NormalizedItemAttribute = {
    key: string;
    value: string;
};
export type GetTempCartByIdPayloadOptions = {
    noOnlineStoreSettings?: boolean;
};
export type GetTempCartByIdPayload = {
    isTestMode?: boolean;
    options?: GetTempCartByIdPayloadOptions;
    renewCartExpirationToken?: string;
    tempCartUUID: string;
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
    metadata: {
        key: string;
        value: string;
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
    expiresAt?: string | null;
    id: string;
    items: NormalizedTempCartItem[];
    metadata: {
        key: string;
        value: string;
    }[];
    references: {
        checkoutSessionId?: string | null;
        landedCostId?: string | null;
    } | null;
    storeBaseUrl: string;
    storeId: number;
    type: CartType;
};
type Settings = Omit<CartCheckoutWorkflowQuery['cartCheckoutWorkflow'], 'cart'> & LandedCostSettingsQuery & {
    genericSettings: GenericZonosSettings | null;
};
export type CartCheckoutResult = {
    cartData: NormalizedTempCart;
    settings: Settings & {
        inclusivePriceConfigurations: InclusivePriceConfigurationResponse;
        organization: {
            id: string;
            name: string;
            references: {
                storeId: number | null;
            } | null;
        };
    };
    storeFaviconUrl: string;
    storeLogoUrl: string;
};
export {};
