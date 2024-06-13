import type { TempCartItem } from "../../../../types/checkout/api/TempCart";
type AttributeKey = 'brand' | 'category' | 'color' | 'customization' | 'descriptionDetailed' | 'fabricContent' | 'ltlClass' | 'pickingLocation' | 'shipFromLocation' | 'size' | 'material' | 'status';
/**
 * Map legacy item attribute to dgs item attributes
 * @ref https://github.com/Zonos/ShippingQuoteService/blob/f8bd4f1ff41cb34b49b9f3f435576ec28dedf906/src/main/java/com/iglobal/services/shippingquote/dto/ShippingQuoteRequestDto.java#L412
 */
export declare const getAttributes: (item: TempCartItem) => {
    key: AttributeKey;
    value: string;
}[];
export {};
