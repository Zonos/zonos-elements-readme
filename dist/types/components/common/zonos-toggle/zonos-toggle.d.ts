import { type EventEmitter } from '../../../stencil-public-runtime';
import type { ToggleItem } from "../../../types/common-ui/Toggle";
export declare class ZonosToggle {
    /**
     * Options for the toggle
     */
    options: ToggleItem<string>[];
    /**
     * The selected option
     */
    value: string;
    /**
     * Event emitted when the toggle changes
     */
    toggleChanged: EventEmitter<string>;
    render(): any;
}
