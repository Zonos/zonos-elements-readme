import type { VirtualScrollRenderItem } from "../../../types/common-ui/VirtualScroll";
/**
 * Virtual scroll component for efficiently rendering large lists
 *
 * The idea is from:
 * @ref https://github.com/beenotung/stencil-virtual-scroll/blob/master/src/components/virtual-scroll-list/virtual-scroll-list.scss
 * @ref https://github.dev/ionic-team/ionic-framework/blob/v6.7.5/core/src/components/virtual-scroll/virtual-scroll.tsx
 */
export declare class ZonosVirtualScroll {
    private readonly element;
    /**
     * Function to render each item in the virtual scroll
     */
    renderItem: VirtualScrollRenderItem;
    /**
     * Width of each item in pixels
     */
    itemWidth?: number;
    /**
     * Fallback height used when specific item height is not provided
     */
    fallbackItemHeight: number;
    /**
     * Array of heights for each item in pixels
     */
    itemHeights: number[];
    /**
     * Buffer size in pixels for pre-rendering items outside viewport
     * @default 100
     */
    buffer: number;
    /**
     * Current scroll position
     */
    private scrollTop;
    /**
     * Total height of all items combined
     */
    private totalHeight;
    /**
     * Client dimensions of the scroll container
     */
    private containerDimensions;
    /**
     * Watch for changes in item heights or fallback height and recalculate total height
     */
    private updateTotalHeight;
    /**
     * Update container dimensions when element size changes
     */
    private updateContainerDimensions;
    /**
     * Handle scroll events
     */
    private handleScroll;
    /**
     * Calculate which items should be rendered based on current scroll position
     */
    private getVisibleItems;
    /**
     * Component lifecycle - setup event listeners and initial calculations
     */
    connectedCallback(): void;
    /**
     * Component lifecycle - cleanup event listeners
     */
    disconnectedCallback(): void;
    render(): any;
}
