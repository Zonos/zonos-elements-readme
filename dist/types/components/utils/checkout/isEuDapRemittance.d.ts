import type { DeliveryType, LandedCostFragment } from "../../../types/generated/graphql.internal.types";
/**
 * EU 3-EUR cutover (05CHECK-893): when shipping to an EU country with a POSTAL
 * service level whose DAP landed cost has remittance available, we keep treating
 * the quote as DAP (duties paid upon delivery) instead of converting it to DDP.
 * The cart subtotals then show taxes and fees as collected while duties are
 * estimated and paid on delivery.
 *
 * @see [[cartStoreGetMethod]] for the DAP/DDP conversion this guards.
 */
export declare const isEuDapRemittance: ({ deliveryType, landedCost, shipToCountry, }: {
    deliveryType: DeliveryType | null | undefined;
    landedCost: Pick<LandedCostFragment, "method" | "remittance">;
    shipToCountry: string | null | undefined;
}) => boolean;
