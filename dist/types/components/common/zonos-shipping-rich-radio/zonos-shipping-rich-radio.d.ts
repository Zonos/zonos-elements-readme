import { type EventEmitter } from '../../../stencil-public-runtime';
import type { ElementsUiStyle, ElementsUiTheme } from "../../../types/generated/graphql.customer.types";
import type { Color } from "../../../types/styles/Color";
export type ShippingRichRadioItem = {
    caption?: string;
    label: string;
    price: string;
    sublabel?: string;
    value: string | number;
};
export declare class ZonosShippingRichRadio {
    /**
     * List of items to display
     */
    items: ShippingRichRadioItem[];
    /**
     * Override border color of the radio item
     */
    borderColor?: Color | (string & {
        _placeholder?: never;
    });
    /**
     * Override border color of the radio item
     */
    borderStyle?: ElementsUiStyle;
    /**
     * Theme of the radio item
     */
    theme?: ElementsUiTheme;
    /**
     * Initial selected value
     */
    initialSelectedValue?: string | number;
    /**
     * Selected item
     * @default {null|firstItem}
     */
    selectedItem: ShippingRichRadioItem | null;
    /**
     * Event emitted when an item is selected
     */
    radioSelected?: EventEmitter<ShippingRichRadioItem>;
    private handleRichRadioSelect;
    private getRadioItemStyleVariables;
    componentWillLoad(): void;
    render(): any;
}
