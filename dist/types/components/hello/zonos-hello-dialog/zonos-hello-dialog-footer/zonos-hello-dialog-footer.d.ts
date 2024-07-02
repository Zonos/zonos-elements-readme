import type { AppearanceConfig } from "../../../../components";
export declare class ZonosHelloDialogFooter {
    ele: HTMLZonosHelloDialogFooterElement;
    /**
     * Appearance settings
     */
    appearanceSettings?: Partial<AppearanceConfig>;
    /**
     * Whether or not the country select dialog is open
     * @default false
     */
    setShowCountrySelect: (value: boolean) => void;
    /**
     * Whether or not the language select dialog is open
     * @default false
     */
    setShowLanguageSelect: (value: boolean) => void;
    render(): any;
}
