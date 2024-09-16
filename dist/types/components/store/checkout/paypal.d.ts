import { type PayPalButtonsComponent } from '@paypal/paypal-js';
import type { CurrencyCode, ElementsUiStyle } from "../../../types/generated/graphql.customer.types";
type PaypalStore = {
    /**
     * Zonos order id created by paypal
     */
    orderIdCreated: string | null;
    paypalButtons: PayPalButtonsComponent[];
    paypalClientId: string;
    paypalErrorMessage: string | null;
};
declare const paypalStoreReset: () => void, paypalStore: PaypalStore;
declare const paypalStoreCreaterOrder: ({ checkoutSessionId, }: {
    checkoutSessionId: string;
}) => Promise<string>;
declare const paypalInitScript: ({ currency }: {
    currency: CurrencyCode;
}) => Promise<void>;
declare const paypalStoreInitButtons: (props?: {
    overrideBorderRaidus?: ElementsUiStyle;
    overridePrimaryColor?: string;
    onPaypalFail?: () => void;
    onPaypalSessionDone?: (params: {
        orderId: string;
    }) => void;
}) => PayPalButtonsComponent[] | null;
declare const paypalStoreHasPaypalEnabled: () => boolean;
export { paypalInitScript, paypalStore, paypalStoreCreaterOrder, paypalStoreHasPaypalEnabled, paypalStoreInitButtons, paypalStoreReset, };
