import { type EventEmitter } from '../../../../stencil-public-runtime';
import type { ShippingRichRadioItem } from "../../../common/zonos-shipping-rich-radio/zonos-shipping-rich-radio";
export declare class ZonosShipping {
    /**
     * Whether or not the continue button is loading
     */
    continueLoading: boolean;
    /**
     * Submit button main color
     */
    submitBtnColor?: string;
    /**
     * Whether or not the checkout is in mobile mode
     */
    submitBtnType?: HTMLZonosButtonElement['variant'];
    /**
     * Event to emit when the continue button is clicked
     */
    continueClicked: EventEmitter<void>;
    selectedShippingMethod: ShippingRichRadioItem | null;
    collapsedDAPOptions: boolean;
    /**
     * Whether or not the user is selecting a shipping method
     */
    isSelecting: boolean;
    /**
     * Show error banner when the form is not complete, and user clicks on `Submit` button
     * @default false
     */
    showErrorBanner: boolean;
    serviceLevelsDDP: ShippingRichRadioItem[];
    serviceLevelsDAP: ShippingRichRadioItem[];
    serviceLevelsOther: ShippingRichRadioItem[];
    serviceLevelsAll: ShippingRichRadioItem[];
    displayBaseCurrency: boolean;
    private handleRadioSelected;
    private handleValidate;
    private isOutdatedShippingData;
    /**
     * handler for continue button click
     */
    private continueClickHandler;
    private getLandedCostMethodLabelSuffix;
    private initServiceLevels;
    private isCurrencyToggled;
    private preselectFirstShippingMethod;
    componentWillLoad(): void;
    render(): any;
}
