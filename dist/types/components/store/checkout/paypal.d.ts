import { type PayPalButtonsComponent, type PayPalNamespace } from '@paypal/paypal-js';
import type { PaypalOrderIntent } from "../../../types/index";
import type { CurrencyCode, ElementsUiStyle } from "../../../types/generated/graphql.internal.types";
type PaypalStore = {
    intent: PaypalOrderIntent;
    /**
     * Zonos order id created by paypal
     */
    orderIdCreated: string | null;
    paypal: PayPalNamespace | null;
    paypalButtons: PayPalButtonsComponent[];
    paypalClientId: string;
    paypalErrorMessage: string | null;
};
declare const paypalStoreOnChange: import("@stencil/store/dist/types").OnChangeHandler<PaypalStore>, paypalStoreReset: () => void, paypalStore: PaypalStore;
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
export { paypalInitScript, paypalStore, paypalStoreCreaterOrder, paypalStoreHasPaypalEnabled, paypalStoreInitButtons, paypalStoreOnChange, paypalStoreReset, };
