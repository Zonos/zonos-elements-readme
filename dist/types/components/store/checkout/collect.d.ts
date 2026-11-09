import type { GetShippingInfoByLandedCostIdResponse } from "../../../types/index";
import type { CheckoutPaymentProcessorType, CheckoutSessionDetailsFragment } from "../../../types/generated/graphql.internal.types";
type CollectStore = {
    amountDutyTaxFeeTotal: number | null;
    amountTotalPaid: number | null;
    /**
     * Optional Collect logo URL from the landed cost metadata. Overrides the
     * default appearance logo in the UI when set. The company name comes from the
     * origin party (`originCompanyName`).
     */
    collectLogoUrl: string | null;
    isFetchingShippingInfo: boolean;
    landedCostShortId: string | null;
    originCompanyName: string | null;
    partyBillingId: string | null;
    /**
     * Which payment processor the collect session uses (from the checkout session).
     * `null` until the session has been fetched.
     */
    paymentProcessor: CheckoutPaymentProcessorType | null;
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
