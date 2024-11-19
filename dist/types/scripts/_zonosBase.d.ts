import type { PayPalNamespace } from '@paypal/paypal-js';
import type { Stripe } from '@stripe/stripe-js';
import type { AppearanceConfig } from "../components/store/zonosStore";
import type { NotificationInit } from "../types/index";
import type { NormalizedTempCart } from "../types/checkout/api/NormalizedTempCart";
import { type CheckoutConfig } from "../types/checkout/CheckoutConfig";
import type { CountryCode, CurrencyCode, PaypalMockResponse } from "../types/generated/graphql.internal.types";
import type { HelloConfig } from "../types/hello/HelloConfig";
/**
 * Currency converter function to be used in Hello and Checkout
 * @note don't modify the element directly in this function, otherwise it might cause unexpected behavior like an infinite loop
 */
export type CurrencyConverter = (props: {
    /**
     * Current currency code
     */
    currencyCode: CurrencyCode;
    /**
     * The original amount before conversion
     */
    originalAmount: number;
    /**
     * HTML element matching the selector specified in the helloSettings init
     */
    selector: HTMLElement;
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
}) => string;
/**
 * This function will use the `Intl.NumberFormat` API to format the number with native decimal and thousand separators
 */
export type NumberFormat = (props: {
    amount: number;
}) => string;
export type LoadZonosParamsConfig = {
    appearance?: Partial<AppearanceConfig>;
    checkoutSettings?: Partial<CheckoutConfig>;
    /**
     * Currency converter function to be used in Hello and Checkout
     * @note don't modify element directly in this function, otherwise it might cause unexpected behavior like an infinite loop
     */
    currencyConverter?: CurrencyConverter;
    helloSettings?: Partial<HelloConfig>;
    /**
     * Hello and Checkout are using the Intl.NumberFormat API to format the currency. You can either use the default currency display or customize it.
     *
     * ### There are 3 options to customize the currency format:
     * @option1 Simple currency display change
     * @example
     * Price: "1200.99"
     * End result: "$1,200.99"
     *
     * Zonos.init({
     *   overrideCurrencyFormat: {
     *     currencyDisplay: 'symbol'
     *   }
     * });
     * ------
     * @option2 Customize currency format (use `convert` and `format` in `currencyConverter`)
     * @note This function would override the default behavior of `format`, and `convertAndFormat` function inside of `CurrencyConverter`
     * @note You can combine this function with `currencyConverter` to customize the currency format
     * @example
     * Price:  "1200.99"
     * End result: "USD - 1,200.99"
     *
     * Zonos.init({
     *   // `format` function in `currencyConverter` will trigger this function instead.
     *   overrideCurrencyFormat: ({ amount, currencyCode, numberFormat }) => {
     *     return `- ${numberFormat({ amount })}`;
     *   }
     *   currencyConverter: ({ convert, currencyCode, originalAmount, selector }) => {
     *      const convertedAmount = convert(originalAmount);
     *      // `format` function will call `overrideCurrencyFormat` function instead and it will just format the converted amount
     *      const formattedAmount = `${currencyCode} ${format(convertedAmount)}`;
     *      selector.innerText = formattedAmount;
     *
     *      revealPrice();
     *      return formattedAmount;
     *    },
     * });
     *
     * ------
     * @option3 Customize currency format (use `convertAndFormat`)
     * @example
     * Price: "1200.99"
     * End result: "USD - 1,200.99"
     *
     * Zonos.init({
     *   // `format` function in `currencyConverter` will trigger this function instead.
     *   overrideCurrencyFormat: ({ amount, currencyCode, numberFormat }) => {
     *     return `${currencyCode} - ${numberFormat({ amount })}`;
     *   }
     *   currencyConverter: ({ convertAndFormat, originalAmount, selector }) => {
     *      // `convertAndFormat` function calls `format` under the hood, so it will also call `overrideCurrencyFormat` function
     *      const convertedAndFormatedAmount = convertAndFormat(originalAmount);
     *      selector.innerText = convertedAndFormatedAmount;
     *
     *      revealPrice();
     *      return formattedAmount;
     *    },
     * });
     */
    overrideCurrencyFormat?: {
        /**
         * `currencyDisplay` option in Intl.NumberFormat
         * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencydisplay
         * @default 'symbol'
         *
         * @note These options won't apply, and will use '{amount} {currencyCode}' if the browser is IE.
         */
        currencyDisplay?: 'symbol' | 'code' | 'name' | 'narrowSymbol';
    }
    /**
     * Custom currency format function to be used in Hello and Checkout.
     * @note This function would override the default behavior of `format` function inside of `CurrencyConverter`
     * @note You can combine this function with `currencyConverter` to customize the currency format
     */
     | ((params: {
        /**
         * Amount to be formatted
         */
        amount: number;
        /**
         * Current selected currency code
         */
        currencyCode: CurrencyCode;
        /**
         * This function will use the `Intl.NumberFormat` API to format the number with native decimal and thousand separators
         */
        numberFormat: NumberFormat;
    }) => string);
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
     * If cart id is provided in the url with query param zCartUUID, you don't need to provide zonosApiKey
     */
    zonosApiKey?: string;
};
export interface Zonos {
    /**
     * Mock error response for Paypal. Mainly used for testing purposes
     */
    _paypalMockResponse: PaypalMockResponse | null;
    cartData: NormalizedTempCart | null;
    cartId: string | null;
    /**
     * Toggle debug mode (add query param 'zonosDebug=1' to url)
     * @default false
     */
    debug?: boolean;
    domain: string;
    doneInit: boolean;
    isBigCommerce: boolean;
    /**
     * This will be set to true when it's called form legacy checkout
     */
    isLegacyCheckout: boolean;
    isNpm: boolean;
    /** Flag if already alerted when preview domain is defined and it's connecting production environment */
    modeAlerted: boolean;
    paypal: PayPalNamespace | null;
    /**
     * Version release timestamp
     */
    releaseDate: string;
    /**
     * Show toggle on checkout modal to show amount in base or foreign currency.
     * Set this to true or set param `zonosShowBaseForeign=1` in url to show the toggle
     * @default false
     */
    showBaseForeign: boolean;
    storeId: number;
    /** Stripe instance */
    stripe: Stripe;
    version: string;
    zonosApiKey?: string;
    /**
     * Flag to send tracking event to api for conversion testing, since we don't send tracking event to api when in debug/development mode
     */
    zonosConversionTest?: boolean;
    zonosQaUrl: string | null;
    zonosQaUrlApi: string | null;
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
    static zonosApiKey?: string;
    static stripe: Stripe;
    static storeId: number;
    static doneInit: boolean;
    static debug: boolean;
    static zonosConversionTest: boolean;
    static _paypalMockResponse: PaypalMockResponse | null;
    static isBigCommerce: boolean;
    static releaseDate: string;
    static isLegacyCheckout: boolean;
    static domain: string;
    static showBaseForeign: boolean;
    /**
     * By default, the package will load from npm
     */
    static isNpm: boolean;
    static zonosQaUrl: string | null;
    static zonosQaUrlApi: string | null;
    static version: string;
    static modeAlerted: boolean;
    static cartData: NormalizedTempCart | null;
    static paypal: PayPalNamespace | null;
    static getCurrentTimestamp: () => number;
    static cartId: string | null;
    private static zonosController;
    static init: (params: LoadZonosParams) => Promise<void>;
    static displayCurrency: () => void;
    static openHelloDialog: (value?: boolean) => void;
    static showNotification: (notification: NotificationInit) => void;
    static updateOrganizationName: (organizationName: string) => void;
    private static disablePlaceOrderButtons;
    private static injectController;
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
