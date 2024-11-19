import type { NormalizedTempCart } from "../NormalizedTempCart";
export type LegacyInventoryCheckPayload = {
    cartData: NormalizedTempCart;
};
export type LegacyInventoryCheckResponse = {
    available: boolean;
    errors: unknown[];
    status: number;
};
