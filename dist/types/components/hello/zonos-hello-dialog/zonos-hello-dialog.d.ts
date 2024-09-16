import { type EventEmitter } from '../../../stencil-public-runtime';
import type { AppearanceConfig } from "../../store/zonosStore";
import type { HelloMobileLocation } from "../../../types/generated/graphql.customer.types";
import type { RestrictedItem } from "../../../types/hello/RestrictedItem";
export declare class ZonosHelloDialog {
    /**
     * Whether or not the dialog is open
     */
    isOpen: boolean;
    /**
     * The function to set the open state
     * @default () => {}
     */
    setIsOpen: (isOpen: boolean) => void;
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
    appearanceSettings?: Partial<AppearanceConfig>;
    /**
     * Item restrictions array if any
     * @default []
     */
    restrictedItems: RestrictedItem[];
    welcomeMessage: string;
    showCountrySelect: boolean;
    showLanguageSelect: boolean;
    /**
     * Close dialog button click
     */
    closeDialog: EventEmitter<void>;
    private dialogRef;
    private clickOutsideDialogHandler;
    private getCurrentPageEnum;
    private setShowCountrySelect;
    private setShowLanguageSelect;
    globalClickHandler(e: MouseEvent): void;
    isOpenHandler(isOpen: boolean): void;
    /**
     * Store has tax id setup in Zonos settings
     */
    private hasTaxId;
    private hasInclusivePrices;
    /**
     * Some countries don't have threshold. So we need to show generic message for them
     */
    private isNoThresholdCountry;
    private getDutyMessage;
    private getTaxMessage;
    private getUkDutyTaxMessage;
    private getAustraliaDutyTaxMessage;
    private getNewZealandDutyTaxMessge;
    private getInclusivePriceMessage;
    /**
     * Get additional duty tax message if selected country has tax id
     */
    private getAdditionalDutyTaxMessage;
    render(): any;
}
