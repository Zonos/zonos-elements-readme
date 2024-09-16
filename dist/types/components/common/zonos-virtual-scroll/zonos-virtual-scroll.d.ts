/**
 * The idea is from
 * @ref https://github.com/beenotung/stencil-virtual-scroll/blob/master/src/components/virtual-scroll-list/virtual-scroll-list.scss
 * @ref https://github.dev/ionic-team/ionic-framework/blob/v6.7.5/core/src/components/virtual-scroll/virtual-scroll.tsx
 */
export declare class ZonosVirtualScroll {
    ele: HTMLZonosVirtualScrollElement;
    container?: HTMLElement;
    /**
     * Render item
     */
    renderItem: (itemIndex: number) => HTMLElement | Promise<HTMLElement> | HTMLElement[] | Promise<HTMLElement[]> | Promise<HTMLElement>[];
    /**
     * Width of each item
     */
    itemWidth?: number;
    /**
     * Height that is used as a fallback if height is not provided
     */
    fallbackItemHeight: number;
    /**
     * Heights list of each item
     */
    itemHeights: number[];
    scrollTop: number;
    totalHeight: number;
    updateTotalHeight(): void;
    private scrollListener;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}
