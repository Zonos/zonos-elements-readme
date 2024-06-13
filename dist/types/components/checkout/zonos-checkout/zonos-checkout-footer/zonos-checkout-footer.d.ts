import type { ElementsUiTheme } from "../../../../types/generated/graphql.customer.types";
export declare class ZonosCheckoutFooter {
    el: HTMLZonosCheckoutFooterElement;
    /**
     * Override mobile mode
     */
    mobile: boolean;
    /**
     * Theme to change the color of the logo
     */
    dataTheme?: ElementsUiTheme;
    showLanguageDialog: boolean;
    isMobile: boolean;
    handleGlobalClick(e: MouseEvent): void;
    private toggleLanguageDialog;
    handleMobileChange(): void;
    componentWillLoad(): void;
    render(): any;
}
