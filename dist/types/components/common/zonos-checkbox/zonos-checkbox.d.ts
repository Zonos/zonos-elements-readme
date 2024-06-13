import { type EventEmitter } from '../../../stencil-public-runtime';
import type { ElementsUiStyle } from "../../../types/generated/graphql.customer.types";
import type { CheckboxColorPrefix } from "../../../types/styles/Color";
import type { Size } from "../../../types/styles/Text";
export declare class ZonosCheckbox {
    /**
     * background color of the checkbox
     */
    backgroundColor: CheckboxColorPrefix | (string & {
        _placeholder?: never;
    });
    /**
     * The label of the checkbox
     */
    label?: string;
    /**
     * Whether or not the checkbox is checked
     */
    isChecked: boolean;
    /**
     * Whether or not the checkbox is disabled
     */
    isDisabled: boolean;
    /**
     * Size of the checkbox
     */
    size: 12 | 16 | 24;
    /**
     * Font size of the checkbox text
     */
    fontSize: Size;
    /**
     * The border style of the button
     * @default ROUNDED
     */
    borderStyle?: ElementsUiStyle;
    /**
     * Event to emit when the checkbox is changed
     */
    checkboxSelected: EventEmitter<boolean>;
    onClick(): void;
    render(): any;
}
