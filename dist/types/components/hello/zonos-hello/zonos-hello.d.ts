import { type AppearanceConfig } from "../../store/zonosStore";
import type { HelloMobileLocation } from "../../../types/generated/graphql.internal.types";
import type { Product } from "../../../types/hello/Product";
import type { RestrictedItem } from "../../../types/hello/RestrictedItem";
import type { ICountryJson } from "../../../types/ICountryJson";
export declare class ZonosHello {
    private helloRef?;
    /**
     * Force mobile styling instead of media query and use the passed location value
     * @default false
     */
    mobileLocationOverride?: HelloMobileLocation;
    /**
     * Force left animation instead of detecting which side has more space
     * @default false
     */
    animateFromLeftOverride?: boolean;
    /**
     * Override the appearance settings
     */
    appearanceSettingsOverride?: Partial<AppearanceConfig>;
    showPeekMessage: boolean;
    zonosStoreHelloSettings: import("../../..").HelloConfig;
    showDialog: boolean;
    peekMessage: string | null;
    initialUrl: string;
    /**
     * This array will hold all restricted items handled by Hello thus far
     */
    allRestrictedItems: RestrictedItem[];
    /**
     * This array will hold all products handled by Hello thus far
     */
    allFoundProducts: Product[];
    /**
     * This array will hold all products currently on the page
     */
    productsOnPage: Product[];
    /**
     * Hello widget is rendered on the screen, this should only triggered once
     */
    isHelloWidgetRendered: boolean;
    /**
     * Determine if the window is mobile
     */
    isMobile: boolean;
    /**
     * Get the country list the hello widget's country select is using
     */
    getCountryList(): Promise<ICountryJson | null>;
    private getHelloPeekMessage;
    private enableShowPeekMessage;
    private getNewItemRestrictions;
    private triggerShowPeekMessage;
    private disableAddToCartButtons;
    private handleItemRestrictions;
    private reloadHelloData;
    private handleProductCountChange;
    private watchProductCountChange;
    private watchPriceChange;
    private updateHelloOnPageChange;
    componentWillLoad(): void;
    /**
     * This method will trigger the currency conversion and display the converted value
     * @returns void
     */
    displayCurrency(): Promise<void>;
    /**
     * This method will call convert and format, and return the converted and formatted string
     * @returns string
     */
    convertAndFormat(value: number): Promise<string>;
    /**
     * This method will convert the currency and return the converted value
     * @returns number
     */
    convert(value: number): Promise<number>;
    /**
     * This method will format the currency and return the formatted string
     * @returns number
     */
    format(value: number): Promise<string>;
    private changeShowDialog;
    /**
     * This method show the hello dialog
     * @returns void
     */
    openHelloDialog(value: boolean): Promise<void>;
    /**
     * Determine if the peek message should animate from left or not
     */
    private shouldAnimateLeftDesktop;
    handleResize(): void;
    private shouldRenderHello;
    /**
     * This method will handle the Hello widget initialized state, should only trigger once
     */
    private handleHelloWidgetInitializedState;
    private getHelloLocation;
    handleAppearanceSettingsOverrideChange(): void;
    componentDidLoad(): void;
    render(): any;
}
