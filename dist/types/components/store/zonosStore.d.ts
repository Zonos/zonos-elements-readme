import type { CheckoutAddressService } from "../utils/iframe/CheckoutAddressService";
import type { CurrencyConverter, LoadZonosParamsConfig } from "../../scripts/_zonosBase";
import type { TestKey } from "../../types/index";
import type { CheckoutConfig } from "../../types/checkout/CheckoutConfig";
import type { CountryCode, ElementsUiStyle, ElementsUiTheme, ZonosAttribution } from "../../types/generated/graphql.internal.types";
import type { HelloConfig } from "../../types/hello/HelloConfig";
import type { GenericZonosSettings, ZonosSettings } from "../../types/utils/ZonosSettings";
export type AppearanceConfig = {
    colorPrimary?: string;
    colorSecondary?: string;
    fontFamily: string;
    fontSize2XL?: number;
    fontSize3XL?: number;
    fontSizeBase?: number;
    fontSizeInputLabel?: number;
    fontSizeInputValue?: number;
    fontSizeL?: number;
    fontSizeS?: number;
    fontSizeXL?: number;
    fontSizeXS?: number;
    logoUrl: string;
    style: ElementsUiStyle;
    theme: ElementsUiTheme;
    zonosAttribution: ZonosAttribution | null;
};
export type Page = 'home' | 'productList' | 'productDetail' | 'cart';
export type ZonosConfig = {
    appearance: AppearanceConfig;
    /**
     * Service for managing address selection and validation
     */
    checkoutAddressService: CheckoutAddressService | null;
    checkoutSettings: CheckoutConfig;
    currencyConverter?: CurrencyConverter;
    currentHelloPage: Page | '';
    /**
     * List of countries that are disabled in the checkout, will also be disabled for hello
     */
    disabledCountries: CountryCode[];
    /**
     * Enabled test keys, selectedVariant will be null if we have not yet selected a variant for the test. (pull from settings)
     */
    enabledVariantTestKeys: TestKey[];
    genericSettings?: GenericZonosSettings;
    helloSettings: HelloConfig;
    /**
     * Callback to be called when the country is changed (Currency code will default to null if the country is not in shipping zone)
     */
    onCountryChange?: LoadZonosParamsConfig['onCountryChange'];
    onlineStoreSettings: {
        allowedDomains: string[];
        url: string;
    };
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
declare const zonosStoreDispose: () => void, zonosStoreOnChange: import("@stencil/store/dist/types").OnChangeHandler<ZonosStore>, zonosStore: ZonosStore;
/**
 * Get theme from media query if theme is SYSTEM, otherwise return the theme
 */
declare const getZonosStoreTheme: (theme: ElementsUiTheme) => Exclude<ElementsUiTheme, "SYSTEM">;
/**
 * Init setting from zonos setting
 */
declare const zonosStoreInitSetting: ({ overrideSettings, zonosSettings, }: {
    overrideSettings?: LoadZonosParamsConfig;
    zonosSettings: ZonosSettings | null;
}) => void;
declare const zonosStoreFontFamily: () => string;
export { getZonosStoreTheme, zonosStore, zonosStoreDispose, zonosStoreFontFamily, zonosStoreInitSetting, zonosStoreOnChange, };
