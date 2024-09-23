import type { CartAdjustment, CartItem } from "../../store/checkout/cart";
import type { NormalizedTempCart } from "../../../types/checkout/api/NormalizedTempCart";
type Return = {
    adjustments: CartAdjustment[];
    cartItems: CartItem[];
};
/**
 * Map the items from tempCart like how we do it in dgs
 * @ref https://github.com/Zonos/ShippingQuoteService/blob/f8bd4f1ff41cb34b49b9f3f435576ec28dedf906/src/main/java/com/iglobal/services/shippingquote/dto/ShippingQuoteRequestDto.java#L393
 */
export declare const buildCartItemsByTempCart: (tempCartData: NormalizedTempCart) => Return;
export {};
