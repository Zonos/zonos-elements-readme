import type { GetShippingInfoByLandedCostIdResponse } from "../../../types/index";
import type { CheckoutSessionDetailsFragment } from "../../../types/generated/graphql.internal.types";
type CollectStore = {
    amountDutyTaxFeeTotal: number | null;
    amountTotalPaid: number | null;
    isFetchingShippingInfo: boolean;
    landedCostShortId: string | null;
    originCompanyName: string | null;
    partyBillingId: string | null;
    shippingAddress: GetShippingInfoByLandedCostIdResponse['shipping'] | null;
};
declare const collectStoreReset: () => void, collectStore: CollectStore;
declare const collectStoreInitShippingInfo: ({ landedCostId, retries, }: {
    landedCostId: string;
    retries?: number;
}) => Promise<null | undefined>;
declare const collectStoreAsyncAddressUpdate: () => Promise<{
    partiesCreated: boolean;
}>;
declare const collectStoreUpdateSelectedShippingOption: (checkoutSession: CheckoutSessionDetailsFragment) => Promise<boolean>;
export { collectStore, collectStoreAsyncAddressUpdate, collectStoreInitShippingInfo, collectStoreReset, collectStoreUpdateSelectedShippingOption, };
