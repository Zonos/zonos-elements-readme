import type { Color } from "../../../types/styles/Color";
export declare class ZonosIcon {
    /**
     * Determines if the icon should be auto height instead of square
     * @default false
     */
    autoHeight: boolean;
    /**
     * Color of the SVG
     * @default 'gray-1000'
     */
    iconColor: Color | (string & {
        _placeholder?: never;
    });
    /**
     * The content of the icon (full svg)
     * @example
     * import RemoveIcon from './assets/removeIcon.svg';
     * ...
     * <zonos-icon content={RemoveIcon}></zonos-icon>
     * // or
     * <zonos-icon content="<svg>...</svg>"></zonos-icon>
     */
    content: string;
    /**
     * The size of the icon
     * @default 24
     */
    size: number;
    el: HTMLZonosIconElement;
    render(): any;
}
