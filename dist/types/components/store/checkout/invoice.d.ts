import type { GetInvoicePartyInfoByLandedCostIdResponse } from "../../../types/index";
import type { CheckoutSessionDetailsFragment } from "../../../types/generated/graphql.internal.types";
type InvoiceStore = {
    amountTotalDue: number | null;
    isFetchingPayorInfo: boolean;
    landedCostShortId: string | null;
    partyBillingId: string | null;
    payorAddress: GetInvoicePartyInfoByLandedCostIdResponse['payor'] | null;
};
declare const invoiceStoreReset: () => void, invoiceStore: InvoiceStore;
declare const invoiceStoreInitShippingInfo: ({ landedCostId, retries, }: {
    landedCostId: string;
    retries?: number;
}) => Promise<null | undefined>;
declare const invoiceStoreAsyncAddressUpdate: () => Promise<{
    partiesCreated: boolean;
}>;
declare const invoiceStoreUpdateSelectedShippingOption: (checkoutSession: CheckoutSessionDetailsFragment) => Promise<boolean>;
export { invoiceStore, invoiceStoreAsyncAddressUpdate, invoiceStoreInitShippingInfo, invoiceStoreReset, invoiceStoreUpdateSelectedShippingOption, };
