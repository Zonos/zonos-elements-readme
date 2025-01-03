import type { TabItem, TabItems } from "../../components";
/**
 * Reset any done tabs after selected tab to undone. This is to force user to go through all tabs again
 */
export declare const resetToSelectedTab: ({ selectedTab, tabList, }: {
    selectedTab: TabItem["value"];
    tabList: TabItems;
}) => {
    "customer-info": TabItem;
    shipping: TabItem;
    payment: TabItem;
};
