import type { ElementsUiTheme } from "../../../../types/generated/graphql.internal.types";
export declare class ZonosCollectFooter {
    el: HTMLZonosCollectFooterElement;
    /**
     * Override mobile mode
     */
    mobile: boolean;
    /**
     * Override tablet mode
     */
    tablet: boolean;
    /**
     * Theme to change the color of the logo
     */
    dataTheme?: ElementsUiTheme;
    showLanguageDialog: boolean;
    isMobile: boolean;
    isTablet: boolean;
    handleGlobalClick(e: MouseEvent): void;
    private toggleLanguageDialog;
    handleMobileChange(): void;
    handleTabletChange(): void;
    componentWillLoad(): void;
    render(): any;
}
