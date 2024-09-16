import type { CurrencyConverter, LoadZonosParamsConfig } from "../../scripts/_zonosBase";
import type { CheckoutConfig } from "../../types/checkout/CheckoutConfig";
import type { ElementsUiStyle, ElementsUiTheme, ZonosAttribution, ZonosSettingsQuery } from "../../types/generated/graphql.customer.types";
import type { HelloConfig } from "../../types/hello/HelloConfig";
export type AppearanceConfig = {
    colorPrimary?: string;
    colorSecondary?: string;
    fontFamily: string;
    logoUrl: string;
    style: ElementsUiStyle;
    theme: ElementsUiTheme;
    zonosAttribution: ZonosAttribution | null;
};
export type Page = 'home' | 'productList' | 'productDetail' | 'cart';
export type ZonosConfig = {
    appearance: AppearanceConfig;
    checkoutSettings: CheckoutConfig;
    currencyConverter?: CurrencyConverter;
    currentHelloPage: Page | '';
    helloSettings: HelloConfig;
    /**
     * Callback to be called when the country is changed
     */
    onCountryChange?: LoadZonosParamsConfig['onCountryChange'];
    organizationId: string;
    organizationName: string;
    /**
     * Currency format to be used in whole app
     */
    overrideCurrencyFormat?: LoadZonosParamsConfig['overrideCurrencyFormat'];
    sourceCurrency: string;
    storeId: number | null;
    /**
     * This is to determine if the request is sending to the zonos production or dev API enviroment
     */
    zonosMode: 'production' | 'test' | null;
};
type ZonosStore = ZonosConfig & {
    loadedConfig: boolean;
    stripeApiKey?: string;
    /**
     * Zonos API Key
     * @note optional if tempCartData is available as we can pull the zonosApiKey from the tempCartData
     */
    zonosApiKey: string;
};
declare const zonosStoreDispose: () => void, zonosStore: ZonosStore;
/**
 * Get theme from media query if theme is SYSTEM, otherwise return the theme
 */
declare const getZonosStoreTheme: (theme: ElementsUiTheme) => Exclude<ElementsUiTheme, 'SYSTEM'>;
/**
 * Init setting from zonos setting
 */
declare const zonosStoreInitSetting: ({ overrideSettings, zonosSettings, }: {
    overrideSettings?: LoadZonosParamsConfig;
    zonosSettings: ZonosSettingsQuery | null;
}) => void;
declare const zonosStoreFontFamily: () => string;
export { getZonosStoreTheme, zonosStore, zonosStoreDispose, zonosStoreFontFamily, zonosStoreInitSetting, };
