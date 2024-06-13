import type { ItemMeasurement } from "../../../store/checkout/cart";
import type { TempCartItem } from "../../../../types/checkout/api/TempCart";
/**
 * Mapping legacy measurement with dgs
 * @ref https://github.com/Zonos/ShippingQuoteService/blob/f8bd4f1ff41cb34b49b9f3f435576ec28dedf906/src/main/java/com/iglobal/services/shippingquote/dto/ShippingQuoteRequestDto.java#L441
 */
export declare const getMeasurements: (item: TempCartItem) => ItemMeasurement[];
