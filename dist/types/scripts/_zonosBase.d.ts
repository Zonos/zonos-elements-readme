import type { Stripe } from '@stripe/stripe-js';
import type { AppearanceConfig } from "../components/store/zonosStore";
import type { NotificationInit } from "../types/index";
import type { TempCart } from "../types/checkout/api/TempCart";
import type { CheckoutConfig } from "../types/checkout/CheckoutConfig";
import type { CountryCode, CurrencyCode } from "../types/generated/graphql.customer.types";
import type { HelloConfig } from "../types/hello/HelloConfig";
export type CurrencyConverter = (props: {
    selector?: string;
    /**
     * Convert the amount to the target currency in Hello (no locale format)
     * @param convert amount
     * @return number
     * @example
     * const price = 100; // in USD
     * convert(100) // return 136.5 when selected country in Hello is Canada
     */
    convert: (amount: number) => number;
    /**
     * Convert the amount to the target currency and format it in Hello with locale formatting
     * @param amount
     * @returns string - CA$136.50
     * @example
     * const price = 100;
     * convertAndFormat(100) // return CA$136.50 when selected country in Hello is Canada
     */
    convertAndFormat: (amount: number) => string;
    /**
     * Format the given amount to locale format
     * @param amount
     * @returns string - CA$100.00
     * @example
     * const price = 100
     * format(100) // return CA$100.00 when selected country in Hello is Canada
     */
    format: (amount: number) => string;
}) => void;
export type LoadZonosParamsConfig = {
    appearance?: Partial<AppearanceConfig>;
    checkoutSettings?: Partial<CheckoutConfig>;
    currencyConverter?: CurrencyConverter;
    helloSettings?: Partial<HelloConfig>;
    /**
     * Callback to be called when the country is changed
     */
    onCountryChange?: (props: {
        /**
         * @param countryCode Updated country code
         */
        countryCode: CountryCode;
        /**
         * @param currencyCode Updated currency code
         */
        currencyCode: CurrencyCode;
    }) => void;
};
export type LoadZonosParams = LoadZonosParamsConfig & {
    storeId: number;
    /**
     * Temporary cart UUID to be used for legacy zonos checkout. If this is provided, no need to configure `buildCartDetail`, `buildLandedCost` callback, zonosApiKey or storeId
     * @note This would be deprecated in the future when we fully migrate to new zonos checkout
     */
    tempCartUUID?: string;
    zonosApiKey: string;
};
export interface Zonos {
    /**
     * Toggle debug mode (add query param 'zonosDebug=1' to url)
     * @default false
     */
    debug?: boolean;
    doneInit: boolean;
    internationalHideSelector: string;
    isBigCommerce: boolean;
    isNpm: boolean;
    /** Flag if already alerted when preview domain is defined and it's connecting production environment */
    modeAlerted: boolean;
    storeId: number;
    /** Stripe instance */
    stripe: Stripe;
    tempCartData: TempCart | null;
    version: string;
    zonosApiKey: string;
    /**
     * Flag to send tracking event to api for conversion testing, since we don't send tracking event to api when in debug/development mode
     */
    zonosConversionTest?: boolean;
    zonosQaUrl: string | null;
    displayCurrency: () => void;
    getCurrentTimestamp: () => number;
    init: (params: LoadZonosParams) => Promise<void>;
    injectSupportGoogleFont: (fontUrl: string) => void;
    openHelloDialog: (state?: boolean) => void;
    setupGoogleFont: (fontFamily: string) => void;
    showNotification: (props: NotificationInit) => void;
    updateOrganizationName: (organizationName: string) => void;
}
export declare abstract class Zonos {
    static zonosApiKey: string;
    static stripe: Stripe;
    static storeId: number;
    static doneInit: boolean;
    static debug: boolean;
    static zonosConversionTest: boolean;
    static isBigCommerce: boolean;
    /**
     * By default, the package will load from npm
     */
    static isNpm: boolean;
    static internationalHideSelector: string;
    static zonosQaUrl: string | null;
    static version: string;
    static modeAlerted: boolean;
    static tempCartData: TempCart | null;
    static getCurrentTimestamp: () => number;
    private static zonosController;
    static init: ({ appearance, checkoutSettings, currencyConverter, helloSettings, onCountryChange, storeId, zonosApiKey, }: LoadZonosParams) => Promise<void>;
    static displayCurrency: () => void;
    static openHelloDialog: (value?: boolean) => void;
    static showNotification: (notification: NotificationInit) => void;
    static updateOrganizationName: (organizationName: string) => void;
    private static disablePlaceOrderButtons;
    private static injectController;
    private static injectSentryScript;
    private static injectScript;
    /**
     * We now support loading Zonos via npm. For clients using npm, `zonosBase` will always load from the server side. Therefore, the `zonosLoadUrl` defined earlier won't work since it lacks access to client-side APIs such as `window` and `document`.
     */
    private static getZonosUrl;
    private static injectZonosCdn;
    private static injectStylesheet;
    private static injectZonosCss;
    private static injectFonts;
    static setupGoogleFont: (fontFamily: string) => void;
    static injectSupportGoogleFont: (fontUrl: string) => void;
}
