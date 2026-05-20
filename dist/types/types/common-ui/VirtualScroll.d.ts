export type VirtualScrollRenderItem = (itemIndex: number) => HTMLElement | Promise<HTMLElement> | HTMLElement[] | Promise<HTMLElement[]> | Promise<HTMLElement>[];
