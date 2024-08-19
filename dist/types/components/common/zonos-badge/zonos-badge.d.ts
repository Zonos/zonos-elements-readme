import type { ColorPrefix } from "../../../types/styles/Color";
export declare class ZonosBadge {
    /**
     * Whether or not the badge is bold
     * @default false
     */
    bold: boolean;
    /**
     * The color of the badge
     * @default 24
     */
    badgeColor: ColorPrefix | 'transparent';
    /**
     * The icon element to display
     * @default null
     */
    icon?: HTMLZonosIconElement;
    /**
     * Position the icon to the right when icon is specified
     * @default false
     */
    iconRight: boolean;
    /**
     * The size of the badge
     * @default 'default'
     */
    size: 'small' | 'default';
    /**
     * Whether or not the badge is rounded
     * @default false
     */
    rounded: boolean;
    render(): any;
}
