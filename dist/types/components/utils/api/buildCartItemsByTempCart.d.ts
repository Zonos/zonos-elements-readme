import type { CartItem } from "../../store/checkout/cart";
import type { TempCart } from "../../../types/checkout/api/TempCart";
/**
 * Map the items from tempCart like how we do it in dgs
 * @ref https://github.com/Zonos/ShippingQuoteService/blob/f8bd4f1ff41cb34b49b9f3f435576ec28dedf906/src/main/java/com/iglobal/services/shippingquote/dto/ShippingQuoteRequestDto.java#L393
 */
export declare const buildCartItemsByTempCart: (tempCartData: TempCart) => CartItem[];
