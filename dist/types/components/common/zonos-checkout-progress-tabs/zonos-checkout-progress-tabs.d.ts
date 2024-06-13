import { type TabItem, type TabItems } from "../../store/checkout/cart";
import type { Color } from "../../../types/styles/Color";
export declare class ZonosCheckoutProgressTabs {
    ele: HTMLZonosCheckoutProgressTabsElement;
    /**
     * Color of the tab progress bar and label, override the secondary color of the appearance settings
     */
    tabColor?: string | null;
    /**
     * Background color of the parent that's wrapped around the tab progress bar
     */
    backgroundColor?: Color | (string & {
        _placeholder?: never;
    }) | null;
    /**
     * The total number of steps that's done
     */
    private getTotalSuccessStep;
    private isTabClickable;
    /**
     * Set the tab items data. This is to be used in storybook
     */
    setTabItems(tabItems: TabItems): Promise<void>;
    /**
     * Set selected tab. Only set the tab if it's clickable
     */
    setTabSelected(tabValue: TabItem['value']): Promise<void>;
    render(): any;
}
